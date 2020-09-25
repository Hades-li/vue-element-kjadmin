<template>
  <draggable
    v-model="tags"
    group="people"
    tag="ul"
    v-bind="dragOptions"
    class="drag-wrap"
    @change="change"
  >
    <li
      v-for="(element, index) in tags"
      :key="index"
      class="list-group-item"
      :class="{active: element.meta.isActive}"
      @click="selected(element)"
      @contextmenu.prevent="mouseRightClick(element, $event)"
    >
      {{ element.meta.title }}
      <i
        class="el-icon-close"
        @click.stop="closeTag(element)"
      />
    </li>
  </draggable>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  name: 'TagsView',
  components: {
    Draggable
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    }
  },
  computed: {
    tags:{
      get() {
        return this.list
      },
      set(sortedTags) {
        this.$emit('update:list', sortedTags)
      }
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    // x轴滚动
    scroll_x(x) {
      let x_pos = this.$el.scrollLeft
      this.$el.scrollTo({
        left: x_pos + x,
        behavior: 'smooth'
      })
    },
    closeTag(item) {
      this.$emit('closeTag', item)
    },
    selected(itemData) {
      this.$emit('selected', itemData)
    },
    mouseRightClick(itemData, event) {
      this.$emit('mouseRightClick', itemData, event)
    },
    change(e) {

    }
  }
}
</script>

<style scoped>

</style>
