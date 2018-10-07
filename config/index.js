'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.
const webpacConfig = require("../src/webpackConfig.js");
const path = require('path')
var buildtype = process.argv.slice(2)[0] || 'development'
module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',//静态资源文件夹(一般存放css、js、image等文件)
        assetsPublicPath: webpacConfig.dev.assetsPublicPath || '/',//根目录
        proxyTable: webpacConfig.dev.proxyTable || {},//配置API代理，可利用该属性解决跨域的问题

        // Various Dev Server settings
        host: webpacConfig.dev.host ||'localhost', // can be overwritten by process.env.HOST
        port: webpacConfig.dev.port || 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true,//编译后自动打开浏览器页面 http://localhost:3030/("port + host",默认"false"),设置路由重定向自动打开您的默认页面
        errorOverlay: true,//浏览器错误提示
        notifyOnErrors: true,//跨平台错误提示
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
        //webpack提供的使用文件系统(file system)获取文件改动的通知devServer.watchOptions(监控文件改动)
        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),// C:\Users\tgd\Desktop\BGModel\vue     //webpack提供的使用文件系统(file system)获取文件改动的通知devServer.watchOptions(监控文件改动)HoutaiPCModel222\dist\index.html

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),//打包编译的根路径(默认dist，存放打包压缩后的代码)
        assetsSubDirectory: 'static',//静态资源文件夹(一般存放css、js、image等文件)
        assetsPublicPath: webpacConfig.build.assetsPublicPath || '/',//发布的根目录(dist文件夹所在路径)

        /**
         * Source Maps
         */

        productionSourceMap: buildtype == 'pro' ? false : true,//是否开启source-map
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: buildtype == 'pro' ? true : false,//是否压缩
        productionGzipExtensions: ['js', 'css'],//unit的gzip命令用来压缩文件（gzip模式下需要压缩的文件的扩展名有js和css）

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report//是否开启打包后的分析报告
    }
}
