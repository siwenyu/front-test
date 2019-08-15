
/* eslint-disable semi */
/* eslint-disable */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/page/index'
// import logo from '@/components/logo'
// import emptyCom from '@/components/empty'

//./router/index.js

//404中转页面
// import empty from '@/page/empty'

//自动化部署
const routes = [];
let requireFirstComponent = [];
let requireSecComponent = [];
let requireThreeComponent = [];
const requireComponentFile = require.context('../components', true, /\.vue$/);
requireComponentFile.keys().forEach(fileName => {
    if (fileName.split('/').length == 2) {
        requireFirstComponent.push(fileName);
    }
    if (fileName.split('/').length == 3) {
        requireSecComponent.push(fileName);
    }
    if (fileName.split('/').length == 4) {
        requireThreeComponent.push(fileName);
    }
})
let routeItem = {};
// const requireComponentFile = require.context('../page', true, /^(\.)/);
requireFirstComponent.forEach(fileName => {
    if (/.vue/.test(fileName) > 0 && fileName.split('/').length == 2) {
        // 获取组件配置
        const componentConfig = requireComponentFile(fileName);
        // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
        const componentName = fileName.replace(/^\.\//, '').replace(/\.vue$/, '');
        // 全局注册组件
        const component = Vue.component(
            componentName.replace(/\//, '-'),
            // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根。
            componentConfig.default || componentConfig
        );
        let children = [];
        routeItem = {
            path: '/' + componentName + '/',
            name: componentName.replace(/\//, '-'),
            component,
            children: children
        };

        requireSecComponent.forEach(secItem => {

            // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根。
            if (secItem.split('/')[1] == componentName) {
                let requireComponentFileSec;
                let fileNameRep = '';
                // if (componentName == 'news') {
                //     requireComponentFileSec = require.context(`../page/news`, true, /\.vue$/);
                //     fileNameRep = '/news'
                // }
                // if (componentName == 'point') {
                //     requireComponentFileSec = require.context(`../page/point`, true, /\.vue$/);
                //     fileNameRep = '/point'
                // }
                const componentConfigSec = requireComponentFileSec(secItem.replace(fileNameRep, ''));
                let componentSec = Vue.component(
                    componentName + '_' + secItem.split('/')[2].split('.')[0],
                    // 如果这个组件选项是通过 `export default` 导出的，那么就会优先使用 `.default`，否则回退到使用模块的根。
                    componentConfigSec.default || componentConfigSec
                );

                let childItem = {
                    path: '/' + componentName + '/' + secItem.split('/')[2].split('.')[0],
                    name: secItem.split('/')[2].split('.')[0],
                    component: componentSec
                };
                routeItem.children.push(childItem);
            }
        })

        routes.push(routeItem);
    }
});
console.log(routes);

// let indexPage = {
//     path: '/',
//     name: 'index',
//     component: index
// };
//添加404页面
// let notFoundPage = {
//     path: '*',
//     name: '404',
//     component: empty
// };
// routes.push(notFoundPage, indexPage);

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: routes
})
