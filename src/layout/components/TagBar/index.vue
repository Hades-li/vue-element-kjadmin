<template>
  <div class="tag-bar">
    <a
      class="arrow left"
      href="javascript:"
      @click="scroll_left"
    >
      <i class="el-icon-caret-left" />
      <i class="el-icon-caret-left" />
    </a>
    <tags-view
      ref="tagsView"
      :list.sync="tagsList"
      @closeTag="closeTag"
      @selected="selectedTag"
      @mouseRightClick="contextMenuOpen"
    />
    <a
      class="arrow right"
      href="javascript:"
      @click="scroll_right"
    >
      <i class="el-icon-caret-right" />
      <i class="el-icon-caret-right" />
    </a>
    <a
      class="more"
      href="javascript:"
      @click.stop="contextMenuOpen(null,$event)"
    >
      <i class="el-icon-more" />
    </a>
    <!--    右键菜单-->
    <transition name="el-zoom-in-top">
      <ul
        v-show="contextVisible"
        class="contextMenu"
        :style="{left: contextMenu.left + 'px', top: contextMenu.top + 'px'}"
      >
        <li @click="refresh">
          刷新
        </li>
        <li @click="closeTag(contextMenuTag)">
          关闭当前页
        </li>
        <li @click="closeOtherTags(contextMenuTag)">
          关闭其他页
        </li>
        <li
          v-show="isContextMore"
          @click="closeAllTags"
        >
          关闭全部页
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import TagsView from './TagsView'
import { mapActions } from 'vuex'

export default {
  name: 'TagBar',
  components: {
    TagsView
  },
  data () {
    return {
      contextVisible: false,
      contextMenu: {
        left: 0,
        top: 0
      },
      contextMenuTag: undefined, // 右键打开菜单的-标签
      isContextMore: false,
    }
  },
  computed: {
    tagsList: {
      get() {
        return this.$store.state.tagsView.visitedViews.map(item => {
          const route = item
          route.meta.isActive = item.path === this.$route.path
          return route
        })
      },
      set(views) {
        this.$store.dispatch('tagsView/replaceViews', views)
      }
    },
    // 当前激活的tag
    currentTag () {
      return this.$route
    }
  },
  watch: {
    $route (tag) {
      this.addTag(tag)
    }
  },
  created() {
    this.addTag(this.$route)
  },
  mounted () {
    document.body.addEventListener('click', this.closeMenu)
  },
  beforeDestroy () {
    document.body.removeEventListener('click', this.closeMenu)
  },
  methods: {
    ...mapActions('tagsView', [
      'addView',
      'delView',
      'delVisitedView',
      'delAllViews',
      'delOthersViews'
    ]),
    // 左滚动
    scroll_left () {
      this.$refs.tagsView.scroll_x(-100)
    },
    // 右滚动
    scroll_right () {
      this.$refs.tagsView.scroll_x(100)
    },
    addTag(route) {
      // console.log(route)
      if (!route.meta?.hiddenTag) {
        this.addView(route)
      }
    },
    // 选中Tag标签
    selectedTag (tag) {
      // console.log(tag)
      this.$router.push(tag)
    },
    // 关闭Tag
    closeTag (tag) {
      this.delView(tag).then(({prevView, nextView}) => {
        if (nextView) {
          this.$router.replace(nextView)
        } else {
          this.$router.replace(prevView)
        }
      })
    },
    // 关闭其他页面
    closeOtherTags(tag) {
      if (tag.path !== this.currentTag.path) {
        this.$router.replace(tag).then(() => {
          this.delOthersViews(tag)
        })
      } else {
        this.delOthersViews(tag)
      }
    },
    // 关闭所有页面
    closeAllTags() {
      this.delAllViews().then(({visitedViews}) => {
        if (visitedViews.length === 0) {
          this.$router.replace({
            path: '/'
          })
        }
      })
    },
    // 刷新当前页面
    refresh() {
      this.$store.commit('tagsView/SET_IS_RELOADING', false)
      this.$nextTick().then(() => {
        this.$store.commit('tagsView/SET_IS_RELOADING', true)
      })
    },
    // 右键菜单打开
    contextMenuOpen (tag, event) {
      let { x, y } = event
      // 判断是否超出窗体边界
      if (x + 150 > window.outerWidth) {
        x -= 150
      }
      this.contextMenu.left = x
      this.contextMenu.top = y
      this.isContextMore = !tag
      this.contextVisible = true
      this.contextMenuTag = tag
    },
    closeMenu () {
      this.contextVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }
</style>
