<template>
    <div :style="{ backgroundColor: variables.menuBackground}">
      <logo></logo>
      <el-scrollbar>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :background-color="variables.menuBackground"
          :text-color="variables.menuColor"
          active-text-color="#ffd04b">
          <sidebar-item
            v-for="(route, index) in sidebarRouters"
            :key="route.path  + index"
            :item="route">
          </sidebar-item>
        </el-menu>
      </el-scrollbar>
    </div>
</template>

<script>
import Logo from './Logo'
import variables from '@/assets/styles/variables.scss'
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'SideBar',
  components: { SidebarItem, Logo },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    ...mapGetters(['sidebarRouters']),
    variables () {
      return variables
    }
  }
}
</script>

<style scoped>

</style>
