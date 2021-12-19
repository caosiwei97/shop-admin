<template>
  <page-container>
    <app-card>
      <template #header>权限规则</template>
      <el-form :inline="true" :model="listParams" @submit.prevent="handleQuery" ref="form">
        <el-form-item label="规则状态">
          <el-select v-model="listParams.is_show" placeholder="请选择" clearable>
            <el-option label="全部" value=""></el-option>
            <el-option label="显示" :value="1"></el-option>
            <el-option label="不显示" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="按钮名称">
          <el-input v-model="listParams.keyword" clearable placeholder="请输入按钮名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button native-type="submit" type="primary" :loading="listLoading">
            查询
            <el-icon>
              <search />
            </el-icon>
          </el-button>
        </el-form-item>
      </el-form>
    </app-card>
    <app-card>
      <template #header>
        <el-button type="primary" @click="formVisible = true">
          添加规则
          <el-icon><plus /></el-icon>
        </el-button>
      </template>
      <el-table :data="list" v-loading="listLoading" row-key="id">
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="名称" prop="menu_name"></el-table-column>
        <el-table-column label="接口路径">
          <template #default="{ row }">
            {{ row.api_url ? `[${row.methods}] ${row.api_url}` : '' }}
          </template>
        </el-table-column>
        <el-table-column label="前端权限" prop="unique_auth"></el-table-column>
        <el-table-column label="页面路由" prop="menu_path"></el-table-column>
        <el-table-column label="状态">
          <template #default="{ row }">
            <el-switch
              v-model="row.is_show"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="1"
              :inactive-value="0"
              :loading="row.statusLoading"
              @change="handleStatusChange(row)"
            />
          </template>
        </el-table-column>
        <el-table-column label="操作" min-width="100">
          <template #default="{ row }">
            <el-button type="text" @click="handleCreate(row.id)">
              {{ row.pid ? '添加规则' : '添加子菜单' }}
            </el-button>
            <el-button type="text" @click="handleUpdate(row.id)"> 编辑 </el-button>
            <el-popconfirm title="确认删除吗？" @confirm="handleDelete(row.id)">
              <template #reference>
                <el-button type="text"> 删除 </el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </app-card>
  </page-container>
  <rule-form
    v-model="formVisible"
    v-model:rule-id="ruleId"
    v-model:pid="pid"
    @success="handleFormSuccess"
  />
</template>

<script lang="ts" setup>
  import { IListParams, Menu } from '@/api/types/menu'
  import { onMounted, reactive, ref } from 'vue-demi'
  import { Search, Plus } from '@element-plus/icons'
  import { deleteMenu, getMenus, updateMenuSatus } from '@/api/menu'
  import { ElMessage } from 'element-plus'
  import RuleForm from './RuleForm.vue'

  const listParams = reactive<IListParams>({
    is_show: '' as IListParams['is_show'],
    keyword: ''
  })
  const formVisible = ref(false)
  const ruleId = ref<number | null>(null)
  const pid = ref<number | null>(null)
  const form = ref(null)
  const list = ref<Menu[]>([])
  const listLoading = ref(false)

  onMounted(() => {
    loadMenus()
  })

  const loadMenus = async () => {
    listLoading.value = true
    const data = await getMenus(listParams).finally(() => {
      listLoading.value = false
    })
    data.forEach((item) => (item.statusLoading = false))
    list.value = data
  }

  const handleQuery = async () => {
    loadMenus()
  }

  const handleStatusChange = async (row: Menu) => {
    row.statusLoading = true
    await updateMenuSatus(row.id, row.is_show).finally(() => {
      row.statusLoading = false
    })
    ElMessage.success(`${row.is_show === 1 ? '启用' : '禁用'}成功`)
  }

  const handleCreate = (id: number) => {
    pid.value = id
    formVisible.value = true
  }
  const handleUpdate = (id: number) => {
    ruleId.value = id
    formVisible.value = true
  }
  const handleDelete = async (id: number) => {
    await deleteMenu(id)
    ElMessage.success('删除成功')
    loadMenus()
  }

  const handleFormSuccess = () => {
    formVisible.value = false
    loadMenus()
  }
</script>

<style lang="scss">
  .el-icon {
    margin-right: unset;
  }
</style>
