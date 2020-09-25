<template>
  <div>
    <el-button
      type="primary"
      @click="dlgOpen(0)"
    >
      宽度500px
    </el-button>
    <dlg
      title="弹窗-小-500px"
      :visible.sync="dlgShow_0"
      size="small"
    >
      <template v-slot:expandBtn>
        <el-button type="success" size="small">暂存</el-button>
      </template>
      <el-form size="small" label-width="140px">
        <el-form-item label="线索名称:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="电话:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="客户名称（英文）:">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="所属省市:">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </dlg>
  </div>
</template>

<script>
import DemoBlock from '@/components/demoBlock'
import Dlg from '@/components/dialog'

export default {
  name: 'Popup',
  components: {
    DemoBlock,
    Dlg
  },
  data: () => ({
    dlgShow_0: false
  }),
  methods: {
    dlgOpen(number) {
      this[`dlgShow_${number}`] = true
    }
  }
}
</script>

<style scoped>

</style>
