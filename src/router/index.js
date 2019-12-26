import Vue from 'vue'
import Router from 'vue-router'
// import { Loading } from 'element-ui'
import routes from './modules/routes'
import store from '@/store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from '@/utils/auth'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: '/yiyuan/',
  routes
})

// let loadingInstance = null
router.beforeEach((to, from, next) => {
  store.dispatch('SetLoading', true)
  NProgress.start()
  // loadingInstance = Loading.service({fullscreen: true})
  // console.log(to)
  if (to.meta.title) {
    document.title = to.meta.title + ' | 医苑'
  }
  if (to.matched.length === 0) {
    next('/notpage')
  } else if (!to.meta.requireAuth) {
    next()
  } else {
    if (getToken()) {
      next()
    } else {
      store.dispatch('SetUrl', to.path)
      next('/login')
    }
  }
})

router.afterEach(() => {
  NProgress.done()
  store.dispatch('SetLoading', false)
  // loadingInstance.close()
})

export default router