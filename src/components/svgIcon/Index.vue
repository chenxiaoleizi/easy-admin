<template>
  <Icon class="icon">
    <template #component>
      <slot>
        <img :src="src" alt="" />
      </slot>
    </template>
  </Icon>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Icon from "@ant-design/icons-vue";

const props = defineProps<{
  name: string;
}>();

const src = computed(() => `/src/assets/icons/${props.name}.svg`);
</script>

<style scoped>
.icon {
  font-size: 1em;
}
</style>
