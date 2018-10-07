'use strict'
// webpack配置开发环境中的入口
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
// 将对应环境变量的多个配置对象整合后给webpack使用
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
// 我们一般会把开发的所有源码和资源文件放在 src/ 目录下，构建的时候产出一个 build/ 目录，通常会直接拿 build 中的所有文件来发布。有些文件没经过 webpack 处理，但是我们希望它们也能出现在 build 目录下，这时就可以使用 CopyWebpackPlugin 来处理了...
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')// 查看空闲端口位置，默认情况下搜索8000这个端口

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap,
            usePostCSS: true
        })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool, // 调试模式

    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {//使用 HTML5 History API 时， 404 响应替代为 index.html
            rewrites: [
                {
                    from: /.*/,
                    to: path.posix.join(
                        config.dev.assetsPublicPath,
                        'index.html'
                    )
                }
            ]
        },
        hot: true,//热重载
        contentBase: false, // since we use CopyWebpackPlugin.// 提供静态文件访问
        compress: true,//压缩
        host: HOST || config.dev.host,
        port: PORT || config.dev.port, //指定静态服务器的端口
        open: config.dev.autoOpenBrowser,//npm run dev 时自动打开浏览器
        overlay: config.dev.errorOverlay
            ? { warnings: false, errors: true }
            : false,// 显示warning 和 error 信息
        publicPath: config.dev.assetsPublicPath, // 用于指定构建好的静态文件在浏览器中用什么路径去访问，默认是 /，
        proxy: config.dev.proxyTable,// 用于配置 webpack-dev-server 将特定 URL 的请求代理到另外一台服务器上
        quiet: true, // necessary for FriendlyErrorsPlugin //控制台打印警告和错误(用FriendlyErrorsPlugin 为 true)
        watchOptions: {// 检测文件改动
            poll: config.dev.poll
        }
    },
    plugins: [
        // 用于创建一些在编译时可以配置的全局常量，这些常量可以在webpack的配置中指定
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),//模块热替换插件，修改模块时不需要刷新页面
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),//webpack编译错误的时候，中断打包进程，防止错误代码打包到文件中
        // 将打包编译好的代码插入index.html
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        // copy custom static assets
        // 提取static assets 中css 复制到dist/static文件
        new CopyWebpackPlugin([
            {
                // 配置来源
                from: path.resolve(__dirname, '../static'),
                // 配置目标路径
                to: config.dev.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ]
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
            // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(
                new FriendlyErrorsPlugin({
                    compilationSuccessInfo: {
                        messages: [
                            `Your application is running here: http://${
                                devWebpackConfig.devServer.host
                            }:${port}`
                        ]
                    },
                    onErrors: config.dev.notifyOnErrors
                        ? utils.createNotifierCallback()
                        : undefined
                })
            )

            resolve(devWebpackConfig)
        }
    })
})
