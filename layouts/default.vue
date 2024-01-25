<template>
    <a-layout style="min-height: 100vh">
      <SiderMenu/>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>User</a-breadcrumb-item>
            <a-breadcrumb-item>Bill</a-breadcrumb-item>
          </a-breadcrumb>
          <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            Bill is a cat.
          </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Apprentics ©2018 Recherche alternance & stage
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </template>
  <script lang="ts" setup>

  import { ref } from 'vue';
  const collapsed = ref<boolean>(false);
  const selectedKeys = ref<string[]>(['1']);
  </script>
  <style scoped>
  #components-layout-demo-side .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .site-layout .site-layout-background {
    background: #fff;
  }
  [data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
  }
  </style>