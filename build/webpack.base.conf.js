'use strict'
// 开发、测试、生产环境的公共基础配置文件，配置输出环境，配置模块resolve和插件等
const path = require('path')
const utils = require('./utils')// 工具函数集合
const config = require('../config')// 配置文件
const vueLoaderConfig = require('./vue-loader.conf')// 工具函数集合
var webpack = require('webpack')
/**
 * 获取"绝对路径"
 * @method resolve
 * @param  {String} dir 相对于本文件的路径
 * @return {String}     绝对路径
 */
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'), // C:\Users\tgd\Desktop\BGModel\vueHoutaiPCModel222
     //入口js文件(默认为单页面所以只有app一个入口)
    entry: {
        app: './src/main.js'
    },
    //配置出口
    output: {
        path: config.build.assetsRoot,//打包编译的根路径(dist)
        filename: '[name].js',
        publicPath:
            process.env.NODE_ENV === 'production'
                ? config.build.assetsPublicPath
                : config.dev.assetsPublicPath  //发布路径
    },
    resolve: {
        // 这里的顺序代表匹配后缀的优先级
        extensions: ['.js', '.vue', '.json'], // 自动补全的扩展名
        // 别名
        alias: {
            // 精确匹配：在给定对象的键名后天就$
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../src/components'),// eg:"src/components" => "@/components"
            'static': path.resolve(__dirname, '../static')
        }
    },
    plugins: [
        // webpack内置的插件，该组件用于引用某些模块作为应用运行时的变量，从而不必每次都用require或者import
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [
            {
            //使用vue-loader将vue文件编译转换为js
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
            //通过babel-loader将ES6编译压缩成ES5
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('src'),
                    resolve('test'),
                    resolve('node_modules/webpack-dev-server/client')
                ]
            },
            {
                test: /\.scss$/,
                loader: ['style', 'css', 'sass']
            },
            {
            //使用url-loader处理(图片、音像、字体)，超过10000编译成base64
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, //单位是Byte,当文件小于10KB时作为DataURL处理
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    //nodeJs全局变量/模块，防止webpack注入一些nodeJs的东西到vue中
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}
