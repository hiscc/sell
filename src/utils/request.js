/*
 * @Author: km2021
 * @Date: 2020-11-16 23:14:39
 * @LastEditTime: 2021-10-07 14:22:43
 * @Description: 
 * @FilePath: /sell-web/src/utils/request.js
 * 
 */
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken, setToken, removeToken } from '@/utils/auth'
import qs from 'qs'
import { getTimestamp } from './index'



const HOST = process.env.VUE_APP_HOST
const service = axios.create({
  baseURL: HOST,
  timeout: 45000,
  // transformResponse: [function (data) {
  //   return JSONbig({ useNativeBigInt: true }).parse(data)
  // }],
})


service.interceptors.response.use(function (res) {
  const { code, msg } = res.data
  if (code != 200) {
    Message({ type: 'error', message: msg || '账号密码错误' })
  }
  if (code == 2108 || !getToken) {
    removeToken()
    window.location.assign('/#/login')
    return
  }
  return res.data

}, function (error) {
  // console.log(error.response);
  const { code, msg = '网络错误，请重试' } = error.response.data
  Message({ type: 'error', msg: '网络错误，请重试' })
  return error.response.data
});

export const request = function ({ url = '', method = 'GET', data = {} }) {
  const innerData = {
    ts: getTimestamp(),
    tk: getToken(),
    ...data
  }
  return service({
    url,
    method,
    data: innerData,
    params: method == 'GET' ? innerData : innerData,
    headers: {
      'auth-token': `${getToken()}`
    }
  })
}

export function uploadFile({ file, url = '/file/put', data = {} }) {
  const baseHeader = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'auth-token': `${getToken()}`
  }

  const Formdata = new FormData()
  Formdata.append('file', file)

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const val = data[key]
      Formdata.append(key, val)
    }
  }

  return service({ url, method: 'POST', data: Formdata, headers: baseHeader })
}


