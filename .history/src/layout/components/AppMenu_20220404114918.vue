<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="rgb(0,21,24)"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
    :collapse="$store.state.isCollapse"
  >
    <el-menu-item index="/">
      <el-icon><home-filled /> </el-icon>
      <template #title> 首页 </template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><goods-filled /> </el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        <template #title> 商品列表 </template>
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        <template #title> 商品分类 </template>
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        <template #title> 商品规格 </template>
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        <template #title> 商品评论 </template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><shopping-cart /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="2-1">
        <i class="el-icon-menu" />
        <template #title> 订单管理 </template>
      </el-menu-item>
      <el-menu-item index="2-2">
        <i class="el-icon-menu" />
        <template #title> 收银订单 </template>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon><promotion /></el-icon>
        <span>营销</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>设置</span>
      </template>
      <el-sub-menu index="/setting/permission">
        <template #title>
          <i class="el-icon-location" />
          <span>权限管理</span>
        </template>
        <el-menu-item index="/setting/permission/admin">
          <i class="el-icon-menu" />
          <template #title> 管理员 </template>
        </el-menu-item>
        <el-menu-item index="/setting/permission/role">
          <i class="el-icon-menu" />
          <template #title> 角色 </template>
        </el-menu-item>
        <el-menu-item index="/setting/permission/rule">
          <i class="el-icon-menu" />
          <template #title> 规则 </template>
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>维护</span>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
  import {
    Location,
    Setting,
    HomeFilled,
    GoodsFilled,
    ShoppingCart,
    Promotion
  } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: none;
  }

  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
