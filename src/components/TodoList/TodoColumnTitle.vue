<script setup lang="ts">
import "./TodoColumnTitle.style.css";

const { color, title } = defineProps(["color", "title"]);
</script>
<template>
  <div class="todo-column__title text-center" :style="{ background: color }">{{ title }}</div>
</template>
