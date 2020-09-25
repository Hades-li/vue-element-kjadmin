<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  created () {
    window.addEventListener('resize', (event) => {
      this.RESIZE(window.innerWidth)
    })
  },
  methods: {
    ...mapMutations('settings',[
      'RESIZE'
    ])
  }
}
</script>

<style lang="scss"></style>
