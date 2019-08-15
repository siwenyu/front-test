import Vue from 'vue'
import Router from 'vue-router'

import router from './router'
import { resolve } from 'path'

// Vue.use(Router)

console.log(router)




// let routerList = new Router({
//     mode: 'history',
//     routes: router,
//     scrollBehavior (to, from, savedPosition) {
//         console.log('路由行为开始');
//         console.log(to, from, savedPosition);

//         // if (savedPosition) {
//         //     return savedPosition;
//         // } else {
//         //     return { x: 0, y: 0 }
//         // }
//         if (to.hash) {
//             return {selector: to.hash};
//         }
//         console.log('路由行为结束');
//     }
// })
// routerList.beforeEach((to, from, next) => {
//     // console.log('进入守卫')
//     // console.log(to, from, next)
//     next();
//     // console.log('离开守卫')
// })

export default router
