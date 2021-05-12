import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, setToken, removeToken, getUser } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  setToken('43434')
  // return next()
  // set page title
  document.title = getPageTitle(to.meta.title)
  console.log(to)

  // http://test.calculate.com:9528/#/&error=invalid_client&error_description=Unauthorized%20grant%20type:%20implicit
  if (to.name == undefined && !getToken()) { next('/#/dashboard') }
  // let access_token = getToken()
  // if(!access_token && window.location.href.includes("&")){
  //   access_token = window.location.href.split("&")[1].split("=")[1] || ''
  //   setToken(access_token)
  // }

  if (getToken()) {
    // 未认证路由拦截
    const userInfo = getUser() || '{}'
    const submitType = JSON.parse(userInfo).submitType || 3

    if (submitType != 3 && to.path != '/auth') {
      console.log('permission----------')
      // console.log(to)
      // console.log(getUser())
      next('/auth')
      NProgress.done()
    } else {
      next()
    }
  } else {
    const hasToken = getToken()
    if (hasToken) {
      next()
    } else {
      Message({ type: 'error', message: '登录状态已失效，请重新登录', duration: 1e3, onClose: () => {
        // const cbUrl = encodeURI(window.location.href)
        const cbUrl = window.location.href
        const login_Url = process.env.VUE_APP_LOGIN_URL
        const loginUrl = `${login_Url}/oauth/authorize?client_id=saas-web&redirect_uri=${cbUrl.replace('#', '%23')}&response_type=token`
        // alert(loginUrl)
        window.location = loginUrl
      } })
    }
  }
  // this.$router.push({ path: to.fullPath || '/' })
  // next()
  // return
  // determine whether the user has logged in
  // const hasToken = getToken()
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })
  //     NProgress.done()
  //   } else {
  //     const hasGetUserInfo = store.getters.name
  //     if (hasGetUserInfo) {
  //       next()
  //     } else {
  //       try {
  //         // get user info
  //         await store.dispatch('user/getInfo')

  //         next()
  //       } catch (error) {
  //         // remove token and go to login page to re-login
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //         NProgress.done()
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/

  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // in the free login whitelist, go directly
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
