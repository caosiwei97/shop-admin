<template>
  <button @click="$router.push({ path: '/', query: { id: 1 } })">to home</button>
  <button @click="handleClick">to login</button>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const handleClick = () => {
    router.push({ path: '/login', query: { id: 1 } })
  }
</script>
