<template>
  <el-button @click="$router.push({ path: '/', query: { id: 1 } })" type="primary"
    >to home</el-button
  >
  <el-button @click="handleClick" size="large">to login</el-button>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { onMounted } from '@vue/runtime-core'
  import { getLoginInfo } from '@/api/common'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  import { ElConfigProvider } from 'element-plus'

  const router = useRouter()
  const handleClick = () => {
    router.push({ path: '/login', query: { id: 1 } })
  }

  onMounted(() => {
    getLoginInfo().then((res) => {
      console.log(res.data.login_logo)
    })
  })

  const locale = zhCn
</script>
