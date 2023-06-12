name: Fetch Contentful Data and Oss Images

on: workflow_dispatch

jobs:
  fetch-data:
    runs-on: ubuntu-latest
    env:
      ACCESS_TOKEN: ${{ secrets.CONTENTFUL_GRAPHQLTOKEN }}
      LOCALES: "en-US,zh-CN"
      DATA_DIR: "plugins/appstore/src/data"
      APPSTORE_LOGO_DIR: "plugins/appstore/src/assets/images/"
      MYAPPS_LOGO_DIR: "plugins/myapps/src/assets/images/"
      SCREENSHOT_DIR: "plugins/appstore/src/assets/images/screenshot"
      LIMIT: 100

    steps:
      - uses: actions/checkout@v2

      - name: Fetch catalog data from contentful graphql
        run: |
          mkdir -p $DATA_DIR
          IFS=',' read -ra LOCALE_ARRAY <<< "$LOCALES"
          for LOCALE in "${LOCALE_ARRAY[@]}"; do
            curl -X POST \
              -H "Content-Type: application/json" \
              -H "Authorization: Bearer $ACCESS_TOKEN" \
              -d '{"query":"query($locale: String){catalog(id: \"2Yp0TY3kBHgG6VDjsHZNpK\",locale:$locale) {linkedFrom(allowedLocales:[\"en-US\"]) {catalogCollection(limit:20) {items {key position title linkedFrom(allowedLocales:[\"en-US\"]) {catalogCollection(limit:20) {items {key title position}}}}}}}}","variables":{"locale":"'$LOCALE'"}}' \
              https://graphql.contentful.com/content/v1/spaces/ffrhttfighww | \
              jq '.data.catalog.linkedFrom.catalogCollection.items' | \
              sed "1s/^/const catalog_${LOCALE:0:2} = /" | \
              sed "$ s/$/;/" | \
              sed "$ a export { catalog_${LOCALE:0:2}};" > $DATA_DIR/catalog_${LOCALE:0:2}.js
          done

      - name: Fetch product data and download screenshots
        run: |
          mkdir -p $DATA_DIR
          IFS=',' read -ra LOCALE_ARRAY <<< "$LOCALES"
          for LOCALE in "${LOCALE_ARRAY[@]}"; do
            SKIP=0
            TOTAL=0
            ITEMS=()
            while [ $SKIP -le $TOTAL ]; do
              RESPONSE=$(curl -X POST \
                -H "Content-Type: application/json" \
                -H "Authorization: Bearer $ACCESS_TOKEN" \
                -d '{"query":"query($locale: String,$skip: Int){productCollection(locale:$locale,where:{appStore:true},limit: '$LIMIT', skip: $skip) {total items {sys {id} key hot trademark summary overview websiteurl description screenshots distribution vcpu memory storage logo {imageurl} catalogCollection(limit:15) {items {key title catalogCollection(limit:5){items{key title}}}}}}}", "variables":{"locale":"'$LOCALE'", "skip":'$SKIP'}}' \
                https://graphql.contentful.com/content/v1/spaces/ffrhttfighww)
              ITEMS+=($(echo $RESPONSE | jq '.data.productCollection.items'))
              TOTAL=$(echo $RESPONSE | jq '.data.productCollection.total')
              SKIP=$((SKIP + LIMIT))
            done
            echo ${ITEMS[@]} | jq -s 'add' | \
            sed "1s/^/const product_${LOCALE:0:2}= /" | \
            sed "$ s/$/;/" | \
            sed "$ a export { product_${LOCALE:0:2}};" > $DATA_DIR/product_${LOCALE:0:2}.js
          done && mkdir -p $SCREENSHOT_DIR && IFS=',' read -ra LOCALE_ARRAY <<< "$LOCALES" && for LOCALE in "${LOCALE_ARRAY[@]}"; do
            jq -r '.[].screenshots[].value' <(node -e "const { product_${LOCALE:0:2} } = require('$DATA_DIR/product_${LOCALE:0:2}.js'); console.log(JSON.stringify(product_${LOCALE:0:2}));") |  xargs -I {} -P 8 bash -c 'url={}; url=${url/https:\/\/libs.websoft9.com/http:\/\/libs.websoft9.com};value=${url#*DocsPicture/}; value=${value%/*}; lang=${value%%/*}; mkdir -p $SCREENSHOT_DIR/$lang; FILENAME=$(basename $url); wget --tries=3 --retry-connrefused --waitretry=1 --read-timeout=20 --timeout=15 -t 0 $url -O $SCREENSHOT_DIR/$lang/$FILENAME || echo $url >> $SCREENSHOT_DIR/Error.log'
          done

      - name: Install ossutil
        run: |
          wget http://gosspublic.alicdn.com/ossutil/1.7.6/ossutil64
          chmod 755 ossutil64
      - name: Configure ossutil
        run: ./ossutil64 config -e ${{ secrets.OSS_ENDPOINT }} -i ${{ secrets.OSS_ACCESS_KEY_ID }} -k ${{ secrets.OSS_ACCESS_KEY_SECRET }}

      - name: Download logos from oss
        run: ./ossutil64 cp oss://libs-websoft9-com/Websoft9/logo/product/ $APPSTORE_LOGO_DIR -r --update && ./ossutil64 cp oss://libs-websoft9-com/Websoft9/logo/product/ $MYAPPS_LOGO_DIR -r --update

      - name: Commit and push changes
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: Update data 、logos、screenshots
