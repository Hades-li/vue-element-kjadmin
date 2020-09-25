<template>
  <div class="demo-block">
    <el-card
      body-style="padding: 0"
      shadow="hover"
    >
      <div class="body">
        <slot />
      </div>
      <div class="code">
        <div
          v-if="isOpenCode"
          class="code-content"
          v-html="md"
        />
        <div class="code-btn">
          <el-button
            type="text"
            :icon="isOpenCode ? 'el-icon-caret-top':'el-icon-caret-bottom'"
            @click="toggleCode"
          >
            显示代码
          </el-button>
        </div>
      </div>
    </el-card>
    <el-card v-if="mdApi" style="margin-top: 20px">
      <div v-html="mdApi" />
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DemoBlock',
  props: {
    md: {
      type: String,
      default: '<code>代码示例</code>'
    },
    mdApi: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isOpenCode: false
    }
  },
  methods: {
    toggleCode() {
      this.isOpenCode = !this.isOpenCode
    }
  }
}
</script>

<style lang="scss" scoped>
.body {
  padding: 20px;
}

.code {
  .code-btn {
    border-top: 1px solid $--border-color-lighter;
    border-bottom: 1px solid $--border-color-lighter;
    text-align: center;
  }
  .code-content {
    //background-color: ;
    border-top: 1px solid $--border-color-lighter;
    padding: 20px;
  }
}

</style>
