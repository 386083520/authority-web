<template>
    <div class="tags-view-container">
      <scroll-pane class="tags-view-wrapper">
        <router-link
          v-for="tag in visitedViews"
          :to="{ path: tag.path }"
          :key="tag.path"
          :class="isActive(tag)?'active':''"
          class="tags-view-item">
          {{tag.title}}
          <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"/>
        </router-link>
      </scroll-pane>
    </div>
</template>

<script>
import ScrollPane from './ScrollPane'
export default {
  name: 'TagsView',
  components: { ScrollPane },
  watch: {
    $route () {
      this.addTags()
    }
  },
  computed: {
    visitedViews () {
      return this.$store.state.tagsView.visitedViews
    }
  },
  methods: {
    isActive (route) {
      return route.path === this.$route.path
    },
    addTags () {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route)
      }
      return false
    },
    closeSelectedTag (view) {
      this.$tab.closePage(view)
    }
  }
}
</script>

<style scoped lang="scss">
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
  .tags-view-wrapper {
    .tags-view-item {
      .el-icon-close {
        width: 16px;
        height: 16px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        &:before {
          transform: scale(.6);
          display: inline-block;
          vertical-align: -3px;
        }
        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }
    }
  }
</style>
