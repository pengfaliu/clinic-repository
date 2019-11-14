import Vue from 'vue'
import Router from 'vue-router'
import { Loading } from 'element-ui'
import routes from './modules/routes'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getStore } from '@/utils/store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: '/yiyuan/',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(to)
  if (to.meta.title) {
    document.title = to.meta.title + ' | 医苑'
  }
  if (to.matched.length === 0) {
    next('/notpage')
  } else if (!to.meta.requireAuth) {
    next()
  } else {
    if (getStore({name: 'token'})) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router