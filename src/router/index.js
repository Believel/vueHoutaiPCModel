import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import login from '@/view/login/login1';
import practice from '@/view/practice/practice';

Vue.use(Router)

export default new Router({
    routes: [
        /*{ path: '*', component: NotFoundComponent },//404页面*/
        {
            path: '/home',
            name: 'home',
            component: home,
            title: "首页",
            children: [
                {//练习页面
                    path: '/home/practice',
                    name: 'practice',
                    component: practice
                }
            ]
        },
        {
          path: '/',
          name: 'login',
          component: login,
          title: "登录"
        }
    ]
})
