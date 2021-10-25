<template>
  <div class="container">
    <section class="container-title">
      <span>黑名单</span>
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
          v-model="params.a3"
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
        <section class="label-title">公司名</section>
        <el-input
          v-model="params.companyName"
          size="small"
          placeholder="请输入"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">店铺名称/旺旺ID</section>
        <el-input
          v-model="params.shopId"
          size="small"
          placeholder="请输入"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">反馈结果</section>
        <el-select
          v-model="params.feedback"
          size="small"
          clearable
          style="width: 160px"
        >
          <el-option
            v-for="item in feedbackList"
            :key="item.dictValue"
            :label="item.dictLabel"
            :value="item.dictValue"
          />
        </el-select>
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

      <el-table-column label="反馈结果" prop="feedback" />

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
        "": "正常",
        1: "已归档"
      }
      return stateMap[item]
    }
  },
  data() {
    return {
      institueList: [],
      feedbackList: [],

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
          a3: "yutongfang",
          a4: "三皇冠",
          a5: "彤帆商行",
          a6: "上海",
          a7: "王经理",
          a8: "15623785569",
          a9: "拒绝"
        },
        {
          a1: "雀巢",
          a2: "淘宝",
          a3: "梦婵奶粉商行",
          a4: "五钻",
          a5: "",
          a6: "浙江杭州",
          a7: "",
          a8: "",
          a9: "拒绝"
        },
        {
          a1: "雀巢",
          a2: "淘宝",
          a3: "xp01274",
          a4: "三皇冠",
          a5: "",
          a6: "江苏苏州",
          a7: "",
          a8: "",
          a9: "拒绝"
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
        url: "/distribution/blacklistShop",
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
