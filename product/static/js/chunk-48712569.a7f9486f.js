(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48712569"],{"09cd":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("el-form",{ref:"form",staticClass:"form-option",attrs:{inline:!0,model:t.params,"label-width":"80px"}},[a("el-form-item",{attrs:{prop:"settlementOrderState"}},[a("section",{staticClass:"label-title"},[t._v("平台")]),t._v(" "),a("el-select",{staticStyle:{width:"160px"},attrs:{size:"small",clearable:""},model:{value:t.params.a3,callback:function(e){t.$set(t.params,"a3",e)},expression:"params.a3"}},t._l(t.settlementOrderStateList3,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{prop:"settlementOrderState"}},[a("section",{staticClass:"label-title"},[t._v("店铺名称/旺旺ID")]),t._v(" "),a("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:t.params.a1,callback:function(e){t.$set(t.params,"a1",e)},expression:"params.a1"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"settlementOrderState"}},[a("section",{staticClass:"label-title"},[t._v("违规次数")]),t._v(" "),a("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"最小",clearable:""},model:{value:t.params.a2,callback:function(e){t.$set(t.params,"a2",e)},expression:"params.a2"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"settlementOrderState"}},[a("section",{staticClass:"label-title"}),t._v(" "),a("span",{staticStyle:{display:"block","line-height":"32px"}},[t._v("-")])]),t._v(" "),a("el-form-item",{attrs:{prop:"settlementOrderState"}},[a("section",{staticClass:"label-title"}),t._v(" "),a("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"最大",clearable:""},model:{value:t.params.a21,callback:function(e){t.$set(t.params,"a21",e)},expression:"params.a21"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"settlementOrderState"}},[a("section",{staticClass:"label-title"},[t._v("违规链接数")]),t._v(" "),a("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"最小",clearable:""},model:{value:t.params.a4,callback:function(e){t.$set(t.params,"a4",e)},expression:"params.a4"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"settlementOrderState"}},[a("section",{staticClass:"label-title"}),t._v(" "),a("span",{staticStyle:{display:"block","line-height":"32px"}},[t._v("-")])]),t._v(" "),a("el-form-item",{attrs:{prop:"settlementOrderState"}},[a("section",{staticClass:"label-title"}),t._v(" "),a("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"最大",clearable:""},model:{value:t.params.a41,callback:function(e){t.$set(t.params,"a41",e)},expression:"params.a41"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"settlementOrderState"}},[a("section",{staticClass:"label-title"},[t._v("重点关注SKU")]),t._v(" "),a("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:t.params.a5,callback:function(e){t.$set(t.params,"a5",e)},expression:"params.a5"}})],1),t._v(" "),a("el-form-item",[a("section",{staticClass:"label-title"}),t._v(" "),a("el-button",{staticStyle:{"margin-left":"0px"},attrs:{size:"small",type:"primary"},on:{click:function(){return t.loadData("reset")}}},[t._v("查询")]),t._v(" "),a("el-button",{attrs:{size:"small"},on:{click:t.resetForm}},[t._v("清空")])],1)],1),t._v(" "),a("el-table",{ref:"multipleTable",attrs:{data:t.list,border:"",fit:"","highlight-current-row":"","header-row-style":{background:"#F5F5F5"},"max-height":"500",height:"500",size:"mini"}},[a("el-table-column",{attrs:{label:"平台",prop:"a1"}}),t._v(" "),a("el-table-column",{attrs:{label:"店铺名称/旺旺ID",prop:"a2"}}),t._v(" "),a("el-table-column",{attrs:{label:"累计违规次数",prop:"a3",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"去重累计违规链接数",prop:"a4",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"重点关注SKU",prop:"a5"}})],1),t._v(" "),a("div",{staticClass:"fixFooter"},[a("section",{staticClass:"footer-left"}),t._v(" "),a("Pagination",{attrs:{total:t.total,page:t.curPage,size:t.pageSize},on:{"update:page":function(e){t.curPage=e},"update:size":function(e){t.pageSize=e},pagination:t.loadData}})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"container-title"},[a("span",[t._v("授权店铺违规情况")])])}],r=a("db72"),i=a("2f62"),n=a("b775"),o=a("b1ce"),c={filters:{settlementOrderStateFilter:function(t){var e={"-1":"已作废",0:"正常",1:"已归档"};return e[t]}},data:function(){return{filterAll:!1,settlementOrderStateList1:[{label:"A0",value:0},{label:"A1",value:-1},{label:"A2",value:1}],settlementOrderStateList2:[{label:"Apple",value:0},{label:"Android",value:-1},{label:"Mi",value:1}],settlementOrderStateList3:[{label:"淘宝",value:0},{label:"拼多多",value:-1},{label:"京东",value:1},{label:"苏宁",value:1}],params:{createTimeBegin:"",createTimeEnd:"",outOrderNo:"",partyaName:"",partybName:"",settlementOrderId:"",settlementOrderState:"",operatorName:""},payType:"",invoiceState:"",pageSize:50,curPage:1,total:6,list:[{a1:"淘宝",a2:"乐趣母婴",a3:8,a4:15,a5:"雀巢能恩2 900"},{a1:"天猫",a2:"卓旭食品专营店",a3:8,a4:2,a5:"雀巢能恩2 900"},{a1:"天猫",a2:"宁泽母婴专营店",a3:8,a4:18,a5:"雀巢能恩2 900"},{a1:"拼多多",a2:"雀巢新星专卖店",a3:8,a4:10,a5:"雀巢能恩2 900"},{a1:"拼多多",a2:"雀巢大沛专卖店",a3:8,a4:6,a5:"雀巢能恩2 900"},{a1:"京东",a2:"卓旭母婴专营店",a3:6,a4:3,a5:"雀巢能恩2 900"}]}},mounted:function(){},computed:Object(r["a"])({},Object(i["b"])(["data"])),methods:{loadData:function(t){},handleExport:function(){var t=this,e=this.pageSize,a=this.curPage,l=this.params,s={pageSize:e,curPage:a,data:this.filterParams(l)};Object(n["b"])({url:o["a"].orderExport,data:s}).then((function(e){t.handleRes(e)}))},resetForm:function(){this.invoiceState="",this.payType="",this.params={}}}},p=c,m=(a("85a8"),a("2877")),u=Object(m["a"])(p,l,s,!1,null,"5a3f8610",null);e["default"]=u.exports},3133:function(t,e,a){},"85a8":function(t,e,a){"use strict";var l=a("3133"),s=a.n(l);s.a}}]);