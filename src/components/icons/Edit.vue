<script setup lang="ts">
const { color = "#000000" } = defineProps(["color"]);
</script>

<template>
  <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.33334 18.3333H15.5M11.3333 1.66667L14.6667 5.00001L5.50001 14.1667H2.16668V10.8333L11.3333 1.66667Z" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>
