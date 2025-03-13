<script setup lang="ts">
import Xmark from "@/components/icons/Xmark.vue";

defineEmits(["close", "ok", "cancel"]);
const { open = false, body } = defineProps(["open", "body"]);
</script>
<template>
  <Teleport to="#app">
    <div v-if="open" class="modal__wrapper">
      <div class="modal">
        <div class="modal__header">
          Удалить задачу?
          <div class="modal__close-button">
            <Xmark color="#86949E" @click.stop="$emit('close')"/>
          </div>
        </div>
        <div class="modal__body">
          <slot />
        </div>
        <div class="modal__footer">
          <button class="button" @click.stop="$emit('ok')">Удалить</button>
          <button class="button" @click.stop="$emit('cancel')">Отменить</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<style scoped>
.button {
  width: 206px;
  height: 36px;
  border-radius: 8px;
  background: none;
  border: 1px solid #C4CAD4;
  cursor: pointer;
}
.modal__close-button {
  margin: -14px -24px 0 0;
  cursor: pointer;
}
.modal__header {
  display: flex;
  justify-content: space-between;
}
.modal__body {
  flex: 1;
  margin: 24px 0;
}
.modal__footer {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.modal {
  display: flex;
  background: white;
  position: relative;
  flex-direction: column;
  margin: 0 auto 0;
  min-height: 196px;
  width: 500px;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 24px 40px 40px;
  border-radius: 8px;
}
.modal__wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}
</style>
