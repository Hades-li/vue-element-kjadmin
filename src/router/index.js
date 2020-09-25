import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/index'
import Portal from '@/views/Portal'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

// 自动化加载路由
const files = require.context('./modules',false,/\.js$/)

export const asyncRoutes = []
files.keys().forEach(key => {
 asyncRoutes.push(files(key).default)
})

export const routes = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('../views/redirect')
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    // redirect: '/about/index',
    children: [
      {
        name: 'About',
        path: '/about',
        meta: {
          title: '关于'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '/home',
    component: Layout,
    // redirect: '/home/index',
    children: [
      {
        name: 'Home',
        path: '/home',
        meta: {
          title: '首页'
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/Home')
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    // redirect: '/home/index',
    children: [
      {
        name: 'Table',
        path: '/table',
        meta: {
          title: '表格'
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/components/Table')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: 'portal页',
      hiddenTag: true, // 用于隐藏
    },
    redirect: '/portal',
    children: [
      {
        name: 'Portal',
        path: '/portal',
        meta: {
          title: 'portal页',
          hiddenTag: true, // 用于隐藏
        },
        component: Portal
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.addRoutes(asyncRoutes)

// 路由跳转前劫持
router.beforeEach((to,from, next) => {
  next()
})

export default router
