<template>
  <button @click="$router.push({ path: '/', query: { id: 1 } })">to home</button>
  <button @click="handleClick">to login</button>
  <router-view></router-view>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { onMounted } from '@vue/runtime-core'
  import { getLoginInfo } from '@/api/common'

  const router = useRouter()
  const handleClick = () => {
    router.push({ path: '/login', query: { id: 1 } })
  }

  onMounted(() => {
    getLoginInfo().then((res) => {
      console.log(res.data.login_logo)
    })
  })
</script>
