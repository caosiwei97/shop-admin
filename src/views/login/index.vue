<template>
  <div> login </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
  console.log('login参数：', route.query)
</script>

<style scoped></style>
