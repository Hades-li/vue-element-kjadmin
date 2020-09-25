<template>
  <div>
    <el-button
      type="primary"
      @click="dlgOpen(0)"
    >
      宽度810px
    </el-button>
    <dlg
      title="弹窗-大-810px"
      :visible.sync="dlgShow_0"
    >
      <template v-slot:expandBtn>
        <el-button type="success" size="small">暂存</el-button>
      </template>
      <el-form size="small" label-width="140px">
        <el-col :span="12">
          <el-form-item label="线索名称:">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话:">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户名称（英文）:">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属省市:">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="地址:">
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="多选:">
            <el-checkbox-group v-model="form.radioType">
              <el-checkbox label="出口业务" value="1" />
              <el-checkbox label="进口业务" value="2"/>
              <el-checkbox label="其他" value="3"/>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="具体说明">
            <el-input type="textarea"></el-input>
          </el-form-item>
        </el-col>
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
    dlgShow_0: false,
    form: {
      radioType: []
    }
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
