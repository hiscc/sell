import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken, setToken, removeToken } from '@/utils/auth' // get token from cookie

import qs from 'qs'

export const CONTENT_TYPE_JSON = 'application/json;charset=UTF-8'
export const CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded'
export const CONTENT_TYPE_FORMDATA = 'multipart/form-data'

const Api = process.env.VUE_APP_BASE_API
const clientId = process.env.VUE_APP_CLIENTID
axios.defaults.baseURL = Api
axios.defaults.timeout = 45000
axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`

axios.interceptors.response.use(function(response) {
  console.log(response)

  const { code, msg } = response.data

  if (code == 2400 || code == 2401) {
    removeToken()
    window.location.assign('/#/dashboard')
  } else if (code != '1000' && code != '3010' && code != undefined) {
    Message({ type: 'info', message: msg })
  }
  return response.data
}, function(error) {
  Message({ type: 'error', message: '网络错误，请联系管理员' })
  // window.location.assign("/dashboard")
})

export const post = function({ url = '', method = 'POST', data = {}}) {
  const baseData = {
    clientId: clientId
  }

  return axios({
    url: url,
    method,
    data: { ...baseData, ...data },
    headers: {
      'Authorization': `Bearer ${getToken()}`
    }
  })
}

export function uploadFile(imageFile, url = process.env.VUE_APP_UPLOAD, data = {}) {
  const baseHeader = {
    'Content-Type': CONTENT_TYPE_FORMDATA,
    'Authorization': `Bearer ${getToken()}`
  }

  const Formdata = new FormData()
  Formdata.append('uploadFile', imageFile)
  Formdata.append('file', imageFile)

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const val = data[key]
      Formdata.append(key, val)
    }
  }

  return axios({ url, method: 'POST', data: Formdata, headers: baseHeader })
}

function getTimestamp(d, onlyMonth) {
  const Time = d ? new Date(d) : new Date()
  const year = Time.getFullYear()
  const month = `${Time.getMonth() + 1}`.padStart(2, '0')
  const date = `${Time.getDate()}`.padStart(2, '0')
  const hours = `${Time.getHours()}`.padStart(2, '0')
  const minuts = `${Time.getMinutes()}`.padStart(2, '0')
  const seconds = `${Time.getSeconds()}`.padStart(2, '0')
  const milliseconds = `${Time.getMilliseconds()}`.padStart(3, '0')

  if (onlyMonth) return `${month}-${date} ${hours}:${minuts}`
  return `${year}${month}${date}${hours}${minuts}${seconds}${milliseconds}`
}

export const trackDate = getTimestamp

export function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`
  return `${dateStr} ${timeStr}`
}

export const filterData = (params) => {
  for (const key in params) {
    if (!params[key] && params[key] != 0) {
      delete params[key]
    }
  }
  return params
}

export const qsMap = (locationSearch) => qs.parse(locationSearch, { ignoreQueryPrefix: true })

export default {}
