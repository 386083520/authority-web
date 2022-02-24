<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'
export default {
  name: 'AppLink',
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  },
  computed: {
    isExternal () {
      return isExternal(this.to)
    },
    type () {
      if (this.isExternal) {
        return 'a'
      }
      return 'router-link'
    }
  },
  methods: {
    linkProps (to) {
      if (this.isExternal) {
        return {
        }
      }
      return {
        to: to
      }
    }
  }
}
</script>

<style scoped>

</style>
