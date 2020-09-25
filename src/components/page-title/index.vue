<template>
  <div class="page-title">
    <h3>{{ title }}</h3>
    <search-btns
      justify="flex-end"
      :base-buttons="baseButtons"
      :more="more"
      @handle-click="handleClick"
      @handle-command="handleCommand"
    />
  </div>
</template>

<script>
import SearchBtns from '@/components/searchList/searchBtns'

export default {
  name: 'PageTitle',
  components: {
    SearchBtns
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    more: {
      type: Array,
      default: () => []
    },
    baseButtons: {
      type: Array,
      default: () => ['add','delete','edit']
    },
  },
  methods: {
    handleClick(name) {
      this.$emit('handle-click', name)
    },
    handleCommand(item) {
      this.$emit('handle-command', item)
    }
  }
}
</script>
<style lang="scss" scoped>
 .drop-btns {
   margin-left: 10px;
 }
</style>
