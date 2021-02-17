export default [
  {
    path: '/',
    component: resolve => require(['@/pages/Login/Login'], resolve),
    meta: {
      title: '登录页面'
    }
  },
  {
    path: 'home',
    name: 'LoginHome',
    component: resolve => require(['@/pages/Login/Index'], resolve),
    meta: {
      title: '登录 - 主页'
    }
  }
]
