<template>
  <div class="setup-col">
    <el-popover
      trigger="click"
      popper-class="setup-popper"
      v-model="popShow"
    >
      <ul class="list-menu">
        <li @click="setupPopper">设置显示列</li>
        <li @click="restore">恢复默认</li>
      </ul>
      <svg-icon
        slot="reference"
        icon-class="setup"
        class-name="ico-setup"
      />
    </el-popover>
    <dlg
      title="设置列表字段"
      :visible.sync="dlgShow"
      size="setupCol"
      @confirm="confirm"
      @cancel="cancel"
    >
      <s-transform
        v-if="dlgShow"
        :array-data.sync="columnArray"
      />
    </dlg>
  </div>
</template>

<script>
import Dlg from '../dialog'
import STransform from './s-transform'
import { cloneDeep } from 'lodash'

export default {
  name: 'SSetupCol',
  components: {
    Dlg,
    STransform
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    columnsSource: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      popShow: false,
      dlgShow: false,
      columnArray: cloneDeep(this.columns.filter(item => (item.label||item.name)))
    }
  },
  methods: {
    setupPopper () {
      this.dlgShow = true
      this.popShow = false
    },
    confirm() {
      const array = this.columns.filter(item => !item.prop)
      const newColumn = array.concat(this.columnArray)
      this.$emit('update:columns', newColumn)
      this.$emit('changeColumn', newColumn)
      this.dlgShow = false
    },
    cancel() {
      this.columnArray = cloneDeep(this.columns.filter(item => (item.label||item.name))) // 取消时还原列的数据
    },
    //恢复默认
    restore() {
      this.columnArray = cloneDeep(this.columnsSource.filter(item => (item.label||item.name)))
      this.$emit('update:columns', this.columnsSource)
      this.popShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.ico-setup:hover {
  opacity: 0.8;
  cursor: pointer;
}

.list-menu {
  list-style: none;

  li {
    height: 32px;
    line-height: 32px;
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      color: $--color-white;
      background-color: $--color-primary;
    }
  }
}
</style>
<style>
.setup-popper {
  padding: 10px 0;
}
</style>
