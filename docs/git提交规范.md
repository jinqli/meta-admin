### git 提交规范

1. yarn add commitizen -D or npm install -g commitizen@4.2.4

   - cz-cli --> git cz === git commit -m

2. 安装并配置 cz-customizable 插件

   - npm i cz-customizable@6.3.0 --save-dev

3. esit package.json

   ```json
   "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    }
   }
   ```

4. 根目录创建.cz-config.js
   ```js
   module.exports = {}
   ```
