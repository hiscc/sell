<template>
  <div class="container">

    <el-row :gutter="20" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="s1" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              最新监控店铺量
            </div>
            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num" />
          </div>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('messages')">
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="s2" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              最新监控链接量
            </div>
            <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num" />
          </div>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('purchases')">
          <div class="card-panel-icon-wrapper icon-money">
            <svg-icon icon-class="s3" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              违规店铺量
            </div>
            <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
          </div>
        </div>
      </el-col>

      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel" @click="handleSetLineChartData('shoppings')">
          <div class="card-panel-icon-wrapper icon-shopping">
            <svg-icon icon-class="s4" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">
              预计挽回金额（万元）
            </div>
            <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="12" :gutter="20">
        <el-row>
          <div class="chart-wrapper">
            <v-chart class="chart1" :option="option1" />
          </div>
        </el-row>
        <el-row>
          <div class="chart-wrapper">
            <v-chart class="chart2" :option="option3" />
          </div>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <v-chart class="chart3" :option="option2" />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      option1: {
        title: {
          text: '违规店铺销售TOP10（淘宝）',
          left: 'center',
          padding: [20, 10]
        },
        tooltip: {},
        // legend: {
        //     data:['销量']
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
        },
        yAxis: {
          data: ['Apple', 'Huawei', 'Mi2020', 'Ads10', '头条200', 'Gucci', 'Amera', 'English', 'Aero', 'Doing'],
          axisLabel: {
            interval: 0
            // rotate:40
          }
        },
        series: [
          {
            type: 'bar',
            data: [89, 300, 36, 10, 10, 20, 89, 300, 203, 99, 20, 66]
          }
        ]
      },
      option3: {
        title: {
          text: '违规店铺区域分布TOP10（淘宝）',
          left: 'center',
          padding: [20, 10]
        },
        tooltip: {},
        // legend: {
        //     data:['销量']
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
        },
        yAxis: {
          data: ['上海', '杭州', '北京', '天津', '西安', '东莞', '成都', '深圳', '广西', '云南'],
          axisLabel: {
            interval: 0
            // rotate:40
          }
        },
        series: [
          {
            type: 'bar',
            data: [20, 89, 300, 203, 99, 89, 300, 36, 10, 10],
            itemStyle: {
              color: 'rgba(30, 198, 137, 1)'
            }
          }
        ]
      },
      option2: {
        title: {
          text: '渠道分布占比（违规店铺数量）',
          left: 'center',
          padding: [20, 10]
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          left: '20',
          bottom: '20',
          data: ['微信', '微博', '百度推广', '新浪扶翼', '头条', '抖音', '快手', '360推广', '谷歌', '应用市场']
        },
        label: {
          formatter: '{b}: {d}%',
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: '微信' },
              { value: 310, name: '微博' },
              { value: 234, name: '百度推广' },
              { value: 135, name: '新浪扶翼' },
              { value: 1548, name: '头条' },
              { value: 1548, name: '抖音' },
              { value: 1548, name: '快手' },
              { value: 1548, name: '360推广' },
              { value: 1548, name: '谷歌' },
              { value: 1548, name: '应用市场' }

            ]
          }
        ]
      }
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
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
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

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
        background: #34bfa3
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
        background: #34bfa3
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
      color: #34bfa3
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
  }
}

.chart-wrapper{
    background: white;
}
.chart1, .chart2{
    height: 300px;
}
.chart1{
  margin-bottom: 10px;
}
.chart2{
  margin-top: 10px;
}
.chart3{
    height: 620px;
}
@media (max-width:550px) {
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
