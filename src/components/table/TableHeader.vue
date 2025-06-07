<template>
  <div class="easy-table-header">
    <span class="left">
      <slot name="left"></slot>
    </span>
    <span>
      <slot name="right"></slot>
    </span>
  </div>
</template>

<style scoped>
.easy-table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 20px 8px;
}
.easy-table-header .left {
  font-weight: 500;
  font-size: 16px;
}
</style>
