'use strict'
const path = require('path')
const config = require('../config')
// 把依赖的CSS抽离成单独文件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
/** @method assertsPath  生成静态资源的路径(判断开发环境和生产环境,为config文件中index.js文件中定义assetsSubDirectory)
 * @param  {String}    _path 相对于静态资源文件夹的文件路径
 * @return {String}          静态资源完整路径
 */
exports.assetsPath = function(_path) {
    const assetsSubDirectory =
        process.env.NODE_ENV === 'production'
            ? config.build.assetsSubDirectory
            : config.dev.assetsSubDirectory
      //nodeJs path提供用于处理文件路径的工具;path.posix提供对路径方法的POSIX(可移植性操作系统接口)特定实现的访问(可跨平台); path.posix.join与path.join一样，不过总是以 posix 兼容的方式交互
    return path.posix.join(assetsSubDirectory, _path)
}
/**@method cssLoaders  生成处理css的loaders配置,使用css-loader和postcssLoader,通过options.usePostCSS属性来判断是否使用postcssLoader中压缩等方法
 * @param  {Object} option = {sourceMap: true,// 是否开启 sourceMapextract: true // 是否提取css}生成配置
 * @return {Object} 处理css的loaders配置对象
 */
exports.cssLoaders = function(options) {
    options = options || {}

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap
        }
    }
  /**@method generateLoaders  生成 ExtractTextPlugin对象或loader字符串
   * @param  {Array}        loaders loader名称数组
   * @return {String|Object}        ExtractTextPlugin对象或loader字符串
   */
    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions) {
        const loaders = options.usePostCSS
            ? [cssLoader, postcssLoader]
            : [cssLoader]

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }

    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
        css: generateLoaders(),//需要css-loader 和 vue-style-loader
        postcss: generateLoaders(),//需要css-loader、postcssLoader 和 vue-style-loader
        less: generateLoaders('less'),//需要less-loader 和 vue-style-loader
        sass: generateLoaders('sass', { indentedSyntax: true }),//需要sass-loader 和 vue-style-loader
        scss: generateLoaders('sass').concat({
            loader: 'sass-resources-loader',
            options: {
                resources: [path.resolve(__dirname, '../src/assets/css/mixin.scss'), path.resolve(__dirname, '../src/assets/css/variable.scss')]
            }
        }),//需要sass-loader 和 vue-style-loader
        stylus: generateLoaders('stylus'),//需要stylus-loader 和 vue-style-loader
        styl: generateLoaders('stylus')//需要stylus-loader 和 vue-style-loader
    }
}
/**@method styleLoaders 生成 style-loader的配置
 * @param  {Object}     options 生成配置
 * @return {Array}      style-loader的配置
 */
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
    const output = []
    const loaders = exports.cssLoaders(options)
    //将各种css,less,sass等综合在一起得出结果输出output
    for (const extension in loaders) {
        const loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        })
    }

    return output
}

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier')

    return (severity, errors) => {
        if (severity !== 'error') return

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png')
        })
    }
}
