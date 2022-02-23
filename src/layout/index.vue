<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container"></side-bar>
    <div class="main-container">
      <div>
        <nav-bar></nav-bar>
        <tags-view></tags-view>
      </div>
      <app-main></app-main>
      <right-panel></right-panel>
    </div>
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import NavBar from './components/NavBar'
import RightPanel from '../components/RightPanel/index'
import TagsView from './components/TagsView/index'
import SideBar from './components/SideBar/index'
export default {
  name: 'Layout',
  components: { TagsView, RightPanel, NavBar, AppMain, SideBar }
}
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
