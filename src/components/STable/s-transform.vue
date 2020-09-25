<template>
  <div class="s-transform">
    <div class="list left">
      <p>隐藏字段</p>
      <el-input
        class="input-wrap"
        size="small"
        placeholder="搜索"
      />
      <el-scrollbar
        tag="ul"
        class="nobd"
      >
        <li
          v-for="(item, index) in leftData"
          :key="index"
          :class="{selected: item === leftSelectedItem}"
          @click="selected(item, 'left')"
        >
          {{ item.label || item.name }}
        </li>
      </el-scrollbar>
    </div>
    <div class="transform-btns">
      <div class="m-b-15">
        <el-button
          class="btn"
          size="small"
          icon="el-icon-arrow-left"
          :disabled="!rightSelectedItem"
          @click="toHidden"
        />
      </div>
      <div>
        <el-button
          class="btn"
          size="small"
          icon="el-icon-arrow-right"
          :disabled="!leftSelectedItem"
          @click="toShow"
        />
      </div>
    </div>
    <div class="list right">
      <p>显示字段</p>
      <el-scrollbar
        tag="ul"
        class="h332"
      >
        <li
          v-for="(item,index) in rightData"
          :key="index"
          :class="{selected: item === rightSelectedItem}"
          @click="selected(item, 'right')"
        >
          {{ item.label || item.name }}
        </li>
      </el-scrollbar>
    </div>
    <div class="sort-btns">
      <div class="m-b-15">
        <el-button
          size="small"
          class="btn"
          @click="sortUp"
        >
          <svg-icon
            icon-class="up"
            class-name="ico-up"
          />
        </el-button>
      </div>
      <div>
        <el-button
          size="small"
          class="btn"
          @click="sortDown"
        >
          <svg-icon
            icon-class="up"
            class-name="ico-down"
          />
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  name: 'STransform',
  props: {
    arrayData: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      trData: [],
      leftSelectedItem: undefined,
      rightSelectedItem: undefined,
    }
  },
  computed: {
    leftData() {
      return this.trData.filter(item => item.hidden)
    },
    rightData() {
      return this.trData.filter(item => !item.hidden)
    }
  },
  watch: {
    arrayData: {
      handler(val) {
        this.trData = cloneDeep(val)
      },
      immediate: true
    }
  },
  methods: {
    selected(item, type) {
      switch (type) {
        case 'left':
          if (this.leftSelectedItem === item) {
            this.leftSelectedItem = undefined
          } else {
            this.leftSelectedItem = item
          }
          break
        case 'right':
          if (this.rightSelectedItem === item) {
            this.rightSelectedItem = undefined
          } else {
            this.rightSelectedItem = item
          }
          break
      }
    },
    toHidden() {
      if (this.rightSelectedItem) {
        this.$set(this.rightSelectedItem, 'hidden', true)
        this.rightSelectedItem = undefined
        this.leftSelectedItem = undefined
        this.update()
      }
    },
    toShow() {
      if (this.leftSelectedItem) {
        this.$set(this.leftSelectedItem, 'hidden', false)
        this.leftSelectedItem = undefined
        this.rightSelectedItem = undefined
        this.update()
      }
    },
    // 向上排序
    sortUp() {
      if (this.rightSelectedItem) {
        const index = this.rightData.indexOf(this.rightSelectedItem) // 拿到当前item在右侧数组的索引
        if (index > 0) {
          const targetItem = this.rightData[index - 1] // 目标交换的item
          const targetItemIndex = this.trData.indexOf(targetItem) // 目标交换的item索引
          const itemIndex = this.trData.indexOf(this.rightSelectedItem) // 当前要交换的item索引
          const item = this.trData.splice(itemIndex, 1, targetItem)[0] // 当前要交换的item
          this.trData.splice(targetItemIndex,1,item)
          this.update()
        }
      }
    },
    // 向下排序
    sortDown() {
      const index = this.rightData.indexOf(this.rightSelectedItem) // 拿到当前item在侧数组的索引
      if (index < this.rightData.length - 1) {
        const targetItem = this.rightData[index + 1] // 目标交换的item
        const targetItemIndex = this.trData.indexOf(targetItem) // 目标交换的item索引
        const itemIndex = this.trData.indexOf(this.rightSelectedItem) // 当前要交换的item索引
        const item = this.trData.splice(itemIndex, 1, targetItem)[0] // 当前要交换的item
        this.trData.splice(targetItemIndex,1,item)
        this.update()
      }
    },
    update() {
      this.$emit('update:arrayData', this.trData)
    }
  }
}
</script>

<style lang="scss" scoped>
.s-transform {
  display: flex;
  justify-content: space-between;
}

.list {
  width: 180px;

  > p {
    line-height: 14px;
    margin: 0;
    padding: 0 0 10px;
  }

  .input-wrap ::v-deep .el-input__inner {
    border-radius: 0;
  }

  .el-scrollbar {
    height: 300px;
    border: 1px solid $--border-color-base;

    ::v-deep .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    &.h332 {
      height: 331px;
    }

    &.nobd {
      border-width: 0 1px 1px;
      border-style: solid;
      border-color: $--border-color-base;
    }

    li {
      padding: 0 10px;
      line-height: 32px;
      height: 32px;
      cursor: pointer;
      &.selected {
        color: #fff;
        background-color: $--color-primary!important;
      }
      &:hover {
        background-color: $--color-primary-light-8;
      }
    }
  }
}

.transform-btns {
  padding: 100px 15px;

  .btn {
    padding: 9px;
    color: $--color-primary;
  }
}

.ico-up, .ico-down {
  fill: #4b86fc;
}

.ico-down {
  transform: rotateZ(180deg);
}

.sort-btns {
  padding-top: 24px;

  .btn {
    padding: 9px;
  }
}

</style>
