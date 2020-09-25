<template>
  <div
    class="menu"
    :class="{isCollapse: menuCollapse}"
  >
    <div
      class="logo"
      :class="{'is-collapse': isCollapse}"
    >
      <i class="icon el-icon-apple" />
      <span
        v-show="!isCollapse"
        class="logo-title"
      >六在标题</span>
    </div>
    <el-scrollbar
      wrap-class="scroll-wrap"
      class="menu-scroll"
      :class="{'is-collapse': isCollapse}"
    >
      <el-menu
        class="main"
        background-color="#333a4d"
        text-color="#ffffff"
        :default-active="activeMenuPathArray[0] && activeMenuPathArray[0].path"
        active-text-color="#ffffff"
        :collapse="isCollapse"
        :collapse-transition="false"
        @select="selected"
      >
        <el-menu-item
          v-for="(item,index) in menus"
          :key="index"
          :index="item.path"
          @click="mainMenuSelected(item)"
        >
          <svg-icon
            :icon-class="item.meta.icon"
            class-name="menu-icons"
          />
          <span
            slot="title"
            class="title"
          >{{ item.meta.title }}</span>
          <i
            v-show="item.children"
            class="el-icon-arrow-right"
          />
        </el-menu-item>
      </el-menu>
    </el-scrollbar>

    <!--    二级菜单-->
    <div
      v-show="isCollapse"
      class="submenu-wrap"
    >
      <h3 class="subMenu-title">{{ subMenuTitle }}</h3>
      <el-scrollbar
        wrap-class="scroll-wrap"
        class="menu-scroll sub"
      >
        <el-menu
          class="sub"
          text-color="#333333"
          :default-active="activeMenuPathArray[activeMenuPathArray.length - 1] && activeMenuPathArray[activeMenuPathArray.length - 1].path"
        >
          <template
            v-for="(menu, index) in subMenus"
          >
            <el-submenu
              v-if="!!menu.children"
              :key="index"
              :data-index="menu.path"
              :index="menu.path"
            >
              <template slot="title">
                <span slot="title">{{ menu.meta.title }}</span>
              </template>
              <el-menu-item
                v-for="(item,i) in menu.children"
                :key="i"
                :data-index="`${item.path}`"
                :index="`${item.path}`"
                @click="subMenuSelected(item)"
              >
                <span slot="title">{{ item.meta.title }}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item
              v-else
              :key="index"
              :index="menu.path"
              @click="subMenuSelected(menu)"
            >
              <span slot="title">{{ menu.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>

function findMenuActive(menus, path, res) {
  let tmp = []
  if (!res) {
    res = tmp
  }
  const item = menus.find(item => {
    return path.startsWith(item.path)
  })
  if (item) {
    res.push(item)
    if (item.children) {
      findMenuActive(item.children, path, res)
    }
  }
  return res
}

export default {
  name: 'Menu',
  data () {
    return {
      // isCollapse: false,
      subMenus: [],
      subMenuTitle: '',
      activeMenuPathArray: []
    }
  },
  computed: {
    menus() {
      return this.$store.state['menus'].menus
    },
    isCollapse() {
      return !!(this.activeMenuPathArray && this.activeMenuPathArray[0]?.children)
    },
    menuCollapse() {
      return this.$store.state.settings.isCollapse
    },
  },
  watch: {
    $route(route) {
      this.activeMenuPathArray = findMenuActive(this.menus, route.path)
    },
    activeMenuPathArray(val) {
      if (val[0]?.children) {
        this.subMenus = val[0].children
        this.subMenuTitle = val[0].meta.title
      }
    }
  },
  created() {
    this.activeMenuPathArray = findMenuActive(this.menus, this.$route.path)
    // debugger
  },
  methods: {
    selected (item) {
      console.log(item)
      // this.isCollapse = index === '2'
    },
    mainMenuSelected(menu) {
      if (menu.children && menu.children.length > 0) {
        this.activeMenuPathArray = findMenuActive(this.menus, menu.path)
      } else {
        this.$router.push(menu.path)
      }
    },
    subMenuSelected(menu) {
      this.$router.push(menu.path)
    }
  }
}
</script>

<style scoped>

</style>
