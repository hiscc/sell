import Cookies from 'js-cookie'

const TokenKey = 'access_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setUser(userInfo) {
  return Cookies.set('userInfo', userInfo)
}

export function getUser() {
  return Cookies.get('userInfo')
}

export function removeToken() {
  Cookies.remove('userInfo')
  Cookies.remove(TokenKey)
}
