<template>
  <el-scrollbar
    class="app-main"
    wrap-class="scroll-wrap"
    view-class="scroll-view"
  >
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <!--      <keep-alive>-->
      <router-view />
      <!--      </keep-alive>-->
    </transition>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews () {
      return this.$store.state.tagsView.cachedViews
    },
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style lang="scss" scoped>
  .fixed-header + .app-main {
    padding-top: 50px;
    height: 100vh;
    overflow: auto;
  }

  .hasTagsView {
    .app-main {
      /* 84 = navbar + tags-view = 50 + 34 */
      min-height: calc(100vh - 94px);
    }

    .fixed-header + .app-main {
      padding-top: 84px;
    }
  }
</style>

<style lang="scss">
  // fix css style bug in open el-dialog
  .el-popup-parent--hidden {
    .fixed-header {
      padding-right: 15px;
    }
  }
  .scroll-wrap {
    overflow-x: hidden;
  }
  .scroll-view {
    padding: 0 15px;
  }
  .app-main {
    /* 50= navbar  50  */
    height: calc(100% - 94px);
    /*width: 100%;*/
    position: relative;

    > > .el-scrollbar__wrap {
      overflow: hidden;
    }
  }
</style>
