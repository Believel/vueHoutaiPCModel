'use strict'
require('./check-versions')() // 调用版本检查

process.env.NODE_ENV = 'production' // 将环境配置为生产环境

const ora = require('ora')// npm包 loading插件
const rm = require('rimraf')// npm包 用于删除文件
const path = require('path') // npm包 文件路径工具
const chalk = require('chalk')// npm包 在终端输出带颜色的文字
const webpack = require('webpack')// 引入webpack.js
const config = require('../config')// 引入配置文件
const webpackConfig = require('./webpack.prod.conf')// 引入生产环境配置文件
console.log(process.argv)
var buildtype = process.argv.slice(2)[0] || 'development'
console.log(process.argv)
// 在终端显示loading效果，并输出提示
const spinner = ora('building for ' + buildtype + '...')
spinner.start()
// 先递归删除dist文件再生成新文件，避免冗余
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err
    webpack(webpackConfig, (err, stats) => {
        spinner.stop()
        if (err) throw err
        process.stdout.write(
            stats.toString({
                colors: true,
                modules: false,
                children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
                chunks: false,
                chunkModules: false
            }) + '\n\n'
        )

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(
            chalk.yellow(
                '  Tip: built files are meant to be served over an HTTP server.\n' +
                    "  Opening index.html over file:// won't work.\n"
            )
        )
    })
})
