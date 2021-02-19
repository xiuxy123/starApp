import Vue from 'vue'
import Router from 'vue-router'
import loginChilds from './login'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: resolve => require(['@/pages/Login/Login'], resolve),
    children: [].concat(loginChilds),
    meta: {
      title: '登录页面'
    }
  },
  {
    path: '/home',
    name: 'LoginHome',
    component: resolve => require(['@/pages/Login/Index'], resolve),
    meta: {
      title: '登录 - 主页'
    }
  }
]

export const allRoutes = routes

export default new Router({
  routes
})
