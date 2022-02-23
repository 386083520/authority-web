<template>
  <div class="navbar">
    <hamburger class="hamburger-container"></hamburger>
    <breadcrumb></breadcrumb>
    <div class="right-menu">
      <template>
        <el-tooltip content="源码地址" effect="dark" placement="bottom">
          <ruo-yi-git class="right-menu-item"></ruo-yi-git>
        </el-tooltip>
        <el-tooltip content="文档地址" effect="dark" placement="bottom">
          <ruo-yi-doc class="right-menu-item"></ruo-yi-doc>
        </el-tooltip>
        <el-tooltip content="布局大小" effect="dark" placement="bottom">
          <div class="right-menu-item">布局大小</div>
        </el-tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import RuoYiGit from '../../components/RuoYi/Git/index'
import RuoYiDoc from '../../components/RuoYi/Doc/index'
import Hamburger from '../../components/Hamburger/index'

export default {
  name: 'NavBar',
  components: {
    RuoYiGit,
    RuoYiDoc,
    Breadcrumb,
    Hamburger
  }
}
</script>

<style scoped lang="scss">
.navbar {
  height: 50px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
    }
  }
}
</style>
