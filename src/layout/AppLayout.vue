<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <app-menu></app-menu>
      </el-aside>
      <el-container>
        <el-header id="header">
          <app-header ref="header"></app-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import AppMenu from './components/AppMenu.vue'
  import AppHeader from './components/AppHeader/index.vue'
  import { onMounted, ref } from 'vue-demi'

  const header = ref(null)

  onMounted(() => {
    console.log(header.value)
  })
</script>

<style>
  .el-header {
    background-color: #fff;
    color: var(--el-text-color-primary);
    display: flex;
    justify-content: space-between;
  }
  #header {
    height: 60px;
    line-height: 60px;
  }

  .el-aside {
    background-color: rgb(0, 21, 24);
    color: var(--el-text-color-primary);
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
  }

  .el-container {
    height: 100vh;
  }
</style>
