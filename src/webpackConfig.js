//webpack配置文件

module.exports = {
    //本地开发
    dev: {
        // 目录地址
        assetsPublicPath: "/zpp/",
        proxyTable: {
          // '/poor': {
          //   target: 'http://devlfybmesinfo.zhiscity.com', // 设置你调用的接口域名和端口号，别忘了加http
          //   changeOrigin: true,
          //   pathRewrite: {
          //     '^/poor': '' // 这里理解成'/poor'代替target里面的地址，后面组件中我们调用接口时直接用api代替，
          //     // 比如我们要调用'http://devlfybmesinfo.zhiscity.com/user/add', 直接写'/poor/user/add'即可
          //   }
          // }
        },
        host: "localhost",
        port: "8083"
    },
    //打包
    build: {
        /* 目录地址 */
        assetsPublicPath: "/zpp/"
    }
}
