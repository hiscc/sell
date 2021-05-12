<template>
  <div style="padding: 0 0px;" @click="toggleClick">
    <el-cascader
      :value.sync="inVal"
      :options="options"
      :label="label"
      size='small'
      :disabled="false"
      :placeholder="ph"
      filterable
      clearable
      ref="myAddress" 
      :props="{ checkStrictly: checkStrictly }"
      style="width: 200px"
      popper-class="address"
      @change="handleChange"></el-cascader>
  </div>
</template>

<script>



let antdDistrict = []
let pcList = []
// more
let districtData = require('@/constant/location.json')
// let districtData = require('@/constant/locationAll.json')

// console.log($Vue.isAll)

// 省市区层级
Object.keys(districtData).forEach((index) => {
  let itemLevel1 = {};
  let itemLevel2 = {};
  itemLevel1.value = districtData[index].code;
  itemLevel1.label = districtData[index].name;
  // 最少选择二级
  itemLevel1.disabled = true
  itemLevel1.children = [];
  let data = districtData[index].cities;

  Object.keys(data).forEach((index) => {
    itemLevel2.value = data[index].code;
    itemLevel2.label = data[index].name;
    itemLevel2.children = [];
    let data2 = data[index].districts;
    let itemLevel3 = {};
    // itemLevel3.children = [];
    
    Object.keys(data2).forEach((index) => {
      itemLevel3.value = index;
      itemLevel3.label = data2[index];
      itemLevel2.children.push(itemLevel3);
      itemLevel3 = {};
    });
    itemLevel1.children.push(itemLevel2);
    itemLevel2 = {};
  })
  antdDistrict.push(itemLevel1)
})



// 省市层级
Object.keys(districtData).forEach((index) => {
  let itemLevel1 = {};
  let itemLevel2 = {};
  itemLevel1.value = districtData[index].code;
  itemLevel1.label = districtData[index].name;
  itemLevel1.children = [];
  let data = districtData[index].cities;

  Object.keys(data).forEach((index) => {
    itemLevel2.value = data[index].code
    itemLevel2.label = data[index].name
    // itemLevel2.children = [];

    
    itemLevel1.children.push(itemLevel2)
    itemLevel2 = {}
  })
  pcList.push(itemLevel1)
})



export default {
  name: 'Address',
  data(){
    return {
        isAll: false,
        options: antdDistrict,
      };
  },
  props: {
    checkStrictly: {
      type: Boolean,
      default: true,
    },
    ph: {
      type: String,
      default: "请选择地址",
    },
    value: {
      type: Array,
      default: function(){
        return []
      }
    },
    label: {
      type: Array,
      default: function(){
        return []
      }
    },
  },
  computed: {
    inVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      }
    },
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    },
    handleChange(val){
      const { options } = this
      const label = this.getLabelArr(options, val)
      this.$emit('handleChange', {value: val, label: label})
    },
    getLabelArr(dataArr, valArr = []){
      var labelArr = []
      var index = 0
      const dataItem = dataArr.find(data => {
        return data.value == valArr[index]
      })
      if(!dataItem) return labelArr
      labelArr.push(dataItem.label)

      function addToLabel(item){
        if(item.children){
        index += 1
        const labelItem = item.children.find(data => {
          return data.value == valArr[index]
        })
        if(!labelItem) return labelArr
        labelArr.push(labelItem.label)
        if(labelItem.children){
          addToLabel(labelItem)
        }
      }}
      addToLabel(dataItem)
      return labelArr
    }
  }
}
</script>

<style scoped lang="scss">



</style>
