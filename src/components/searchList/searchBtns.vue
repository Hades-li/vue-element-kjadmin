<template>
  <div class="search-btns" :style="layoutStyle">
    <template v-for="(item,index) in btns">
      <el-button
        v-if="item.icon === 'icon-save'"
        :key="index"
        :type="item.type"
        plain
        :title="item.title"
        size="small"
        class="square"
        @click="handleClick(item)"
      >
        <svg-icon
          icon-class="save"
          class-name="icon-save"
        />
      </el-button>
      <el-button
        v-else
        :key="index"
        :icon="item.icon"
        :type="item.type"
        :plain="!(item.name === 'add')"
        :title="item.title"
        size="small"
        class="square"
        @click="handleClick(item)"
      />
    </template>
    <el-dropdown v-if="more && more.length > 0" class="drop-btns" @command="handleCommand">
      <el-button type="primary" plain size="small" class="square">
        <i class="el-icon-more"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in more" :key="item.id" :command="item">{{ item.title }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'SearchBtns',
  props: {
    title: {
      type: String,
      default: ''
    },
    baseButtons: {
      type: Array,
      default: () => ['add','delete','edit', 'save']
    },
    more: {
      type: Array,
      default: () => []
    },
    justify: {
      type: String,
      default: ''
    }
  },
  computed: {
    btns () {
      return this.baseButtons.map(item => {
        let icon = ''
        let title = ''
        let type = ''
        switch (item) {
          case 'add':
            title = '新增'
            icon = 'el-icon-plus'
            type = 'success'
            break
          case 'delete':
            title = '删除'
            icon = 'el-icon-delete'
            type = 'danger'
            break
          case 'edit':
            title = '编辑'
            icon = 'el-icon-edit'
            type = 'primary'
            break
          case 'save':
            title = '保存'
            icon = 'icon-save'
            type = 'success'
            break
          case 'commit':
            title = '提交'
            icon = 'el-icon-check'
            type = 'primary'
            break
          case 'cancel':
            title = '取消'
            icon = 'el-icon-close'
            type = 'primary'
            break
        }
        return {
          name: item,
          title,
          type,
          icon
        }
      })
    },
    layoutStyle () {
      return {
        justifyContent: this.justify
      }
    }
  },
  methods: {
    handleClick(item) {
      this.$emit('handle-click', item.name)
    },
    handleCommand(item) {
      this.$emit('handle-command', item)
    }
  },
}
</script>
<style lang="scss" scoped>
.search-btns {
  display: flex;
}
.drop-btns {
  margin-left: 10px;
}
.icon-save {
  width: 20px;
  height: 20px;
  fill: $--button-success-border-color;
}
</style>
<style>

</style>
