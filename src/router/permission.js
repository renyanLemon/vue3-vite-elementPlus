import router from '@/router';
import { constantRoutes, asyncRoutes } from '@/router'
import { getToken } from '@/utils/cookies.js';
import store from '@/store';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const whiteList = ['/login']

router.beforeEach( async (to, from, next) => {
    NProgress.start();
    let hasToken = getToken()
    if(hasToken) {
        if (to.path === '/login') {
            next({ path: '/' });
            NProgress.done();
        } else {
            if (store.getters.permissionRoutes.length) {
                next()
            } else {
                const permissionRoutes = [...constantRoutes, ...asyncRoutes] 
                store.dispatch('routes/setRoutes', permissionRoutes );
                permissionRoutes.forEach((item) => router.addRoute(item) );
                router.options.isAddAsyncMenuData = true;
                // 如果 addRoutes 并未完成，路由守卫会一层一层的执行执行，直到 addRoutes 完成，找到对应的路由
                next({ ...to, replace: true })
            }
        }
    } else {
        // 免登录路由
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next('/login');
            NProgress.done();
        }
    }
    
})
  
router.afterEach((to, from) => {
    NProgress.done();
})