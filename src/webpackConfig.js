//webpack配置文件

module.exports = {
    //本地开发
    dev: {
        // 目录地址
        assetsPublicPath: "/",
        proxyTable: {},
        host: "localhost",
        port: "8089"
    },
    //打包
    build: {
        /* 目录地址 */
        assetsPublicPath: "/"
    }
}
