<template>
    <div class="sidebar-logo-container" :style="{ backgroundColor: variables.menuBackground}">
      <router-link to="/" class="sidebar-logo-link">
        <img v-if="logo" :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{title}}</h1>
      </router-link>
    </div>
</template>

<script>
import logoImg from '@/assets/logo/logo.png'
import variables from '@/assets/styles/variables.scss'
export default {
  name: 'Logo',
  data () {
    return {
      title: '若依管理系统',
      logo: logoImg
    }
  },
  computed: {
    variables () {
      return variables
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar-logo-container {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    text-align: center;
    overflow: hidden;
    & .sidebar-logo-link {
      height: 100%;
      width: 100%;
      & .sidebar-logo {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-right: 12px;
      }
      & .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 14px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
      }
    }
  }
</style>
