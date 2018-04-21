// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import $ from 'n-zepto'
import $ from 'jquery'
import router from './router'
import store from "./store.js"
import vueUtil from "./util/vueUtil.js"
import axios from 'axios'
import elementUi from 'element-ui'
import '../static/css/element-ui/lib/theme-chalk/index.css'

//阻止vue在启动时生成生产提示
Vue.config.productionTip = false
Vue.use(vueUtil);
Vue.use(elementUi);
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
