<template>
  <el-dialog
    :visible.sync="isOpen"
    :width="`${dlgSize}px`"
    append-to-body
  >
    <template v-slot:title>
      <h3>{{ title }}</h3>
    </template>
    <slot />
    <template v-slot:footer>
      <slot name="expandBtn" />
      <el-button
        v-if="isCancel"
        size="small"
        @click="cancel"
      >
        取 消
      </el-button>
      <el-button
        v-if="isConfirm"
        size="small"
        type="primary"
        @click="confirm"
      >
        确 定
      </el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    },
    isCancel: {
      type: Boolean,
      default: true
    },
    isConfirm: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    dlgSize() {
      switch (this.size) {
        case 'large':
          return '1000'
        case 'small':
          return '500'
        case 'setupCol':
          return '530'
        default:
          return '810'
      }
    },
    isOpen: {
      get () {
        return this.visible
      },
      set (bool) {
        this.$emit('update:visible', bool)
      }
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm')
    },
    cancel() {
      this.isOpen = false
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
