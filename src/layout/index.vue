<template>
  <div class="layout">
    <Menu />
    <div class="main-wrap" :class="{isCollapse: isCollapse}">
      <nav-bar />
      <tag-bar />
      <app-main />
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'
import NavBar from './components/Navbar'
import TagBar from './components/TagBar'
import AppMain from '@/layout/components/AppMain'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Menu,
    NavBar,
    TagBar
  },
  computed: {
    isCollapse() {
      return this.$store.state.settings.isCollapse
    }
  }
}
</script>

<style scoped>

</style>
