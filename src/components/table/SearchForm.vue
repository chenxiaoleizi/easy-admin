<template>
  <div class="search-form">
    <a-form layout="inline">
      <a-form-item
        v-for="item in searchConfig"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
        <component :is="item.type" v-bind="item.props"></component>
      </a-form-item>
    </a-form>

    <a-space>
      <a-button type="primary">搜索</a-button>
      <a-button>重置</a-button>
    </a-space>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  searchConfig: any[];
}>();
</script>

<style scoped>
.search-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
