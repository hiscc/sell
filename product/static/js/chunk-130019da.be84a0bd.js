(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-130019da"],{7718:function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container"},[a._m(0),a._v(" "),t("el-form",{ref:"form",staticClass:"form-option",attrs:{inline:!0,model:a.params,"label-width":"80px"}},[t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[a._v("平台")]),a._v(" "),t("el-select",{staticStyle:{width:"160px"},attrs:{size:"small",clearable:""},model:{value:a.params.a3,callback:function(e){a.$set(a.params,"a3",e)},expression:"params.a3"}},a._l(a.settlementOrderStateList3,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),a._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[a._v("品牌")]),a._v(" "),t("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:a.params.a2,callback:function(e){a.$set(a.params,"a2",e)},expression:"params.a2"}})],1),a._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[a._v("区域")]),a._v(" "),t("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:a.params.a6,callback:function(e){a.$set(a.params,"a6",e)},expression:"params.a6"}})],1),a._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[a._v("店铺名称/旺旺ID")]),a._v(" "),t("el-input",{staticStyle:{width:"160px"},attrs:{size:"small",placeholder:"请输入",clearable:""},model:{value:a.params.a5,callback:function(e){a.$set(a.params,"a5",e)},expression:"params.a5"}})],1),a._v(" "),t("el-form-item",{attrs:{prop:"settlementOrderState"}},[t("section",{staticClass:"label-title"},[a._v("反馈结果")]),a._v(" "),t("el-select",{staticStyle:{width:"160px"},attrs:{size:"small",clearable:""},model:{value:a.params.a1,callback:function(e){a.$set(a.params,"a1",e)},expression:"params.a1"}},a._l(a.settlementOrderStateList1,(function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})})),1)],1),a._v(" "),t("el-form-item",[t("section",{staticClass:"label-title"}),a._v(" "),t("el-button",{staticStyle:{"margin-left":"0px"},attrs:{size:"small",type:"primary"},on:{click:function(){return a.loadData("reset")}}},[a._v("查询")]),a._v(" "),t("el-button",{attrs:{size:"small"},on:{click:a.resetForm}},[a._v("清空")])],1)],1),a._v(" "),t("el-table",{ref:"multipleTable",attrs:{data:a.list,border:"",fit:"","highlight-current-row":"","header-row-style":{background:"#F5F5F5"},"max-height":"500",height:"500",size:"mini"}},[t("el-table-column",{attrs:{label:"平台",prop:"a1"}}),a._v(" "),t("el-table-column",{attrs:{label:"品牌",prop:"a2"}}),a._v(" "),t("el-table-column",{attrs:{label:"店铺名称/旺旺ID",prop:"a3"}}),a._v(" "),t("el-table-column",{attrs:{label:"店铺等级",prop:"a4"}}),a._v(" "),t("el-table-column",{attrs:{label:"公司名",prop:"a5"}}),a._v(" "),t("el-table-column",{attrs:{label:"区域",prop:"a6"}}),a._v(" "),t("el-table-column",{attrs:{label:"负责人",prop:"a7"}}),a._v(" "),t("el-table-column",{attrs:{label:"联系方式",prop:"a71"}}),a._v(" "),t("el-table-column",{attrs:{label:"反馈结果",prop:"a10"}}),a._v(" "),t("el-table-column",{attrs:{label:"备注",prop:"a11"}})],1),a._v(" "),t("div",{staticClass:"fixFooter"},[t("section",{staticClass:"footer-left"},[t("el-button",{attrs:{size:"small",disabled:0==a.list.length,icon:"el-icon-download"},on:{click:a.handleExport}},[a._v("导出当前数据")])],1),a._v(" "),t("Pagination",{attrs:{total:a.total,page:a.curPage,size:a.pageSize},on:{"update:page":function(e){a.curPage=e},"update:size":function(e){a.pageSize=e},pagination:a.loadData}})],1)],1)},s=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"container-title"},[t("span",[a._v("待收编店铺")])])}],r=t("db72"),i=t("2f62"),n=(t("b775"),t("b1ce"),{filters:{settlementOrderStateFilter:function(a){var e={"-1":"已作废",0:"正常",1:"已归档"};return e[a]}},data:function(){return{filterAll:!1,settlementOrderStateList1:[{label:"已下架",value:0},{label:"已整改",value:-1},{label:"已删除",value:1},{label:"已收编",value:2},{label:"已撤诉",value:3},{label:"意愿合作",value:4}],settlementOrderStateList3:[{label:"淘宝",value:0},{label:"拼多多",value:-1},{label:"京东",value:1},{label:"苏宁",value:2}],params:{type:1},payType:"",invoiceState:"",pageSize:50,curPage:1,total:4,list:[{a1:"淘宝",a3:"小丸子112",a4:"皇冠1",a2:"雀巢",a5:"华为公司",a6:"华南",a7:"小丸",a71:"13909098909",a8:"童装、花果",a9:"2020/09/09",a11:"无",a10:"已整改"},{a1:"拼多多",a3:"贸易名家",a4:"皇冠2",a2:"雀巢",a5:"摆渡有限公司",a6:"华西",a7:"贸易家",a71:"13909098909",a8:"童装、花果",a9:"2020/09/09",a11:"无",a10:"已删除"},{a1:"京东",a3:"荒年记",a4:"皇冠3",a2:"雀巢",a5:"滴滴公司",a6:"华北",a7:"小年记",a71:"13909098909",a8:"童装、花果",a9:"2020/09/09",a11:"无",a10:"意愿合作"},{a1:"苏宁",a3:"小兵嘎嘎",a4:"皇冠4",a2:"雀巢",a5:"美团公司",a6:"华北",a7:"小兵嘎",a71:"13909098909",a8:"童装、花果",a9:"2020/09/09",a11:"无",a10:"意愿合作"}]}},mounted:function(){},computed:Object(r["a"])({},Object(i["b"])(["data"])),methods:{loadData:function(a){},handleExport:function(){},resetForm:function(){this.invoiceState="",this.payType="",this.params={}}}}),o=n,c=(t("9e1d"),t("2877")),p=Object(c["a"])(o,l,s,!1,null,"c45de386",null);e["default"]=p.exports},"9e1d":function(a,e,t){"use strict";var l=t("9e59"),s=t.n(l);s.a},"9e59":function(a,e,t){}}]);