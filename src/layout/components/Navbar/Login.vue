<template>
  <el-dropdown
    trigger="click"
    class="login"
  >
    <span class="el-dropdown-link">
      <img class="head-img" src="" alt="">
      <span class="head-text">XXXX人物是的开发建设开发商</span>
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
  name: 'Login',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    height: 100%;
    color: $--color-white;
    padding: 0 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: $--color-primary-light-1;
    }
    .head-img {
      display: inline-block;
      width: 28px;
      height: 28px;
      border-radius: $--border-radius-circle;
      background-color: #666;
      vertical-align: middle;
      margin-right: 5px;
    }
    .head-text {
      display: inline-block;
      width: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      vertical-align: middle;
    }
  }
</style>
