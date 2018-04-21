/**
 * 编译环境 线上环境切换
 * 使用方法：
 * npm run build dev 测试环境
 * npm run build pro 生产环境
 * npm run build * ………………
 * npm run dev 使用的是localhost 环境
 * 规范 ：所有属性大写。
 * localhost - 本地开发
 * testdev - 测试环境
 * pro - 生产环境
 * dev - 内网
 * beta - 外网
 * @return obj
 */

import setConfig from '@/resources/setting/setConfig.js'

export default setConfig({
    /* 不同环境配置 */
    setting: {
        localhost: {
            URLWEBHTTP: 'http://localhost:8089/api'
        },
        testdev: {
            URLWEBHTTP: 'http://www.baidu.com/testdev'
        },
        pro: {
            URLWEBHTTP: 'http://www.baidu.com/pro'
        },
        dev: {
            URLWEBHTTP: 'http://www.baidu.com/dev'
        },
        beta: {
            URLWEBHTTP: 'http://www.baidu.com/bata'
        }
    },
    /* 通用配置 - 每个环境都有 */
    propertys: {
        TIME: 2000
    }
})
