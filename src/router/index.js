import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    hidden: false,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard', affix: true }
      },
  ]
  },

  {
    path: '/channel',
    component: Layout,
    redirect: '/channel/index',
    name: 'Example',
    // hidden: true,
    meta: { title: '渠道数据分析', icon: 's1' },
    children: [
      {
        path: 'list',
        name: '结算单管理',
        component: () => import('@/views/channel/listProduct'),
        meta: { title: '产品违规情况分析', }
      },
      {
        path: 'listShop',
        name: '结算单管理',
        component: () => import('@/views/channel/listShop'),
        meta: { title: '店铺违规情况分析', }
      },
    ]
  },
  {
    path: '/control',
    component: Layout,
    redirect: '/control/index',
    name: 'Example',
    // hidden: true,
    meta: { title: '管控数据分析', icon: 's2' },
    children: [
      {
        path: 'listShop',
        name: '管控数据分析',
        component: () => import('@/views/control/listShop'),
        meta: { title: '管控数据汇总', }
      },
      {
        path: 'listShopChart',
        name: '管控数据分析',
        component: () => import('@/views/control/listShopChart'),
        meta: { title: '管控数据图表', }
      },
    ]
  },

  {
    path: '/sell',
    component: Layout,
    redirect: '/sell/index',
    name: 'Example',
    // hidden: true,
    meta: { title: '分销数据分析', icon: 's5' },
    children: [
      {
        path: 'listBase',
        name: '授权店铺违规情况',
        component: () => import('@/views/sell/listBase'),
        meta: { title: '授权店铺违规情况', }
      },
      {
        path: 'listAdvanceGet',
        name: '已收编店铺',
        component: () => import('@/views/sell/listAdvanceGet'),
        meta: { title: '已收编店铺', }
      },
      {
        path: 'listAdvanceYet',
        name: '待收编店铺',
        component: () => import('@/views/sell/listAdvanceYet'),
        meta: { title: '待收编店铺', }
      },
      {
        path: 'listBan',
        name: '黑名单管理',
        component: () => import('@/views/sell/listBan'),
        meta: { title: '黑名单管理', }
      },
    ]
  },


  

  {
    path: 'external-link',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 's7' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

export const asyncRoutes = []