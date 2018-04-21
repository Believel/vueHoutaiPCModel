import appConfigs from '@/config.js'

export default {
    //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    install(Vue, options) {
        //全局过滤器˝
        Vue.filter('imghandle', function(imgsrc) {
            if (imgsrc && imgsrc.indexOf('|') != -1) {
                imgsrc = imgsrc.split('|')[0]
            }
            if (imgsrc == null) {
                imgsrc = ''
            }
            return imgsrc
        })
        //保留两位小数
        Vue.filter('decimaltwo', function(val) {
            return parseFloat(val).toFixed(2)
        })
        //展示距离
        Vue.filter('discount', function(val) {
            return parseFloat(val / 1000).toFixed(2) + 'km'
        })
        //处理时间 07:00
        Vue.filter('timehrhandle', function(time) {
            return time == '' ? '' : new Date(time).Format('hh:mm')
        })
        //年 月 日过滤器
        Vue.filter('timeymdhandle', function(time) {
            return time == '' ? '' : new Date(time).Format('yyyy年MM月dd日')
        })
        //年 月 日 时 分 秒过滤器
        Vue.filter('timeymdhmshandle', function(time) {
            return time == ''
                ? ''
                : new Date(time).Format('yyyy年MM月dd日 hh:mm:ss')
        })
        //返回上一页
        Vue.prototype.goback = function() {
            this.$router.go(-1)
        }
        //加载错误图片处理
        Vue.prototype.loaderrimg = function(e) {
            var type =
                e.currentTarget.attributes.type &&
                e.currentTarget.attributes.type.value
        }
        //加载图片处理
        Vue.prototype.loadimg = function(e) {
            var _dom = $(e.currentTarget),
                _outdom = _dom.parent(),
                outw = _outdom.width(),
                outh = _outdom.height(),
                w = _dom.width(),
                h = _dom.height(),
                outscale = outw / outh,
                inscale = w / h
            //外框宽高比大于里面图片时，图片100%高度，否则100%宽度
            if (outscale > inscale) {
                _dom.css('height', '100%')
                _dom.css('width', 'auto')
                _outdom.css('text-align', 'center')
            } else {
                var lasth = outw / inscale
                var margintop = (outh - lasth) / 2
                _dom.css('width', '100%')
                _dom.css('height', 'auto')
                _dom.css('margin-top', margintop + 'px')
            }
        }
        Vue.prototype.texthandle = function(value) {
            if (value) {
                let s = value.replace('\n', '<br>').replace(/ /g, '&nbsp;')

                return s
            }
        }
    }
}
