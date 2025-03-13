<template>
  <button class="button">
    <Plus />&nbsp;Добавить
  </button>
</template>

<style scoped>
.button {
  margin-top: 8px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #3D86F4;
  stroke: #3D86F4;
}
</style>
<script setup lang="ts">
import Plus from "@/components/icons/Plus.vue";
</script>
