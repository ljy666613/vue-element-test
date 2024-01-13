//1.导入路由依赖，安装了vue-router组件后系统自带的依赖
import { createRouter, createWebHistory } from 'vue-router';
import myHome from "@/views/myHome";

//2.导入两个页面

const routerHistory = createWebHistory();

//3.创建路由对象，new VueRouter为上面import设置的名称
const router = createRouter({
    history: routerHistory,
    routes:[
        // {
        //     path: '/first',
        //     component: myFirst
        // },
        // {
        //     path: '/second',
        //     component: () => import('../views/mySecond')
        // },
        {
            path: '/',
            component: myHome
        },
        {
            path:'/login',
            component:()=>import('../views/myLogin')
        },
        {
            path:'/about',
            component:()=>import('../views/myAbout')
        }
    ]
});


export default router;
