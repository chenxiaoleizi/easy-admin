<template>
  <span>
    <a-button
      v-for="(action, i) in actions"
      :key="i"
      @click="handleClick(action)"
      >{{ action.label }}</a-button
    >
  </span>
</template>

<script setup lang="ts">
type Action = {
  label: string;
  name: string;
};

defineProps<{
  actions: Action[];
}>();
const emit = defineEmits(["clickAction"]);

function handleClick(action: Action) {
  emit("clickAction", action);
}
</script>
