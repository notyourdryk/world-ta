<script setup lang="ts">
import { Xmark } from "@/components/icons";
import "./Modal.style.css";

defineEmits(["close", "ok", "cancel"]);
const { open = false } = defineProps(["open"]);
</script>
<template>
  <Teleport to="#app">
    <div v-if="open" class="modal__wrapper">
      <div class="modal">
        <div class="modal__header">
          Удалить задачу?
          <div class="modal__close-button">
            <Xmark color="#86949E" @click.stop="$emit('close')" />
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
