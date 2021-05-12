<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="curPage"
      :page-size.sync="curSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="parseInt(total)"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to'

export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 50
    },
    pageSizes: {
      type: Array,
      default() {
        return [50, 100, 200]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: false
    },
    // hidden: {
    //   type: Boolean,
    //   default: false
    // }
  },
  computed: {
    curPage: {
      get() {
        return parseInt(this.page)
      },
      set(val) {
        this.$emit('update:page', parseInt(val))
      }
    },
    curSize: {
      get() {
        return parseInt(this.size)
      },
      set(val) {
        this.$emit('update:size', parseInt(val))
      }
    },
    hidden: {
      get() {
        return parseInt(this.total) < 1
      },
      
    }
  },
  methods: {
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.page, size: val })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, size: this.size })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style scoped>
.pagination-container {
  display: inline-block;
  float: right;
}
.pagination-container.hidden {
  display: none;
}
</style>
