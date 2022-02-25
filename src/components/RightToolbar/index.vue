<template>
  <div class="top-right-btn">
    <el-row>
      <el-tooltip class="item" effect="dark" content="显示搜索" placement="top">
        <el-button size="mini" circle icon="el-icon-search" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="刷新" placement="top">
        <el-button size="mini" circle icon="el-icon-refresh" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="显隐列" placement="top">
        <el-button size="mini" circle icon="el-icon-menu" />
      </el-tooltip>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'RightToolbar'
}
</script>

<style scoped>

</style>
