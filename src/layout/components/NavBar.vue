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
        <screenfull class="right-menu-item"></screenfull>
        <el-tooltip content="布局大小" effect="dark" placement="bottom">
          <size-select class="right-menu-item"></size-select>
        </el-tooltip>
      </template>
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>
            <span>布局设置</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span>退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import RuoYiGit from '../../components/RuoYi/Git/index'
import RuoYiDoc from '../../components/RuoYi/Doc/index'
import Hamburger from '../../components/Hamburger/index'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  components: {
    RuoYiGit,
    RuoYiDoc,
    Breadcrumb,
    Hamburger,
    Screenfull,
    SizeSelect
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
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
  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      margin-top: 5px;
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
