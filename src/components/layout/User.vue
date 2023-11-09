<template>
  <div>
    <a-avatar :size="32"></a-avatar>
    <a-dropdown>
      <span class="user-name">
        陈磊
        <DownOutlined></DownOutlined>
      </span>
      <template #overlay>
        <a-menu>
          <a-menu-item>修改密码</a-menu-item>
          <a-menu-item @click="userStore.logout">退出</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { DownOutlined } from "@ant-design/icons-vue";
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
</script>

<style scoped>
.user-name {
  cursor: pointer;
}
</style>
