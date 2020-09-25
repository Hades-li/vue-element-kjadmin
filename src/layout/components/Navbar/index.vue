<template>
  <div class="navbar">
    <div class="wrap left">
      <svg-icon
        icon-class="unfold"
        :class-name="`collapse-btn ${isCollapse? 'isCollapse' : ''}`"
        @click="toggleCollapse"
      />
      <el-input
        class="search-input"
        placeholder="Search..."
        size="small"
        suffix-icon="el-icon-search"
      />
    </div>
    <div class="wrap right">
      <el-dropdown class="nav-dropdown">
        <span class="el-dropdown-link">
          江苏跨境<i class="el-icon-caret-bottom el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>江苏跨境</el-dropdown-item>
          <el-dropdown-item>其他跨境</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown class="nav-dropdown">
        <span class="el-dropdown-link">
          运营中心<i class="el-icon-caret-bottom el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>其他中心</el-dropdown-item>
          <el-dropdown-item>什么中心</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <Notice class=""></Notice>
      <category></category>
      <theme></theme>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Notice from './Notice'
import Login from './Login'
import Category from '@/layout/components/Navbar/category'
import Theme from '@/layout/components/Navbar/theme'

export default {
  name: 'Navbar',
  components: {
    Theme,
    Category,
    Notice,
    Login
  },
  data() {
    return {

    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.settings.isCollapse
    }
  },
  methods: {
    toggleCollapse() {
      this.$store.dispatch('settings/changeSetting',{
        key: 'isCollapse',
        value: !this.isCollapse
      })
    }
  }
}
</script>

<style scoped>

</style>
