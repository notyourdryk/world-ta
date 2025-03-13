<script setup lang="ts">
</script>
<template>
  <div class="menu">
    <slot />
  </div>
</template>
<style scoped>
.menu {
  box-sizing: border-box;
  padding: 8px 0;
  background: white;
  display: flex;
  border: 1px solid #e3e5e8;
  flex-direction: column;
}
</style>
