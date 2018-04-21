import axios from 'axios'
import config from '@/config.js'
import util from '@/util/util.js'
const URLWEBHTTP = config.URLWEBHTTP

/**
 * 封装的axios和ajax 一般用axios足够。如果有jsonp需求可以使用zport的ajax;
 */

export default async (apiurl = '', params = {}, type = 'GET', method = 'axios') => {
    type = type.toUpperCase()
    if (method == 'axios') {
        return new Promise((resolve, reject) => {
            axios({
                method: type,
                url: URLWEBHTTP + apiurl,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                data: type == 'POST' ? params : '',
                params: type == 'GET' ? params : ''
                // timeout: appConfigs.timeout,
                /* 开启跨域cookie携带 */
                //credentials : true,
                //emulateHTTP: true,
                //emulateJSON:true
            }).then(res => {
                resolve(res)
            }).catch(err => {
                //util.vueEvent.$emit('disloading')
                reject(err)
            })
        });
    } else {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: URLWEBHTTP + apiurl,
                dataType: 'jsonp',
                data: params,
                jsonp: 'callback',
                success: function(res) {
                    resolve(res)
                },
                error: function(res) {
                    reject(res)
                }
                // timeout: 50000
            })
        });
    }
}
