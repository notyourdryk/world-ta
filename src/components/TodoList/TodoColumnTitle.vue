<script setup lang="ts">
import "./todo-column-title.style.css";

const { color, title } = defineProps(["color", "title"]);
</script>
<template>
  <div class="todo-column__title" :style="{ background: color }">{{ title }}</div>
</template>
