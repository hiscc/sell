<template>
  <div class="container">
    <section class="container-title">
      <span>授权店铺违规情况</span>
    </section>

    <el-form ref="form" :inline="true" :model="params" label-width="80px" class="form-option">

      <el-form-item prop="settlementOrderState">
        <section class="label-title">平台</section>
        <el-select v-model="params.a3" size="small" clearable style="width: 160px;">
          <el-option
            v-for="item in settlementOrderStateList3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">店铺名称/旺旺ID</section>
        <el-input v-model="params.a1" size="small" placeholder="请输入" style="width: 160px;" clearable />
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">最小违规次数</section>
        <el-input v-model="params.a2" size="small" placeholder="请输入" style="width: 160px;" clearable />
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">最大违规次数</section>
        <el-input v-model="params.a21" size="small" placeholder="请输入" style="width: 160px;" clearable />
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">最小违规链接数</section>
        <el-input v-model="params.a4" size="small" placeholder="请输入" style="width: 160px;" clearable />
      </el-form-item>
      <el-form-item prop="settlementOrderState">
        <section class="label-title">最大违规链接数</section>
        <el-input v-model="params.a41" size="small" placeholder="请输入" style="width: 160px;" clearable />
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">重点关注SKU</section>
        <el-input v-model="params.a5" size="small" placeholder="请输入" style="width: 160px;" clearable />
      </el-form-item>

      <el-form-item>
        <section class="label-title" />
        <el-button size="small" type="primary" style="margin-left: 0px" @click="() => loadData('reset')">查询</el-button>

        <el-button size="small" @click="resetForm">清空</el-button>
      </el-form-item>

    </el-form>

    <el-table
      ref="multipleTable"
      :data="list"
      border
      fit
      highlight-current-row
      :header-row-style="{'background': '#F5F5F5'}"
      max-height="500"
      height="500"
      size="mini"
    >

      <el-table-column label="平台" prop="a1" />
      <el-table-column label="店铺名称/旺旺ID" prop="a2" />
      <el-table-column label="累计违规次数" prop="a3" />
      <el-table-column label="去重累计违规链接数" prop="a4" />
      <el-table-column label="重点关注SKU" prop="a5" />

    </el-table>

    <div class="fixFooter">
      <section class="footer-left">
        <!-- <el-button  size="small" :disabled="list.length == 0" icon="el-icon-download" @click="handleExport">导出当前月数据</el-button> -->
      </section>

      <Pagination :total="total" :page.sync="curPage" :size.sync="pageSize" @pagination="loadData" />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { uploadFile, post } from '@/utils/request'
import Api from '@/constant/api'

export default {
  filters: {
    settlementOrderStateFilter(item) {
      const stateMap = {
        '-1': '已作废',
        '0': '正常',
        '1': '已归档'
      }
      return stateMap[item]
    }
  },
  data() {
    return {
      filterAll: false,
      settlementOrderStateList1: [
        { label: 'A0', value: 0 },
        { label: 'A1', value: -1 },
        { label: 'A2', value: 1 }
      ],
      settlementOrderStateList2: [
        { label: 'Apple', value: 0 },
        { label: 'Android', value: -1 },
        { label: 'Mi', value: 1 }
      ],
      settlementOrderStateList3: [
        { label: '淘宝', value: 0 },
        { label: '拼多多', value: -1 },
        { label: '京东', value: 1 },
        { label: '苏宁', value: 1 }
      ],

      params: {
        createTimeBegin: '',
        createTimeEnd: '',
        outOrderNo: '',
        partyaName: '',
        partybName: '',
        settlementOrderId: '',
        settlementOrderState: '',
        operatorName: ''
      },
      payType: '',
      invoiceState: '',

      pageSize: 50,
      curPage: 1,
      total: 6,
      list: [
        { 'a1': '淘宝', 'a2': '乐趣母婴', 'a3': '8', 'a4': '15', 'a5': '雀巢能恩2 900' },
        { 'a1': '天猫', 'a2': '卓旭食品专营店', 'a3': '8', 'a4': '2', 'a5': '雀巢能恩2 900' },
        { 'a1': '天猫', 'a2': '宁泽母婴专营店', 'a3': '8', 'a4': '18', 'a5': '雀巢能恩2 900' },
        { 'a1': '拼多多', 'a2': '雀巢新星专卖店', 'a3': '8', 'a4': '10', 'a5': '雀巢能恩2 900' },
        { 'a1': '拼多多', 'a2': '雀巢大沛专卖店', 'a3': '8', 'a4': '6', 'a5': '雀巢能恩2 900' },
        { 'a1': '京东', 'a2': '卓旭母婴专营店', 'a3': '6', 'a4': '3', 'a5': '雀巢能恩2 900' }
      ]

    }
  },
  mounted() {
    // this.loadData()
  },
  computed: {
    ...mapGetters([
      'data'
    ])

  },
  methods: {
    loadData(query) {
      // if(query == 'reset'){
      //   this.curPage = 1
      // }
      // const { pageSize, curPage, params, invoiceState, payType } = this
      // if(params.createTimeBegin && params.createTimeBegin.length === 10){
      //   params.createTimeBegin += " 00:00:00"
      // }
      // if(params.createTimeEnd && params.createTimeEnd.length === 10){
      //   params.createTimeEnd += " 23:59:59"
      // }
      // const payTypeMap = {
      //   "0": [0],
      //   "1": [1,2,3]
      // }
      // params.payTypeList = payTypeMap[payType] || ""

      // const invoiceStateMap = {
      //   "0": [-4, -3, -2, -1, 0, 3, 4, 5, 6],
      //   "1": [7,8]
      // }
      // params.invoiceStateList = invoiceStateMap[invoiceState] || ""

      // const data = {
      //   pageSize,
      //   curPage,
      //   data: this.filterParams(params),
      // }
      // // console.log(data.data)
      // // return

      // post({url: Api.orderList, data}).then(r => {
      //   console.log(r)
      //   const { list, total, pageSize, curPage, msg } = r
      //   this.total = ~~total
      //   this.pageSize = ~~pageSize
      //   this.curPage = ~~curPage
      //   this.list = list
      // })
    },
    handleExport() {
      const { pageSize, curPage, params } = this
      const data = {
        pageSize,
        curPage,
        data: this.filterParams(params)
      }

      post({ url: Api.orderExport, data }).then(r => {
        this.handleRes(r)
      })
    },

    // opt
    // del(item){
    //   this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     const data = {
    //     data: {
    //         settlementOrderIdList: [item.settlementOrderId]
    //       }
    //     }
    //     post({url: Api.orderDel, data}).then(r => {
    //       this.handleRes(r, () => {
    //         this.loadData()
    //       })
    //     })
    //   }).catch(() => {

    //   })

    // },

    resetForm() {
      this.invoiceState = ''
      this.payType = ''
      this.params = {}
    }

  }
}
</script>

<style lang="scss" scoped>

@import "~@/styles/variables.scss";

.container{
  background: white;
}

</style>
