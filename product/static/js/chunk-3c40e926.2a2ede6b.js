(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c40e926"],{"09cd":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[e._m(0),e._v(" "),t("el-form",{ref:"form",staticClass:"form-option",attrs:{inline:!0,model:e.params,"label-width":"80px"}},[t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[e._v("平台")]),e._v(" "),t("el-select",{staticStyle:{width:"160px"},attrs:{size:"small",clearable:""},model:{value:e.params.a3,callback:function(a){e.$set(e.params,"a3",a)},expression:"params.a3"}},e._l(e.settlementOrderStateList3,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[e._v("店铺名称/旺旺ID")]),e._v(" "),t("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:e.params.a1,callback:function(a){e.$set(e.params,"a1",a)},expression:"params.a1"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[e._v("最小违规次数")]),e._v(" "),t("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:e.params.a2,callback:function(a){e.$set(e.params,"a2",a)},expression:"params.a2"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[e._v("最大违规次数")]),e._v(" "),t("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:e.params.a21,callback:function(a){e.$set(e.params,"a21",a)},expression:"params.a21"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[e._v("最小违规链接数")]),e._v(" "),t("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:e.params.a4,callback:function(a){e.$set(e.params,"a4",a)},expression:"params.a4"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[e._v("最大违规链接数")]),e._v(" "),t("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:e.params.a41,callback:function(a){e.$set(e.params,"a41",a)},expression:"params.a41"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[e._v("重点关注SKU")]),e._v(" "),t("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:e.params.a5,callback:function(a){e.$set(e.params,"a5",a)},expression:"params.a5"}})],1),e._v(" "),t("el-form-item",[t("section",{staticClass:"label-title"}),e._v(" "),t("el-button",{staticStyle:{"margin-left":"0px"},attrs:{size:"small",type:"primary"},on:{click:function(){return e.loadData("reset")}}},[e._v("查询")]),e._v(" "),t("el-button",{attrs:{size:"small"},on:{click:e.resetForm}},[e._v("清空")])],1)],1),e._v(" "),t("el-table",{ref:"multipleTable",attrs:{data:e.list,border:"",fit:"","highlight-current-row":"","header-row-style":{background:"#F5F5F5"},"max-height":"500",height:"500",size:"mini"}},[t("el-table-column",{attrs:{label:"平台",prop:"a1"}}),e._v(" "),t("el-table-column",{attrs:{label:"店铺名称/旺旺ID",prop:"a2"}}),e._v(" "),t("el-table-column",{attrs:{label:"累计违规次数",prop:"a3"}}),e._v(" "),t("el-table-column",{attrs:{label:"去重累计违规链接数",prop:"a4"}}),e._v(" "),t("el-table-column",{attrs:{label:"重点关注SKU",prop:"a5"}})],1),e._v(" "),t("div",{staticClass:"fixFooter"},[t("section",{staticClass:"footer-left"}),e._v(" "),t("Pagination",{attrs:{total:e.total,page:e.curPage,size:e.pageSize},on:{"update:page":function(a){e.curPage=a},"update:size":function(a){e.pageSize=a},pagination:e.loadData}})],1)],1)},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"container-title"},[t("span",[e._v("授权店铺违规情况")])])}],r=t("db72"),i=t("2f62"),n=t("b775"),o=t("b1ce"),c={filters:{settlementOrderStateFilter:function(e){var a={"-1":"已作废",0:"正常",1:"已归档"};return a[e]}},data:function(){return{filterAll:!1,settlementOrderStateList1:[{label:"A0",value:0},{label:"A1",value:-1},{label:"A2",value:1}],settlementOrderStateList2:[{label:"Apple",value:0},{label:"Android",value:-1},{label:"Mi",value:1}],settlementOrderStateList3:[{label:"淘宝",value:0},{label:"拼多多",value:-1},{label:"京东",value:1},{label:"苏宁",value:1}],params:{createTimeBegin:"",createTimeEnd:"",outOrderNo:"",partyaName:"",partybName:"",settlementOrderId:"",settlementOrderState:"",operatorName:""},payType:"",invoiceState:"",pageSize:50,curPage:1,total:6,list:[{a1:"淘宝",a2:"乐趣母婴",a3:"8",a4:"15",a5:"雀巢能恩2 900"},{a1:"天猫",a2:"卓旭食品专营店",a3:"8",a4:"2",a5:"雀巢能恩2 900"},{a1:"天猫",a2:"宁泽母婴专营店",a3:"8",a4:"18",a5:"雀巢能恩2 900"},{a1:"拼多多",a2:"雀巢新星专卖店",a3:"8",a4:"10",a5:"雀巢能恩2 900"},{a1:"拼多多",a2:"雀巢大沛专卖店",a3:"8",a4:"6",a5:"雀巢能恩2 900"},{a1:"京东",a2:"卓旭母婴专营店",a3:"6",a4:"3",a5:"雀巢能恩2 900"}]}},mounted:function(){},computed:Object(r["a"])({},Object(i["b"])(["data"])),methods:{loadData:function(e){},handleExport:function(){var e=this,a=this.pageSize,t=this.curPage,l=this.params,s={pageSize:a,curPage:t,data:this.filterParams(l)};Object(n["b"])({url:o["a"].orderExport,data:s}).then((function(a){e.handleRes(a)}))},resetForm:function(){this.invoiceState="",this.payType="",this.params={}}}},p=c,m=(t("90e6"),t("2877")),u=Object(m["a"])(p,l,s,!1,null,"47c88d4a",null);a["default"]=u.exports},"542b":function(e,a,t){},"90e6":function(e,a,t){"use strict";var l=t("542b"),s=t.n(l);s.a}}]);