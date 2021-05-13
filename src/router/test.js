import TestVueRouter from '../views/test/vuerouter/';
export default[
   {
      path: "/test/extend",
      nme: "testExtend",
      component: () => import('../views/test/extend/')
  },
  {
   path: "/test/vuex",
   nme: "testvuex",
   component: () => import('../views/test/vuex/')
},
{
   path: "/test/vuerouter",
   nme: "testvuerouter",
   component: TestVueRouter,
   
},
{
   path: "/test/lifecircle",
   nme: "testlifecircle",
   
   component: () => import('../views/test/lifecircle/')
},{
   path: "/test/axios",
   nme: "testaxios",
   
   component: () => import('../views/test/axios/')
}
  
]
