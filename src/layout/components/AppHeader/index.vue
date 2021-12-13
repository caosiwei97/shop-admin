<template>
  <el-space>
    <toggle-sidebar></toggle-sidebar>
    <BreadcrumbVue></BreadcrumbVue>
  </el-space>
  <el-space>
    <full-screen></full-screen>
    <user-info></user-info>
  </el-space>
</template>

<script setup lang="ts">
  import BreadcrumbVue from './Breadcrumb.vue'
  import FullScreen from './FullScreen.vue'
  import ToggleSidebar from './ToggleSidebar.vue'
  import UserInfo from './UserInfo.vue'

  const childMethod = () => {
    console.log('child')
  }

  defineExpose({
    childMethod
  })
</script>

<style lang="scss" scoped>
  ::v-deep(.el-space__item) {
    display: flex;
    align-items: center;
  }
</style>
