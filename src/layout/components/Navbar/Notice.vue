<template>
  <el-dropdown
    trigger="click"
    class="nav-icon-btn"
  >
    <span class="el-dropdown-link">
      <span class="num">99</span>
      <i class="el-icon-bell" />
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item class="item">
        <i class="el-icon-bell" />
        <span>一些信息</span>
        <span>2010-21-12 12：89</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Notice'
}
</script>

<style lang="scss" scoped>
  .el-icon-bell {
    color: $--color-white;
    font-size: 20px;
  }
  .el-dropdown-link {
    position: relative;
    .num {
      position: absolute;
      right: -10px;
      top: -8px;
      display: block;
      width: 16px;
      height: 16px;
      background-color: $--color-danger;
      font-size: 10px;
      border-radius: 3px;
      color: #fff;
      text-align: center;
    }
  }
</style>
