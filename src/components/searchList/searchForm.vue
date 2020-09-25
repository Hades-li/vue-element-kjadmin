<template>
  <div class="search-form">
    <el-form
      :label-width="labelWidth"
      size="small"
    >
      <el-col
        :span="20"
        :style="{height: `${formHeight}px`}"
        class="form-wrap"
      >
        <el-col
          v-for="(item,index) in data"
          :key="index"
          :xl="8"
          :lg="12"
        >
          <el-form-item :label="`${item.label || 'no label'}：`">
            <el-input else />
          </el-form-item>
        </el-col>
      </el-col>
      <el-col :span="4">
        <el-button
          size="small"
          icon="el-icon-search"
          class="rect m-l-10"
          plain
        />
        <el-button
          size="small"
          :icon="isCollapse ? 'el-icon-arrow-up':'el-icon-arrow-down'"
          class="square"
          plain
          @click="toggleCollapse"
        />
      </el-col>
    </el-form>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'SearchForm',
  props: {
    labelWidth: {
      type: String,
      default: '160px'
    },
    data: {
      type: Array,
      default: () => [
        {
          label: '查询1',
        }
      ]
    }
  },
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapState('settings', [
      'isXl'
    ]),
    formHeight() {
      let colHeight = 47
      let colNumber = 0
      let len = this.data.length
      if (this.isXl) {
        colNumber = 3
      } else {
        colNumber = 2
      }
      return this.isCollapse ? Math.ceil(len/colNumber) * colHeight : colHeight
    }
  },
  methods: {
    toggleCollapse(){
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrap {
  transition: height 300ms;
  overflow: hidden;
}
</style>
