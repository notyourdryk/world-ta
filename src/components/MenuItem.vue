<template>
  <div class="menu-item">
    <slot />
  </div>
</template>
<style scoped>
.menu-item {
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.menu-item:hover {
  background-color: #E1F1FF;
}
</style>
