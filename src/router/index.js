import Vue from 'vue'
import VueRouter from 'vue-router'

import test from "./test"
import user from "./use"

Vue.use(VueRouter)

const routes = [...test,...user ]

const router = new VueRouter({
    routes
})

export default router