<template>
    <div>
      <el-table>

      </el-table>
    </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    tableData: {
      type: Array,
      default: undefined
    },
    tableType: {
      type: Array,
      default: undefined
    }
  }
}
</script>

<style scoped>

</style>
