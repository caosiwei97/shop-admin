<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }" v-for="(item, index) of matchedRoutes" :key="index">{{
      item.meta.title
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  import { computed } from 'vue-demi'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const matchedRoutes = computed(() => route.matched.filter((route) => route.meta.title))
</script>
