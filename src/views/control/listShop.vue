<template>
  <div class="container">
    <section class="container-title">
      <span>管控数据分析</span>
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
        <section class="label-title">品牌</section>
        <el-input v-model="params.a2" size="small" placeholder="请输入" style="width: 160px;" clearable />
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">处理结果</section>
        <el-select v-model="params.a1" size="small" clearable style="width: 160px;">
          <el-option
            v-for="item in settlementOrderStateList1"
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

      <el-table-column label="平台" prop="a2" />
      <el-table-column label="品牌" prop="a1" />
      <el-table-column label="链接" prop="a4">
        <template slot-scope="scope">
          <a :href="scope.row.a4" target="_blank">{{ scope.row.a4 }}</a>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称/旺旺ID" prop="a3" />
      <el-table-column label="处理结果" prop="a5" />

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
        { label: '已下架', value: 0 },
        { label: '已整改', value: -1 },
        { label: '已删除', value: 1 },
        { label: '已收编', value: 2 },
        { label: '已撤诉', value: 3 },
        { label: '意愿合作', value: 4 }
      ],
      settlementOrderStateList3: [
        { label: '淘宝', value: 0 },
        { label: '拼多多', value: -1 },
        { label: '京东', value: 1 },
        { label: '苏宁', value: 2 }
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
      total: 14,
      list: [
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': 'xuchunjie88', 'a4': 'https://item.taobao.com/item.htm?id=554026677539', 'a5': '已改价' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '谢先生和曾女士', 'a4': 'https://item.taobao.com/item.htm?id=545257542029', 'a5': '已改价' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '江西诚信塑料制品批发', 'a4': 'https://item.taobao.com/item.htm?id=575071096506', 'a5': '已下架' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '简绿竹', 'a4': 'https://item.taobao.com/item.htm?id=616756299044', 'a5': '已下架' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '风雨天成', 'a4': 'https://item.taobao.com/item.htm?id=6254848571', 'a5': '已删除' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '三月三的风醉了', 'a4': 'https://item.taobao.com/item.htm?id=43496601983', 'a5': '已下架' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '良法商行', 'a4': 'https://item.taobao.com/item.htm?id=520080242292', 'a5': '已改价' },
        { 'a1': '雀巢', 'a2': '拼多多', 'a3': '安心宝贝', 'a4': 'http://mobile.yangkeduo.com/goods.html?goods_id=109827894347', 'a5': '已删除' },
        { 'a1': '雀巢', 'a2': '拼多多', 'a3': '锦亭母婴', 'a4': 'http://mobile.yangkeduo.com/goods.html?goods_id=116784935618', 'a5': '已改价' },
        { 'a1': '雀巢', 'a2': '拼多多', 'a3': '湖南湘舜成贸易', 'a4': 'http://mobile.yangkeduo.com/goods.html?goods_id=136129497059', 'a5': '已改价' },
        { 'a1': '雀巢', 'a2': '拼多多', 'a3': '童美母婴专营店', 'a4': 'http://mobile.yangkeduo.com/goods.html?goods_id=140716168594', 'a5': '已改价' },
        { 'a1': '雀巢', 'a2': '天猫', 'a3': '贝爱乐康母婴专营店', 'a4': 'https://detail.tmall.com/item.htm?id=535772716463', 'a5': '已改价' },
        { 'a1': '雀巢', 'a2': '天猫', 'a3': '俊潮母婴专营店', 'a4': 'https://detail.tmall.com/item.htm?id=7608523426', 'a5': '已改价' },
        { 'a1': '雀巢', 'a2': '天猫', 'a3': '格林贝尔母婴专营店', 'a4': 'https://detail.tmall.com/item.htm?id=533190777635', 'a5': '已收编' }
      ],

      option1: {
        title: {
          text: '处理情况分析',
          left: 'center',
          padding: [20, 10]
        },
        tooltip: {},
        legend: {
          // data:['销量']
          right: '20'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {
          // data: ["Apple","Huawei","Mi2020","Ads10","头条200","Gucci", "Amera", "English", "Aero", "Doing"],
          axisLabel: {
            interval: 0
            // rotate:40
          }
        },
        series: [
          {
            name: '违规量',
            type: 'bar',
            data: [51, 202, 322, 110, 490, 210, 51, 202, 322, 110, 490, 210]
          },
          {
            name: '处理量',
            type: 'bar',
            data: [20, 120, 136, 10, 130, 210, 20, 120, 136, 10, 130, 210]
          },
          {
            name: '处理成功量',
            type: 'bar',
            data: [20, 20, 36, 10, 10, 20, 20, 20, 36, 10, 10, 20]
          }
        ]
      }

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

    },
    handleExport() {
      // const { pageSize, curPage, params } = this
      // const data = {
      //   pageSize,
      //   curPage,
      //   data: this.filterParams(params),
      // }

      // post({url: Api.orderExport, data}).then(r => {
      //   this.handleRes(r)
      // })
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

.chart1{
  height: 500px;
}

</style>
