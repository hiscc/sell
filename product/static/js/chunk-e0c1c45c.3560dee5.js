(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e0c1c45c"],{"2d38":function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[a._m(0),a._v(" "),e("el-form",{ref:"form",staticClass:"form-option",attrs:{inline:!0,model:a.params,"label-width":"80px"}},[e("el-form-item",{attrs:{prop:"settlementOrderState"}},[e("section",{staticClass:"label-title"},[a._v("平台")]),a._v(" "),e("el-select",{staticStyle:{width:"160px"},attrs:{size:"small",clearable:""},model:{value:a.params.a3,callback:function(t){a.$set(a.params,"a3",t)},expression:"params.a3"}},a._l(a.settlementOrderStateList3,(function(a){return e("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),a._v(" "),e("el-form-item",{attrs:{prop:"settlementOrderState"}},[e("section",{staticClass:"label-title"},[a._v("品牌")]),a._v(" "),e("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:a.params.a2,callback:function(t){a.$set(a.params,"a2",t)},expression:"params.a2"}})],1),a._v(" "),e("el-form-item",{attrs:{prop:"settlementOrderState"}},[e("section",{staticClass:"label-title"},[a._v("区域")]),a._v(" "),e("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:a.params.a6,callback:function(t){a.$set(a.params,"a6",t)},expression:"params.a6"}})],1),a._v(" "),e("el-form-item",{attrs:{prop:"settlementOrderState"}},[e("section",{staticClass:"label-title"},[a._v("店铺名称/旺旺ID")]),a._v(" "),e("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:a.params.a5,callback:function(t){a.$set(a.params,"a5",t)},expression:"params.a5"}})],1),a._v(" "),e("el-form-item",{attrs:{prop:"settlementOrderState"}},[e("section",{staticClass:"label-title"},[a._v("收编时间")]),a._v(" "),e("el-date-picker",{staticStyle:{width:"200px"},attrs:{size:"small",type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期",clearable:""},model:{value:a.params.a1,callback:function(t){a.$set(a.params,"a1",t)},expression:"params.a1"}})],1),a._v(" "),e("el-form-item",[e("section",{staticClass:"label-title"}),a._v(" "),e("el-button",{staticStyle:{"margin-left":"0px"},attrs:{size:"small",type:"primary"},on:{click:function(){return a.loadData("reset")}}},[a._v("查询")]),a._v(" "),e("el-button",{attrs:{size:"small"},on:{click:a.resetForm}},[a._v("清空")])],1)],1),a._v(" "),e("el-table",{ref:"multipleTable",attrs:{data:a.list,border:"",fit:"","highlight-current-row":"","header-row-style":{background:"#F5F5F5"},"max-height":"500",height:"500",size:"mini"}},[e("el-table-column",{attrs:{label:"平台",prop:"a2"}}),a._v(" "),e("el-table-column",{attrs:{label:"品牌",prop:"a1"}}),a._v(" "),e("el-table-column",{attrs:{label:"店铺名称/旺旺ID",prop:"a3"}}),a._v(" "),e("el-table-column",{attrs:{label:"店铺等级",prop:"a4"}}),a._v(" "),e("el-table-column",{attrs:{label:"公司名",prop:"a5",width:"200"}}),a._v(" "),e("el-table-column",{attrs:{label:"区域",prop:"a6"}}),a._v(" "),e("el-table-column",{attrs:{label:"负责人",prop:"a7"}}),a._v(" "),e("el-table-column",{attrs:{label:"联系方式",prop:"a8"}}),a._v(" "),e("el-table-column",{attrs:{label:"收编时间",prop:"a9"}}),a._v(" "),e("el-table-column",{attrs:{label:"备注",prop:"a10"}})],1),a._v(" "),e("div",{staticClass:"fixFooter"},[e("section",{staticClass:"footer-left"},[e("el-button",{attrs:{size:"small",disabled:0==a.list.length,icon:"el-icon-download"},on:{click:a.handleExport}},[a._v("导出当前数据")])],1),a._v(" "),e("Pagination",{attrs:{total:a.total,page:a.curPage,size:a.pageSize},on:{"update:page":function(t){a.curPage=t},"update:size":function(t){a.pageSize=t},pagination:a.loadData}})],1)],1)},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"container-title"},[e("span",[a._v("已收编店铺")])])}],r=e("db72"),i=e("2f62"),o=(e("b775"),e("b1ce"),{filters:{settlementOrderStateFilter:function(a){var t={"-1":"已作废",0:"正常",1:"已归档"};return t[a]}},data:function(){return{filterAll:!1,settlementOrderStateList1:[{label:"已下架",value:0},{label:"已整改",value:-1},{label:"已删除",value:1},{label:"已收编",value:2},{label:"已撤诉",value:3},{label:"意愿合作",value:4}],settlementOrderStateList3:[{label:"淘宝",value:0},{label:"拼多多",value:-1},{label:"京东",value:1},{label:"苏宁",value:2}],params:{type:1},payType:"",invoiceState:"",pageSize:50,curPage:1,total:6,list:[{a1:"雀巢",a2:"淘宝",a3:"乐趣母婴",a4:"三皇冠",a5:"江苏聚荣食品有限公司",a6:"苏州",a7:"五爷",a8:"13376796563",a9:"09/04/2020"},{a1:"雀巢",a2:"天猫",a3:"卓旭食品专营店",a4:"天猫",a5:"南昌卓旭商贸有限公司",a6:"南昌",a7:"刘斌",a8:"15858586336",a9:"09/03/2019"},{a1:"雀巢",a2:"天猫",a3:"宁泽母婴专营店",a4:"天猫",a5:"济南宁泽贸易有限公司",a6:"济南",a7:"张帆远",a8:"17796337312",a9:"09/03/2019"},{a1:"雀巢",a2:"拼多多",a3:"雀巢新星专卖店",a4:"拼多多",a5:"",a6:"",a7:"",a8:"",a9:"10/02/2020"},{a1:"雀巢",a2:"拼多多",a3:"雀巢大沛专卖店",a4:"拼多多",a5:"上海大沛实业有限公司",a6:"上海",a7:"陈总",a8:"",a9:"11/02/2020"},{a1:"雀巢",a2:"京东",a3:"卓旭母婴专营店",a4:"京东",a5:"南昌卓旭商贸有限公司",a6:"南昌",a7:"刘斌",a8:"15858586336",a9:"09/03/2019"}]}},mounted:function(){},computed:Object(r["a"])({},Object(i["b"])(["data"])),methods:{loadData:function(a){},handleExport:function(){},resetForm:function(){this.invoiceState="",this.payType="",this.params={}}}}),n=o,c=(e("5e49"),e("2877")),p=Object(c["a"])(n,l,s,!1,null,"00f5181a",null);t["default"]=p.exports},"4ebf":function(a,t,e){},"5e49":function(a,t,e){"use strict";var l=e("4ebf"),s=e.n(l);s.a}}]);