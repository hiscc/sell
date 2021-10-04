/*
 * @Author: km2021
 * @Date: 2020-12-22 17:16:09
 * @LastEditTime: 2021-10-04 09:41:07
 * @Description:
 * @FilePath: /sell-web/src/permission.js
 *
 */
import router, { constantRoutes } from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register']

router.beforeEach((to, from, next) => {


  NProgress.start()
  // return next()

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '' })
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`)
      NProgress.done()
    }
  }

})

router.afterEach(() => {
  NProgress.done()
})
