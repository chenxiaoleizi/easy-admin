<template>
  <a-breadcrumb :routes="routes">
    <template #itemRender="{ route, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="`${paths.join('/')}`">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const routes = computed(() => {
  console.log(route.matched);
  return route.matched.map((item) => {
    return {
      path: item.path,
      breadcrumbName: item.meta?.label,
      key: item.name
    };
  });
});
</script>
