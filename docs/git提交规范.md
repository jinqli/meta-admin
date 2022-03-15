## git 提交规范

### commitizen

1. 全局安装

   ```sh
   yarn add commitizen -g
   # or
   npm install -g commitizen@4.2.4
   # cz-cli --> git cz === git commit -m
   ```

2. 安装并配置 cz-customizable 插件

   ```sh
   npm i cz-customizable@6.3.0 --save-dev
   ```

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

### Git Hooks

1. pre-commit：可以用来规范化标准格式，并且可以按需指定是否要拒绝本次提交
2. commit-msg：会在提交前被调用，并且可以按需指定是否拒绝本次提交

#### husky + commitlint

1. commitlint：用于检查提交信息
2. husky：是 `git hooks`工具

##### commitlint

1. 安装依赖

   ```sh
   npm install --save-dev @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4
   ```

2. 在根目录创建 commitlint.config.js

   ```javascript
   module.exports = {
     extends: ["@commitlint/config-conventional"]
   }
   ```

3. 定义配置文件

   ```js
   module.exports = {
     // 继承的规则
     extends: ["@commitlint/config-conventional"],
     // 定义规则类型
     rules: {
       // type 类型定义，表示git提交的type必须在以下范围内
       "type-enum": [
         // 当前验证的错误级别
         2,
         // 在什么情况下进行验证
         "always",
         // 泛型内容
         [
           "feat",
           "fix",
           "docs",
           "style",
           "refactor",
           "perf",
           "test",
           "chore",
           "revert",
           "build"
         ]
       ],
       // subject 大小写不做校验
       "subject-case": [0]
     }
   }
   ```

##### husky

1. 安装依赖

   ```sh
   npm install --save-dev husky@7.0.1
   ```

2. 启动`hooks`， 生成`.husky`文件夹

   ```sh
   npx husky install
   ```

3. 在`package.json`中生成`prepare`指令

   ```sh
   npm set-script prepare "husky install"
   ```

4. 执行`prepare`

   ```sh
   yarn prepare
   # or
   npm run prepare
   ```

5. 添加`commit`的`hook`到`husky`中，并指令在`commit-msg`的`hooks`下执行`npx --no-install commitlint --edit "$1"`指令

   ```sh
   npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
   ```

##### 通过`pre-commit`检测提交时代码规范

1. 监测`pre-commit`钩子，在该钩子下执行`npx eslint --ext .js,.vue src`指令进行相关检测

   ```sh
   npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"
   ```

##### lint-staged

​ 目的：避免每次修改后提交时去检测和修复全部代码

1. 安装
   <!-- TODO：代码提价时修复 -->
   ```sh
   npm install --save-dev lint-staged
   ```
