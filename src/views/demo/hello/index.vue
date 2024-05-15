<template>
  <div class="demo-hello">
    <a-card style="height: 100%">
      <a-form layout="inline">
        <a-form-item label="名称">
          <a-input>输入</a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">确定</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .demo-hello {
    height: 100%;
    padding: 20px 20px 0;
  }
</style>
