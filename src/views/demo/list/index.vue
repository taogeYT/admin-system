<script setup lang="ts">
  import { reactive } from 'vue';

  const formData = reactive({
    username: '',
    phone: '',
    status: '',
  });
</script>

<template>
  <div class="container">
    <Breadcrumb :items="['menu.demo', 'menu.demo.list']" />
    <a-card title="列表页面" hoverable>
      <a-row>
        <a-col flex="1">
          <a-form :model="formData" auto-label-width>
            <a-row :gutter="16" justify="center" align="center">
              <a-col flex="2">
                <a-form-item field="username" label="用户名称">
                  <a-input
                    v-model="formData.username"
                    placeholder="请输入用户名"
                  />
                </a-form-item>
              </a-col>
              <a-col flex="2">
                <a-form-item field="phone" label="手机">
                  <a-input
                    v-model="formData.phone"
                    placeholder="请输入手机号"
                  />
                </a-form-item>
              </a-col>
              <a-col flex="2">
                <a-form-item field="status" label="状态">
                  <a-input v-model="formData.status" placeholder="全部" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-col flex="56px">
          <div style="gap: 16px; display: flex; margin-left: 16px">
            <a-button type="primary">查询</a-button>
            <a-button type="secondary">重置</a-button>
          </div>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<style scoped lang="less">
  .container {
    padding: 0 20px 20px 20px;
  }
</style>
