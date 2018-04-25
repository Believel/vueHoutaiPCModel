import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'                           // 系统首页
import login from '@/view/login/login';                  // 登录页面
import practice from '@/view/practice/practice';         // 练习界面
import homechild from '@/view/home/homechild';           // 系统首页

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
                // 系统首页
                {
                    path: 'homechild',
                    name: 'homechild',
                    component: homechild
                },
                {  //练习页面
                    path: 'practice',
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
