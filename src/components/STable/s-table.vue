<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 09:04:10
 * @LastEditTime: 2019-08-20 13:42:17
 * @LastEditors: Please set LastEditors
 -->

<template>
  <div class="s-table">
    <el-table
      ref="elTable"
      v-bind="$attrs"
      :data="data"
      :size="size"
      :span-method="merge ? mergeMethod : spanMethod"
      header-row-class-name="stable-header"
      v-on="$listeners"
    >
      <s-column
        v-for="(item, index) in columnsData"
        :key="index"
        v-bind="$attrs"
        :column="item"
      />
      <el-table-column
        v-if="isSetupColumn"
        width="38"
      >
        <template v-slot:header>
          <s-setup-col
            :columns.sync="columnsData"
            :columns-source="columnsSource"
          />
        </template>
      </el-table-column>
      <template slot="empty">
        <svg-icon
          icon-class="noData"
          class="samples-empty-data"
        />
      </template>
    </el-table>
    <el-pagination
      v-if="pagination"
      class="s-table-pagination"
      v-bind="$attrs"
      :style="{ 'margin-top': paginationTop, 'text-align': paginationAlign }"
      v-on="$listeners"
      @current-change="paginationCurrentChange"
    />
  </div>
</template>

<script>
import sColumn from './s-column'
import sSetupCol from './s-setup-col'
import { cloneDeep } from 'lodash'

export default {
  components: {
    sColumn,
    sSetupCol
  },
  props: {
    size: {
      type: String,
      default: 'small'
    },
    type: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    spanMethod: Function,
    pagination: {
      type: Boolean,
      default: false
    },
    paginationTop: {
      type: String,
      default: '15px'
    },
    paginationAlign: {
      type: String,
      default: 'right'
    },
    merge: Array,
    isSetupColumn: { // 可否设置列
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mergeLine: {},
      mergeIndex: {},
      columnsSource: this.columns, // 原始数据
      columnsData: cloneDeep(this.columns) // 用于展示的数据
    }
  },
  computed: {
    columnArray: {
      get() {
        return this.columns
      },
      set(val) {
        this.$emit('update:columns', val)
      }
    },
    dataLength() {
      return this.data.length
    }
  },
  watch: {
    merge() {
      this.getMergeArr(this.data, this.merge)
    },
    dataLength() {
      this.getMergeArr(this.data, this.merge)
    }
  },
  created() {
    this.getMergeArr(this.data, this.merge)
  },
  methods: {
    clearSelection() {
      this.$refs.elTable.clearSelection()
    },
    toggleRowSelection(row, selected) {
      this.$refs.elTable.toggleRowSelection(row, selected)
    },
    toggleAllSelection() {
      this.$refs.elTable.toggleAllSelection()
    },
    toggleRowExpansion(row, expanded) {
      this.$refs.elTable.toggleRowExpansion(row, expanded)
    },
    setCurrentRow(row) {
      this.$refs.elTable.setCurrentRow(row)
    },
    clearSort() {
      this.$refs.elTable.clearSort()
    },
    clearFilter(columnKey) {
      this.$refs.elTable.clearFilter(columnKey)
    },
    doLayout() {
      this.$refs.elTable.doLayout()
    },
    sort(prop, order) {
      this.$refs.elTable.sort(prop, order)
    },
    paginationCurrentChange(val) {
      this.$emit('p-current-change', val)
    },
    getMergeArr(tableData, merge) {
      if (!merge) return
      this.mergeLine = {}
      this.mergeIndex = {}
      // 'k' is defined but never used (no-unused-vars) at src\components\s-table\s-Table.vue:103:28:
      merge.forEach(item => {
        tableData.forEach((data, i) => {
          if (i === 0) {
            this.mergeIndex[item] = this.mergeIndex[item] || []
            this.mergeIndex[item].push(1)
            this.mergeLine[item] = 0
          } else {
            if (data[item] === tableData[i - 1][item]) {
              this.mergeIndex[item][this.mergeLine[item]] += 1
              this.mergeIndex[item].push(0)
            } else {
              this.mergeIndex[item].push(1)
              this.mergeLine[item] = i
            }
          }
        })
      })
    },
    mergeMethod({ row, column, rowIndex, columnIndex }) {
      const index = this.merge.indexOf(column.property)
      if (index > -1) {
        const _row = this.mergeIndex[this.merge[index]][rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    }
  }
}
</script>
