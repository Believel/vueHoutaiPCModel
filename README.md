# pro

> A Vue.js project
vue基础项目PC版
####
## 项目使用库 element-ui jquery axios vuex sass
## src目录
##   --api.js 接口目录地址
##   --config.js 配置不同环境静态变量，和通用变量
##   --webpackConfig.js 配置开发与build不同环境的状态
##   --store.js 存放vuex
##   --main.js  入口
## src/modle
##   -- vueRequest axios请求中间层。通用请求配置
## src/componets
##   --HelloWorld 组件
## src/resources 项目架构资源文件
## src/util 通用工具库
## src/assets 使用webpack打包的内部项目资源文件
## static 不使用webpack打包的外部静态资源文件
####

# serve with hot reload at localhost:8080
npm run dev 使用本地localhost

## 环境Build

# 内网开发
npm run build dev

# 外网开发
npm run build beta

# 外网测试
npm run build testdev

# 生产环境
npm run build pro
```
