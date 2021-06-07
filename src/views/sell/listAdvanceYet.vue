<template>
  <div class="container">
    <section class="container-title">
      <span>待收编店铺</span>
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
        <section class="label-title">区域</section>
        <el-input v-model="params.a6" size="small" placeholder="请输入" style="width: 160px;" clearable />
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">店铺名称/旺旺ID</section>
        <el-input v-model="params.a5" size="small" placeholder="请输入" style="width: 160px;" clearable />
      </el-form-item>

      <el-form-item prop="settlementOrderState">
        <section class="label-title">反馈结果</section>
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
      <el-table-column label="店铺名称/旺旺ID" prop="a3" width="200" />

      <el-table-column label="店铺等级" prop="a4" />
      <el-table-column label="公司名" prop="a5" width="200" />
      <el-table-column label="区域" prop="a6" />
      <el-table-column label="负责人" prop="a7" />
      <el-table-column label="联系方式" prop="a8" width="160" />

      <el-table-column label="反馈结果" prop="a9" />

      <el-table-column label="备注" prop="a10" />

    </el-table>

    <div class="fixFooter">
      <section class="footer-left">
        <el-button size="small" :disabled="list.length == 0" icon="el-icon-download" @click="handleExport">导出当前数据</el-button>
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
        '': '正常',
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
        type: 1
      },
      payType: '',
      invoiceState: '',

      pageSize: 50,
      curPage: 1,
      total: 15,

      list: [
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '简绿竹', 'a4': '五钻', 'a5': '天泽商贸有限公司', 'a6': '江苏苏州', 'a7': '邱园', 'a8': '13376796563', 'a9': '有意愿' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '宏鑫母婴店', 'a4': '二皇冠', 'a5': '锐迈商贸有限公司', 'a6': '江西南昌', 'a7': '张斌', 'a8': '15858586336', 'a9': '沟通中' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '金福娃母婴', 'a4': '五皇冠', 'a5': '嘉合兴商贸有限公司', 'a6': '安徽芜湖', 'a7': '吴彤彤', 'a8': '17796337312', 'a9': '沟通中' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '梦中甜心', 'a4': '二皇冠', 'a5': '勇胜商贸有限公司', 'a6': '江西南昌', 'a7': '冰哥', 'a8': '13104308982', 'a9': '未回复' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '帅哥倩女母婴', 'a4': '四钻', 'a5': '个体商户', 'a6': '安徽芜湖', 'a7': '杨芳', 'a8': '13376796509', 'a9': '未回复' },
        { 'a1': '雀巢', 'a2': '淘宝', 'a3': '风雨天成', 'a4': '五钻', 'a5': '个体商户', 'a6': '广东广州', 'a7': '仇经理', 'a8': '15858586377', 'a9': '未回复' },
        { 'a1': '雀巢', 'a2': '天猫', 'a3': '贝妈坊母婴专营店', 'a4': '天猫', 'a5': '武汉贝妈坊贸易有限公司', 'a6': '武汉', 'a7': '陈总', 'a8': '13706541234', 'a9': '有意愿' },
        { 'a1': '雀巢', 'a2': '天猫', 'a3': '贝斐母婴专营店', 'a4': '天猫', 'a5': '湖南贝斐贸易有限公司', 'a6': '湖南长沙', 'a7': '刘斌', 'a8': '13074330901', 'a9': '有意愿' },
        { 'a1': '雀巢', 'a2': '天猫', 'a3': '贝爱乐康母婴专营店', 'a4': '天猫', 'a5': '湖南贝爱乐康贸易有限公司', 'a6': '湖南长沙', 'a7': '罗媛', 'a8': '18206549901', 'a9': '未回复' },
        { 'a1': '雀巢', 'a2': '天猫', 'a3': '俊潮母婴专营店', 'a4': '天猫', 'a5': '安徽俊潮商贸有限公司', 'a6': '安徽蚌埠', 'a7': '罗想', 'a8': '13898786336', 'a9': '未回复' },
        { 'a1': '雀巢', 'a2': '天猫', 'a3': '格林贝尔母婴专营店', 'a4': '天猫', 'a5': '江苏格林贝尔贸易有限公司', 'a6': '江苏苏州', 'a7': 'lily', 'a8': '微信 lovelily-001', 'a9': '未回复' },
        { 'a1': '雀巢', 'a2': '拼多多', 'a3': '安心宝贝', 'a4': '拼多多', 'a5': '个体商户', 'a6': '安徽蚌埠', 'a7': '陈商', 'a8': '13908902232', 'a9': '未回复' },
        { 'a1': '雀巢', 'a2': '拼多多', 'a3': '锦亭母婴', 'a4': '拼多多', 'a5': '个体商户', 'a6': '湖南长沙', 'a7': '李丽华', 'a8': '13758586336', 'a9': '未回复' },
        { 'a1': '雀巢', 'a2': '拼多多', 'a3': '湖南湘舜成贸易', 'a4': '拼多多', 'a5': '思泉商贸有限公司', 'a6': '湖北武汉', 'a7': '赵华', 'a8': '18996337312', 'a9': '未回复' },
        { 'a1': '雀巢', 'a2': '拼多多', 'a3': '童美母婴专营店', 'a4': '拼多多', 'a5': '鸣远商贸有限公司', 'a6': '广东深圳', 'a7': '高风', 'a8': '13800902332', 'a9': '未回复' }
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
