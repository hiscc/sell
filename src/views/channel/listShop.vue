<template>
  <div class="container">
    <section class="container-title">
      <span>店铺违规情况分析</span>
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
        <section class="label-title">店铺名称/旺旺ID</section>
        <el-input
          v-model="params.shopName"
          size="small"
          placeholder="请输入"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">违规次数</section>
        <el-input
          v-model="params.minDistinctViolationNum"
          size="small"
          placeholder="最小"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title" />
        <span style="display: block; line-height: 32px">-</span>
      </el-form-item>

      <el-form-item>
        <section class="label-title" />
        <el-input
          v-model="params.maxDistinctViolationNum"
          size="small"
          placeholder="最大"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">违规链接数</section>
        <el-input
          v-model="params.minViolationNum"
          size="small"
          placeholder="最小"
          style="width: 160px"
          clearable
        />
      </el-form-item>
      <el-form-item>
        <section class="label-title" />
        <span style="display: block; line-height: 32px">-</span>
      </el-form-item>
      <el-form-item>
        <section class="label-title" />
        <el-input
          v-model="params.maxViolationNum"
          size="small"
          placeholder="最大"
          style="width: 160px"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <section class="label-title">重点关注SKU</section>
        <el-input
          v-model="params.pointSku"
          size="small"
          placeholder="请输入"
          style="width: 160px"
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
      <el-table-column label="店铺名称/旺旺ID" prop="shopName" />
      <el-table-column label="累计违规次数" prop="violationNum" sortable />
      <el-table-column
        label="去重累计违规链接数"
        prop="distinctViolationNum"
        sortable
      />
      <el-table-column label="重点关注SKU" prop="pointSku" />
    </el-table>

    <div class="fixFooter">
      <section class="footer-left">
        <!-- <el-button  size="small" :disabled="list.length == 0" icon="el-icon-download" @click="handleExport">导出当前月数据</el-button> -->
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
        { a1: "淘宝", a2: "xuchunjie88", a3: 8, a4: 15, a5: "雀巢能恩2 900" },
        {
          a1: "淘宝",
          a2: "谢先生和曾女士",
          a3: 8,
          a4: 13,
          a5: "雀巢能恩2 900"
        },
        {
          a1: "淘宝",
          a2: "江西诚信塑料制品批发",
          a3: 8,
          a4: 11,
          a5: "雀巢能恩2 900"
        },
        { a1: "淘宝", a2: "简绿竹", a3: 8, a4: 6, a5: "" },
        { a1: "淘宝", a2: "宏鑫母婴店", a3: 8, a4: 3, a5: "雀巢能恩2 900" },
        { a1: "淘宝", a2: "金福娃母婴", a3: 8, a4: 3, a5: "雀巢能恩2 900" },
        { a1: "淘宝", a2: "梦中甜心", a3: 6, a4: 3, a5: "" },
        { a1: "淘宝", a2: "帅哥倩女母婴", a3: 6, a4: 3, a5: "雀巢能恩2 900" },
        { a1: "淘宝", a2: "风雨天成", a3: 4, a4: 2, a5: "" },
        {
          a1: "天猫",
          a2: "贝妈坊母婴专营店",
          a3: 8,
          a4: 2,
          a5: "雀巢能恩2 900"
        },
        {
          a1: "天猫",
          a2: "贝斐母婴专营店",
          a3: 8,
          a4: 18,
          a5: "雀巢能恩2 900"
        },
        { a1: "天猫", a2: "贝爱乐康母婴专营店", a3: 2, a4: 15, a5: "" },
        { a1: "天猫", a2: "俊潮母婴专营店", a3: 2, a4: 5, a5: "雀巢能恩2 900" },
        {
          a1: "天猫",
          a2: "格林贝尔母婴专营店",
          a3: 2,
          a4: 5,
          a5: "雀巢能恩2 900"
        },
        { a1: "天猫", a2: "唯小宝旗舰店", a3: 2, a4: 2, a5: "雀巢能恩2 900" },
        { a1: "拼多多", a2: "安心宝贝", a3: 8, a4: 10, a5: "雀巢能恩2 900" },
        { a1: "拼多多", a2: "锦亭母婴", a3: 8, a4: 6, a5: "雀巢能恩2 900" },
        {
          a1: "拼多多",
          a2: "湖南湘舜成贸易",
          a3: 6,
          a4: 3,
          a5: "雀巢能恩2 900"
        },
        {
          a1: "拼多多",
          a2: "童美母婴专营店",
          a3: 6,
          a4: 2,
          a5: "雀巢能恩2 900"
        }
      ]
    }
  },
  mounted() {
    this.loadInstitue()
    this.loadData()
  },
  computed: {
    ...mapGetters(["data"])
  },
  methods: {
    loadData() {
      this.request({
        url: "/violate/pageShopStatistic",
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

    loadInstitue() {
      this.request({
        url: "/common/getInstitute"
      }).then((res) => {
        const { msg, code, data } = res
        this.institueList = data
      })
    },

    handleExport() {
      const { pageSize, curPage, params } = this
      const data = {
        pageSize,
        curPage,
        data: this.filterParams(params)
      }

      post({ url: Api.orderExport, data }).then((r) => {
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
