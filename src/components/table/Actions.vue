<template>
  <span>
    <template v-for="(action, i) in actions" :key="i">
      <a-button type="link" @click="handleClick(action)">
        {{ action.label }}
      </a-button>
      <a-divider v-if="i !== actions.length - 1" type="vertical" />
    </template>
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
