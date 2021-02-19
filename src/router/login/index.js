export default [
  {
    path: '/',
    component: resolve => require(['@/pages/Login/Login'], resolve),
    meta: {
      title: '登录页面'
    }
  },
]
