import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layouts/main'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Layout',
        component: Layout
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: "/test/extend",
        nme: "testExtend",
        component: () => import('../views/test/extend.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router