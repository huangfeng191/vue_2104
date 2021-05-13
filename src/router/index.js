import Vue from 'vue'
import VueRouter from 'vue-router'

import test from "./test"
import user from "./use"

Vue.use(VueRouter)

const routes = [...test,...user ]

const router = new VueRouter({
    routes
})

router.beforeEach(function(to,from,next){
    console.log("beforeEach 1")
    console.log(to,from,next);
    next(); // 必须 ，
})
router.afterEach(function(to,from){
    console.log("afterEach 3")
    console.log(to,from);
})

router.beforeResolve((to, from, next) => {
    console.log("beforeResolve 2")
    console.log(to,from,next);
    next();
  })

export default router