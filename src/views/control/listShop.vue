<template>
  <div class="container">
    <section class="container-title">
      <span>管控数据汇总</span>
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
          v-model="params.brand"
          size="small"
          placeholder="请输入"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">处理结果</section>
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
        <section class="label-title">报表月份</section>
        <el-date-picker
          v-model="params.date"
          size="small"
          type="month"
          value-format="yyyy-MM"
          placeholder="请选择"
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
      <el-table-column label="品牌" prop="a1" width="120" />
      <el-table-column label="平台" prop="a2" width="120" />
      <el-table-column label="店铺名称/旺旺ID" prop="a3" width="200" />
      <el-table-column label="链接" prop="a4">
        <template slot-scope="scope">
          <a :href="scope.row.a4" target="_blank">{{ scope.row.a4 }}</a>
        </template>
      </el-table-column>

      <el-table-column label="处理结果" prop="a5" width="120" />
    </el-table>

    <div class="fixFooter">
      <section class="footer-left">
        <el-button
          size="small"
          :disabled="list.length == 0"
          icon="el-icon-download"
          @click="handleExport"
          >导出当前月数据</el-button
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
      taskNameList: [],
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
          a3: "xuchunjie88",
          a4: "https://item.taobao.com/item.htm?id=554026677539",
          a5: "已改价"
        },
        {
          a1: "雀巢",
          a2: "淘宝",
          a3: "谢先生和曾女士",
          a4: "https://item.taobao.com/item.htm?id=545257542029",
          a5: "已改价"
        },
        {
          a1: "雀巢",
          a2: "淘宝",
          a3: "江西诚信塑料制品批发",
          a4: "https://item.taobao.com/item.htm?id=575071096502",
          a5: "已下架"
        },
        {
          a1: "雀巢",
          a2: "淘宝",
          a3: "简绿竹",
          a4: "https://item.taobao.com/item.htm?id=616756299042",
          a5: "已下架"
        },
        {
          a1: "雀巢",
          a2: "淘宝",
          a3: "风雨天成",
          a4: "https://item.taobao.com/item.htm?id=6254848572",
          a5: "已删除"
        },
        {
          a1: "雀巢",
          a2: "淘宝",
          a3: "三月三的风醉了",
          a4: "https://item.taobao.com/item.htm?id=43496601982",
          a5: "已下架"
        },
        {
          a1: "雀巢",
          a2: "淘宝",
          a3: "良法商行",
          a4: "https://item.taobao.com/item.htm?id=520080242292",
          a5: "已改价"
        },
        {
          a1: "雀巢",
          a2: "拼多多",
          a3: "安心宝贝",
          a4: "http://mobile.yangkeduo.com/goods.html?goods_id=109827894342",
          a5: "已删除"
        },
        {
          a1: "雀巢",
          a2: "拼多多",
          a3: "锦亭母婴",
          a4: "http://mobile.yangkeduo.com/goods.html?goods_id=116784935618",
          a5: "已改价"
        },
        {
          a1: "雀巢",
          a2: "拼多多",
          a3: "湖南湘舜成贸易",
          a4: "http://mobile.yangkeduo.com/goods.html?goods_id=136129497059",
          a5: "已改价"
        },
        {
          a1: "雀巢",
          a2: "拼多多",
          a3: "童美母婴专营店",
          a4: "http://mobile.yangkeduo.com/goods.html?goods_id=140716168594",
          a5: "已改价"
        },
        {
          a1: "雀巢",
          a2: "天猫",
          a3: "贝爱乐康母婴专营店",
          a4: "https://detail.tmall.com/item.htm?id=535772716463",
          a5: "已改价"
        },
        {
          a1: "雀巢",
          a2: "天猫",
          a3: "俊潮母婴专营店",
          a4: "https://detail.tmall.com/item.htm?id=7608523426",
          a5: "已改价"
        },
        {
          a1: "雀巢",
          a2: "天猫",
          a3: "格林贝尔母婴专营店",
          a4: "https://detail.tmall.com/item.htm?id=533190777635",
          a5: "已收编"
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
        url: "/management/pageData",
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
