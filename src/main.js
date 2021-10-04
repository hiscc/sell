import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import Pagination from '@/components/Pagination'
import { filterParams, handleRes } from '@/utils'
import { phoneValid } from '@/utils/validate'

// echart
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart,
  PieChart
} from 'echarts/charts'
import {
  GridComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  PieChart,
  GridComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent
])

// 全局注册组件（也可以使用局部注册）
Vue.component('v-chart', ECharts)

// pl-table
import plTable from 'pl-table'
Vue.use(plTable)

import { uploadFile, request } from '@/utils/request'
import Api from '@/constant/api'

import '@/styles/element-variables.scss'
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

Vue.prototype.filterParams = filterParams
Vue.prototype.Pagination = Pagination
Vue.prototype.handleRes = handleRes
Vue.prototype.Api = Api
Vue.prototype.uploadFile = uploadFile
Vue.prototype.request = request

Vue.prototype.phoneValid = phoneValid

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.component('Pagination', Pagination)
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

// 注销 console
if (process.env.NODE_ENV !== 'development') {
  window.console.log = _ => { }
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
