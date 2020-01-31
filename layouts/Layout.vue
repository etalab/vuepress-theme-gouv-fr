<template>
  <ParentLayout>
    <template #sidebar-top v-if="sidebarTitle">
      <h2 class="sidebar-title" v-text="sidebarTitle" />
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout,
  },
  computed: {
    sidebarTitle: () => {
      for (let [group, title] of Object.entries(this.$site.themeConfig.sidebarTitles || {})) {
        if (this.$page.path.startsWith(group)) {
          return title
        }
      }
    }
  }
}
</script>
<style lang="stylus">
.sidebar-title
  padding-left 1.25rem
  padding-bottom 0
</style>
