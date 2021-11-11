(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62ee7e8b"],{a514:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[a._m(0),a._v(" "),e("el-form",{ref:"form",staticClass:"form-option",attrs:{inline:!0,model:a.params,"label-width":"80px"}},[e("el-form-item",[e("section",{staticClass:"label-title"},[a._v("平台")]),a._v(" "),e("el-select",{staticStyle:{width:"160px"},attrs:{size:"small",clearable:""},model:{value:a.params.instituteType,callback:function(t){a.$set(a.params,"instituteType",t)},expression:"params.instituteType"}},a._l(a.institueList,(function(a){return e("el-option",{key:a.key,attrs:{label:a.value,value:a.key}})})),1)],1),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"},[a._v("店铺名称/旺旺ID")]),a._v(" "),e("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:a.params.shopName,callback:function(t){a.$set(a.params,"shopName",t)},expression:"params.shopName"}})],1),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"},[a._v("违规次数")]),a._v(" "),e("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"最小",clearable:""},model:{value:a.params.minDistinctViolationNum,callback:function(t){a.$set(a.params,"minDistinctViolationNum",t)},expression:"params.minDistinctViolationNum"}})],1),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"}),a._v(" "),e("span",{staticStyle:{display:"block","line-height":"32px"}},[a._v("-")])]),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"}),a._v(" "),e("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"最大",clearable:""},model:{value:a.params.maxDistinctViolationNum,callback:function(t){a.$set(a.params,"maxDistinctViolationNum",t)},expression:"params.maxDistinctViolationNum"}})],1),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"},[a._v("违规链接数")]),a._v(" "),e("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"最小",clearable:""},model:{value:a.params.minViolationNum,callback:function(t){a.$set(a.params,"minViolationNum",t)},expression:"params.minViolationNum"}})],1),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"}),a._v(" "),e("span",{staticStyle:{display:"block","line-height":"32px"}},[a._v("-")])]),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"}),a._v(" "),e("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"最大",clearable:""},model:{value:a.params.maxViolationNum,callback:function(t){a.$set(a.params,"maxViolationNum",t)},expression:"params.maxViolationNum"}})],1),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"},[a._v("重点关注SKU")]),a._v(" "),e("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:a.params.pointSku,callback:function(t){a.$set(a.params,"pointSku",t)},expression:"params.pointSku"}})],1),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"}),a._v(" "),e("el-button",{staticStyle:{"margin-left":"0px"},attrs:{size:"small",type:"primary"},on:{click:function(){return a.loadData("reset")}}},[a._v("查询")]),a._v(" "),e("el-button",{attrs:{size:"small"},on:{click:a.resetForm}},[a._v("清空")])],1)],1),a._v(" "),e("el-table",{ref:"multipleTable",attrs:{data:a.list,border:"",fit:"","highlight-current-row":"","header-row-style":{background:"#F5F5F5"},"max-height":"500",height:"500",size:"mini"}},[e("el-table-column",{attrs:{label:"平台",prop:"instituteType"}}),a._v(" "),e("el-table-column",{attrs:{label:"店铺名称/旺旺ID",prop:"shopName"}}),a._v(" "),e("el-table-column",{attrs:{label:"累计违规次数",prop:"violationNum",sortable:""}}),a._v(" "),e("el-table-column",{attrs:{label:"去重累计违规链接数",prop:"distinctViolationNum",sortable:""}}),a._v(" "),e("el-table-column",{attrs:{label:"重点关注SKU",prop:"pointSku"}})],1),a._v(" "),e("div",{staticClass:"fixFooter"},[e("section",{staticClass:"footer-left"}),a._v(" "),e("Pagination",{attrs:{total:a.total,page:a.params.curPage,size:a.params.pageSize},on:{"update:page":function(t){return a.$set(a.params,"curPage",t)},"update:size":function(t){return a.$set(a.params,"pageSize",t)},pagination:a.loadData}})],1)],1)},l=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"container-title"},[e("span",[a._v("店铺违规情况分析")])])}],s=e("db72"),n=e("bd86"),o=e("2f62"),r=e("b775"),c=e("b1ce"),m={filters:{settlementOrderStateFilter:function(a){var t={"-1":"已作废",0:"正常",1:"已归档"};return t[a]}},data:function(){return{filterAll:!1,institueList:[],params:Object(n["a"])({curPage:1,pageSize:50,instituteType:"",shopName:"",pointSku:"",minViolationNum:"",minDistinctViolationNum:"",maxViolationNum:"",maxDistinctViolationNum:""},"instituteType",""),total:19,list:[{a1:"淘宝",a2:"xuchunjie88",a3:8,a4:15,a5:"雀巢能恩2 900"},{a1:"淘宝",a2:"谢先生和曾女士",a3:8,a4:13,a5:"雀巢能恩2 900"},{a1:"淘宝",a2:"江西诚信塑料制品批发",a3:8,a4:11,a5:"雀巢能恩2 900"},{a1:"淘宝",a2:"简绿竹",a3:8,a4:6,a5:""},{a1:"淘宝",a2:"宏鑫母婴店",a3:8,a4:3,a5:"雀巢能恩2 900"},{a1:"淘宝",a2:"金福娃母婴",a3:8,a4:3,a5:"雀巢能恩2 900"},{a1:"淘宝",a2:"梦中甜心",a3:6,a4:3,a5:""},{a1:"淘宝",a2:"帅哥倩女母婴",a3:6,a4:3,a5:"雀巢能恩2 900"},{a1:"淘宝",a2:"风雨天成",a3:4,a4:2,a5:""},{a1:"天猫",a2:"贝妈坊母婴专营店",a3:8,a4:2,a5:"雀巢能恩2 900"},{a1:"天猫",a2:"贝斐母婴专营店",a3:8,a4:18,a5:"雀巢能恩2 900"},{a1:"天猫",a2:"贝爱乐康母婴专营店",a3:2,a4:15,a5:""},{a1:"天猫",a2:"俊潮母婴专营店",a3:2,a4:5,a5:"雀巢能恩2 900"},{a1:"天猫",a2:"格林贝尔母婴专营店",a3:2,a4:5,a5:"雀巢能恩2 900"},{a1:"天猫",a2:"唯小宝旗舰店",a3:2,a4:2,a5:"雀巢能恩2 900"},{a1:"拼多多",a2:"安心宝贝",a3:8,a4:10,a5:"雀巢能恩2 900"},{a1:"拼多多",a2:"锦亭母婴",a3:8,a4:6,a5:"雀巢能恩2 900"},{a1:"拼多多",a2:"湖南湘舜成贸易",a3:6,a4:3,a5:"雀巢能恩2 900"},{a1:"拼多多",a2:"童美母婴专营店",a3:6,a4:2,a5:"雀巢能恩2 900"}]}},mounted:function(){this.loadInstitue(),this.loadData()},computed:Object(s["a"])({},Object(o["b"])(["data"])),methods:{loadData:function(){var a=this;this.request({url:"/violate/pageShopStatistic",data:this.filterParams(this.params)}).then((function(t){t.msg;var e=t.code,i=t.data,l=i.curPage,s=i.total,n=i.list;200==e&&(a.list=n,a.params.curPage=l,a.total=s)}))},loadInstitue:function(){var a=this;this.request({url:"/common/getInstitute"}).then((function(t){t.msg,t.code;var e=t.data;a.institueList=e}))},handleExport:function(){var a=this,t=this.pageSize,e=this.curPage,i=this.params,l={pageSize:t,curPage:e,data:this.filterParams(i)};Object(r["post"])({url:c["a"].orderExport,data:l}).then((function(t){a.handleRes(t)}))},resetForm:function(){this.invoiceState="",this.payType="",this.params={}}}},p=m,u=(e("da57"),e("2877")),d=Object(u["a"])(p,i,l,!1,null,"0d695477",null);t["default"]=d.exports},d38a:function(a,t,e){},da57:function(a,t,e){"use strict";var i=e("d38a"),l=e.n(i);l.a}}]);