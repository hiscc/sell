<template>
  <div class="container">
    <section class="container-title">
      <span>已收编店铺</span>
    </section>

    <el-form
      ref="form"
      :inline="true"
      :model="params"
      label-width="80px"
      class="form-option"
    >
      <el-form-item>
        <section class="label-title">平台</section>
        <el-select
          v-model="params.instituteType"
          size="small"
          clearable
          style="width: 160px"
        >
          <el-option
            v-for="item in institueList"
            :key="item.key"
            :label="item.value"
            :value="item.key"
          />
        </el-select>
      </el-form-item>

      <el-form-item>
        <section class="label-title">品牌</section>
        <el-input
          v-model="params.a2"
          size="small"
          placeholder="请输入"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">区域</section>
        <el-input
          v-model="params.a6"
          size="small"
          placeholder="请输入"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">店铺名称/旺旺ID</section>
        <el-input
          v-model="params.companyName"
          size="small"
          placeholder="请输入"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">收编时间</section>
        <el-date-picker
          v-model="params.a1"
          size="small"
          type="date"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期"
          style="width: 200px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title" />
        <el-button
          size="small"
          type="primary"
          style="margin-left: 0px"
          @click="() => loadData('reset')"
          >查询</el-button
        >

        <el-button size="small" @click="resetForm">清空</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      :data="list"
      border
      fit
      highlight-current-row
      :header-row-style="{ background: '#F5F5F5' }"
      max-height="500"
      height="500"
      size="mini"
    >
      <el-table-column label="平台" prop="instituteType" />
      <el-table-column label="品牌" prop="brand" />
      <el-table-column label="店铺名称/旺旺ID" prop="shopId" />

      <el-table-column label="店铺等级" prop="shopLevel" />
      <el-table-column label="公司名" prop="companyName" width="200" />
      <el-table-column label="区域" prop="area" />
      <el-table-column label="负责人" prop="createUserName" />
      <el-table-column label="联系方式" prop="contactInformation" width="160" />

      <el-table-column label="收编时间" prop="incorporateTime" />

      <el-table-column label="备注" prop="remark" />
    </el-table>

    <div class="fixFooter">
      <section class="footer-left">
        <el-button
          size="small"
          :disabled="list.length == 0"
          icon="el-icon-download"
          @click="handleExport"
          >导出当前数据</el-button
        >
      </section>

      <Pagination
        :total="total"
        :page.sync="params.curPage"
        :size.sync="params.pageSize"
        @pagination="loadData"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { uploadFile, post } from "@/utils/request"
import Api from "@/constant/api"

export default {
  filters: {
    settlementOrderStateFilter(item) {
      const stateMap = {
        "-1": "已作废",
        0: "正常",
        1: "已归档"
      }
      return stateMap[item]
    }
  },
  data() {
    return {
      filterAll: false,

      institueList: [],

      settlementOrderStateList1: [
        { label: "已下架", value: 0 },
        { label: "已整改", value: -1 },
        { label: "已删除", value: 1 },
        { label: "已收编", value: 2 },
        { label: "已撤诉", value: 3 },
        { label: "意愿合作", value: 4 }
      ],
      settlementOrderStateList3: [
        { label: "淘宝", value: 0 },
        { label: "拼多多", value: -1 },
        { label: "京东", value: 1 },
        { label: "苏宁", value: 2 }
      ],

      params: {
        curPage: 1,
        pageSize: 50,
        instituteType: "",
        shopName: "",
        pointSku: "",
        minViolationNum: "",
        minDistinctViolationNum: "",
        maxViolationNum: "",
        maxDistinctViolationNum: "",
        instituteType: ""
      },

      total: 19,

      list: [
        {
          a1: "雀巢",
          a2: "淘宝",
          a3: "乐趣母婴",
          a4: "三皇冠",
          a5: "江苏聚荣食品有限公司",
          a6: "苏州",
          a7: "五爷",
          a8: "13376796563",
          a9: "09/04/2020"
        },
        {
          a1: "雀巢",
          a2: "天猫",
          a3: "卓旭食品专营店",
          a4: "天猫",
          a5: "南昌卓旭商贸有限公司",
          a6: "南昌",
          a7: "刘斌",
          a8: "15858586336",
          a9: "09/03/2019"
        },
        {
          a1: "雀巢",
          a2: "天猫",
          a3: "宁泽母婴专营店",
          a4: "天猫",
          a5: "济南宁泽贸易有限公司",
          a6: "济南",
          a7: "张帆远",
          a8: "17796337312",
          a9: "09/03/2019"
        },
        {
          a1: "雀巢",
          a2: "拼多多",
          a3: "雀巢新星专卖店",
          a4: "拼多多",
          a5: "新星商贸有限公司",
          a6: "上海",
          a7: "王总",
          a8: "微信 wangxinhe098",
          a9: "10/02/2020"
        },
        {
          a1: "雀巢",
          a2: "拼多多",
          a3: "雀巢大沛专卖店",
          a4: "拼多多",
          a5: "上海大沛实业有限公司",
          a6: "上海",
          a7: "陈总",
          a8: "18839336781",
          a9: "11/02/2020"
        },
        {
          a1: "雀巢",
          a2: "京东",
          a3: "卓旭母婴专营店",
          a4: "京东",
          a5: "南昌卓旭商贸有限公司",
          a6: "南昌",
          a7: "刘斌",
          a8: "15858586336",
          a9: "09/03/2019"
        }
      ]
    }
  },
  mounted() {
    this.loadBase()
    this.loadData()
  },
  computed: {
    ...mapGetters(["data"])
  },
  methods: {
    loadBase() {
      this.request({
        url: "/common/getInstitute"
      }).then((res) => {
        const { msg, code, data } = res
        if (code == 200) {
          this.institueList = data
        }
      })
      this.request({
        url: "/common/getFeedback"
      }).then((res) => {
        const { msg, code, data } = res
        if (code == 200) {
          this.feedbackList = data
        }
      })
    },
    loadData() {
      this.request({
        url: "/distribution/incorporateShop",
        data: this.filterParams(this.params)
      }).then((res) => {
        const { msg, code, data } = res
        const { curPage, total, list } = data
        if (code == 200) {
          this.list = list
          this.params.curPage = curPage
          this.total = total
        }
      })
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

    resetForm() {
      this.invoiceState = ""
      this.payType = ""
      this.params = {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.container {
  background: white;
}

.chart1 {
  height: 500px;
}
</style>
