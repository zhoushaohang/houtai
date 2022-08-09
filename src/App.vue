<template>
    <div id="app">
      <component :is="layout">
        <router-view></router-view>
      </component>
    </div>
</template>
<script>
import DefaultLayout from '../src/layouts/Default'
import FullScreenLayout from '../src/layouts/FullScreen'
export default {
  name: 'App',
  components: {
      DefaultLayout,
      FullScreenLayout,
  },
  computed: {
    layout () {
      if ( this.$route.path === '../src/layouts/Default') {
        return 'full-screen-layout'
      }
      return `${(this.$route.meta.layout || 'default')}-layout`
    },
  },
}
</script>