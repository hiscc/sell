<template>
  <div class="container">
    <section class="container-title">
      <span>产品违规情况分析</span>
    </section>

    <el-form ref="form" :inline="true" label-width="80px" class="form-option">
      <el-form-item prop="date">
        <section class="label-title">报表月份</section>
        <el-date-picker
          v-model="params.date"
          size="small"
          type="month"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期"
          style="width: 200px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">型号</section>
        <el-select
          v-model="params.taskName"
          size="small"
          clearable
          style="width: 160px"
        >
          <el-option
            v-for="item in taskNameList"
            :key="item"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>

      <el-form-item>
        <section class="label-title">品牌</section>
        <el-select
          v-model="params.brand"
          size="small"
          clearable
          style="width: 160px"
        >
          <el-option
            v-for="item in []"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

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
      size="mini"
    >
      <el-table-column label="品牌" prop="brand" />
      <el-table-column label="型号" prop="taskName" />
      <el-table-column label="平台" prop="instituteType" />
      <el-table-column label="违规链接量" prop="linkNum" sortable />
      <el-table-column
        label="总销售额（万元）"
        prop="amount"
        sortable
        :formatter="amountFilter"
      />
      <el-table-column label="限价（元）" prop="monitorPrice" />
      <el-table-column label="均价（元）" prop="avgPrice" />
      <el-table-column label="月均折扣率" prop="depositRate" sortable />
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
        date: "",
        brand: "",
        pageSize: 50,
        curPage: 1
      },
      payType: "",
      invoiceState: "",

      total: 11,

      list: [
        {
          a2: "雀巢",
          a1: "雀巢能恩2 900",
          a3: "淘宝",
          a4: 16,
          a5: 18.72815,
          a6: "185",
          a7: "160.34",
          a8: "86.67%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩3 900",
          a3: "淘宝",
          a4: 28,
          a5: 27.5023,
          a6: "165",
          a7: "140.32",
          a8: "85.04%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩1 900",
          a3: "天猫",
          a4: 4,
          a5: 1.466,
          a6: "224",
          a7: "183.25",
          a8: "81.81%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩2 900",
          a3: "天猫",
          a4: 1,
          a5: 0.3135,
          a6: "185",
          a7: "165.00",
          a8: "89.19%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩3 900",
          a3: "天猫",
          a4: 10,
          a5: 9.9258,
          a6: "165",
          a7: "139.80",
          a8: "84.73%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩2 900",
          a3: "拼多多",
          a4: 21,
          a5: 29.51,
          a6: "185",
          a7: "158.57",
          a8: "85.71%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩3 900",
          a3: "拼多多",
          a4: 31,
          a5: 27.401,
          a6: "165",
          a7: "139.79",
          a8: "84.72%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩2 900",
          a3: "京东",
          a4: 11,
          a5: 12.34,
          a6: "185",
          a7: "165.18",
          a8: "89.29%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩3 900",
          a3: "京东",
          a4: 14,
          a5: 11.98,
          a6: "165",
          a7: "156.65",
          a8: "94.94%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩2 900",
          a3: "苏宁",
          a4: 9,
          a5: 3.172,
          a6: "185",
          a7: "161.87",
          a8: "87.50%"
        },
        {
          a2: "雀巢",
          a1: "雀巢能恩3 900",
          a3: "苏宁",
          a4: 8,
          a5: 0.9123,
          a6: "165",
          a7: "150.19",
          a8: "91.02%"
        }
      ]
    }
  },
  mounted() {
    this.loadData()
    this.loadBase()
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
        url: "/common/getTaskName"
      }).then((res) => {
        const { msg, code, data } = res
        if (code == 200) {
          this.taskNameList = data
        }
      })
    },
    loadData() {
      this.request({
        url: "/violate/pageProductStatistic",
        data: this.params
      }).then((res) => {
        console.log("pageProductStatistic", res)
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
      const { pageSize, curPage, params } = this
      const data = {
        pageSize,
        curPage,
        data: this.filterParams(params)
      }

      // post({ url: Api.orderExport, data }).then((r) => {
      //   this.handleRes(r)
      // })
    },
    amountFilter(row, column, cellValue, index) {
      if (cellValue) {
        return Number(cellValue) / 10000
      }
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
</style>
