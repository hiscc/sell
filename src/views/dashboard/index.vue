<template>
  <div class="container">
    <el-row :gutter="20" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="s6" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description fixed">
            <div class="card-panel-text">最新监控店铺（家）</div>
            <count-to
              :start-val="0"
              :end-val="params.shopCount"
              :duration="2600"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="form" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description fixed">
            <div class="card-panel-text">最新监控链接量（条）</div>
            <count-to
              :start-val="0"
              :end-val="params.linkCount"
              :duration="3000"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-money">
            <svg-icon icon-class="dashboard" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description fixed">
            <div class="card-panel-text">监控sku数量（个）</div>
            <count-to
              :start-val="0"
              :end-val="params.skuCount"
              :duration="3200"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-shopping">
            <svg-icon icon-class="s3" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description fixed">
            <div class="card-panel-text">预计挽回金额（万元）</div>
            <count-to
              :start-val="0"
              :end-val="params.monitorCount"
              :duration="3600"
              class="card-panel-num"
            />
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="12" :gutter="20">
        <el-row>
          <div class="chart-wrapper">
            <v-chart ref="chart1" class="chart1" :option="option1" />
          </div>
        </el-row>
        <el-row>
          <div class="chart-wrapper">
            <v-chart ref="chart3" class="chart2" :option="option3" />
          </div>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <v-chart ref="chart2" class="chart3" :option="option2" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CountTo from "vue-count-to"
export default {
  components: {
    CountTo
  },
  data() {
    return {
      params: {
        shopCount: 0,
        linkCount: 0,
        skuCount: 0,
        monitorCount: 0
      },
      option1: {
        title: {
          text: "违规店铺销量TOP10（淘宝）",
          left: "center",
          padding: [20, 10]
        },
        tooltip: {},
        // legend: {
        //     data:['销量']
        // },
        // dataset: {
        //   source: [["key", "value"]]
        // },
        grid: {
          left: "3%",
          right: "12%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {},
        yAxis: {
          type: "category",
          data: [],
          axisLabel: {
            interval: 0
            // rotate:40
          }
        },
        series: [
          {
            type: "bar",
            data: []
          }
        ]
      },
      option3: {
        title: {
          text: "违规店铺区域分布TOP10（淘宝）",
          left: "center",
          padding: [20, 10]
        },
        tooltip: {},
        grid: {
          left: "3%",
          right: "12%",
          bottom: "3%",
          containLabel: true
        },
        dataset: {
          source: []
        },
        xAxis: {},
        yAxis: {
          data: [
            "江苏苏州",
            "江西南昌",
            "广东广州",
            "安徽芜湖",
            "湖北武汉",
            "上海",
            "广东深圳",
            "湖南长沙",
            "安徽蚌埠",
            "广东潮州"
          ],
          axisLabel: {
            interval: 0
            // rotate:40
          }
        },
        series: [
          {
            type: "bar",
            data: [8, 8, 7, 5, 4, 4, 3, 3, 2, 2],
            itemStyle: {
              color: "rgba(30, 198, 137, 1)"
            }
          }
        ]
      },
      option2: {
        title: {
          text: "渠道分布占比（违规店铺数量）",
          left: "center",
          padding: [20, 10]
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          // left: '10',
          right: "12%",
          bottom: "20",
          data: ["淘宝", "天猫", "京东", "拼多多", "1688", "苏宁", "速卖通"]
        },
        label: {
          formatter: "{b}: {d}%"
        },
        grid: {
          left: "3%",
          right: "12%",
          bottom: "3%",
          containLabel: true
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
              { value: 2942, name: "淘宝" },
              { value: 1626, name: "天猫" },
              { value: 1784, name: "京东" },
              { value: 1543, name: "拼多多" },
              { value: 167, name: "1688" },
              { value: 260, name: "苏宁" },
              { value: 18, name: "速卖通" }
            ]
          }
        ]
      }
    }
  },

  mounted() {
    const that = this
    function done(fn, delay_time) {
      var start_time = null
      return function () {
        var curr_time = +new Date()
        !start_time && (start_time = curr_time)
        if (curr_time - start_time >= delay_time) {
          fn.apply(this, arguments)
          start_time = curr_time
        }
      }
    }
    window.onresize = done(function () {
      that.$refs.chart1.resize()
      that.$refs.chart2.resize()
      that.$refs.chart3.resize()
    }, 500)

    this.loadBaseInfo()
  },

  unmounted() {
    //  window.removeEventListener("resize", function(){
    //  })
  },

  methods: {
    loadBaseInfo() {
      this.request({
        url: "/index/getCountShopNum",
        data: this.params
      }).then((res) => {
        const { msg, code, data } = res
        if (code == 200) {
          this.params.shopCount = data
        }
      })

      this.request({
        url: "/index/getLinks",
        data: this.params
      }).then((res) => {
        const { msg, code, data } = res
        if (code == 200) {
          this.params.linkCount = data
        }
      })

      this.request({
        url: "/index/getMonitorAmount",
        data: this.params
      }).then((res) => {
        const { msg, code, data } = res
        if (code == 200) {
          this.params.monitorCount = data
        }
      })

      this.request({
        url: "/index/selectShopVolumeTop10",
        data: this.params
      }).then((res) => {
        const { msg, code, data } = res
        if (code == 200) {
          this.option1.yAxis.data = data.slice(0, 10).map((item) => item.key)
          this.option1.series[0].data = data
            .slice(0, 10)
            .map((item) => item.value)
        }
      })

      this.request({
        url: "/index/selectLocationShopTop10",
        data: this.params
      }).then((res) => {
        // console.log("selectLocationShopTop10", res)
        const { msg, code, data } = res
        if (code == 200) {
          this.option3.yAxis.data = data.slice(0, 10).map((item) => item.key)
          this.option3.series[0].data = data
            .slice(0, 10)
            .map((item) => item.value)
        }
      })

      this.request({
        url: "/index/selectInstituteShopNum",
        data: this.params
      }).then((res) => {
        console.log("selectInstituteShopNum", res)
        const { msg, code, data } = res
        if (code == 200) {
          this.option2.series[0].data = data.map((item) => {
            item.name = item.key
            return item
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  //   margin-top: 18px;
  .card-panel-col {
    margin-bottom: 20px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    .icon-people {
      background: #40c9c6;
    }
    .icon-message {
      background: #36a3f7;
    }
    .icon-money {
      background: #f4516c;
    }
    .icon-shopping {
      background: #34bfa3;
    }
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3;
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
    @media (min-width: 1200px) {
      .fixed {
        position: absolute;
        right: 10px;
        margin: 26px 0;
      }
    }
  }
}

.chart-wrapper {
  background: white;
}
.chart1,
.chart2 {
  height: 300px;
}
.chart1 {
  margin-bottom: 10px;
}
.chart2 {
  margin-top: 10px;
}
.chart3 {
  height: 620px;
}
@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }
  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;
    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
