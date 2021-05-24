<template>
  <div class="container">
    <section class="container-title">
      <span>产品违规情况分析</span>
    </section>

    <el-form ref="form" :inline="true" :model="params" label-width="80px" class="form-option">
      <el-form-item prop="createTimeBegin">
        <section class="label-title">报表月份</section>
        <el-date-picker v-model="params.createTimeBegin" size="small" type="month" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期" style="width: 200px;" clearable />
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">型号</section>
        <el-select v-model="params.a1" size="small" clearable style="width: 160px;">
          <el-option
            v-for="item in settlementOrderStateList1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">品牌</section>
        <el-select v-model="params.a2" size="small" clearable style="width: 160px;">
          <el-option
            v-for="item in settlementOrderStateList2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

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

      <el-table-column label="型号" prop="a1" />
      <el-table-column label="品牌" prop="a2" />
      <el-table-column label="平台" prop="a3" />
      <el-table-column label="违规链接量" prop="a4" sortable />
      <el-table-column label="总销售额（万元）" prop="a5" sortable />
      <el-table-column label="限价" prop="a6" />
      <el-table-column label="均价" prop="a7" />
      <el-table-column label="月均折扣率" prop="a8" sortable />

    </el-table>

    <div class="fixFooter">
      <section class="footer-left">
        <el-button size="small" :disabled="list.length == 0" icon="el-icon-download" @click="handleExport">导出当前月数据</el-button>
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
      total: 4,
      list: [
        { a1: 'A01', a2: '雀巢', a3: '淘宝', a4: '30.1', a5: '169', a6: '144', a7: '30', a8: '85.21%' },
        { a1: 'A01', a2: '雀巢', a3: '拼多多', a4: '20', a5: '89', a6: '24', a7: '30', a8: '85.21%' },
        { a1: 'A01', a2: '雀巢', a3: '京东', a4: '32.1', a5: '19', a6: '344', a7: '30', a8: '85.21%' },
        { a1: 'A01', a2: '雀巢', a3: '苏宁', a4: '50.1', a5: '29', a6: '14', a7: '20', a8: '15.21%' },
        { a1: 'B01', a2: '星巴克', a3: '美团', a4: '50.1', a5: '29', a6: '-', a7: '-', a8: '-' }
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
