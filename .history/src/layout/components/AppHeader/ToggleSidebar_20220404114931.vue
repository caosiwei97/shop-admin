<template>
  <el-icon @click="handleCollapse" :size="20">
    <fold v-show="!isCollapse"></fold>
    <expand v-show="isCollapse"></expand>
  </el-icon>
</template>

<script lang="ts" setup>
  import { useStore } from '@/store'
  import { computed } from 'vue'
  import { Fold, Expand } from '@element-plus/icons-vue'

  const store = useStore()

  const isCollapse = computed(() => {
    return store.state.isCollapse
  })

  const handleCollapse = () => {
    store.commit('setIsCollapse', !store.state.isCollapse)
  }
</script>

<style>
  .el-icon {
    margin-right: 20px;
  }
</style>
