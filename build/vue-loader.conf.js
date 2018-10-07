'use strict'
// 处理.vue文件，解析这个文件中的每个语言块（template、script、style)，转换成js可用的js模块。
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
//生产环境,提取css样式到单独文件
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
     //编译时将“引入路径”转换为require调用,使其可由webpack处理
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}
