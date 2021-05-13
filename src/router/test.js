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
   path: "/test/lifecircle",
   nme: "testlifecircle",
   component: () => import('../views/test/lifecircle/')
}
  
]
