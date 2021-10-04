/*
 * @Author: km2021
 * @Date: 2020-11-16 23:14:39
 * @LastEditTime: 2021-10-04 20:04:17
 * @Description: 
 * @FilePath: /sell-web/src/utils/auth.js
 * 
 */
import Cookies from 'js-cookie'

const TokenKey = 'access_token'

export function getToken() {
  return window.localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return window.localStorage.setItem(TokenKey, token)
}

export function setUser(userInfo) {
  return Cookies.set('userInfo', userInfo)
}

export function getUser() {
  return Cookies.get('userInfo')
}

export function removeToken() {
  // Cookies.remove('userInfo')
  window.localStorage.clear()
}
