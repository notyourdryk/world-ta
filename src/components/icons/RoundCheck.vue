<script setup lang="ts">
const { color = "#000000" } = defineProps({ color: String });
</script>

<template>
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_4545_151)">
      <circle cx="12" cy="12" r="12" :fill="color"/>
      <path d="M16.8 8.39996L10.2 15L7.19998 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_4545_151">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>

</template>
