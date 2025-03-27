<script setup lang="ts">
import { Xmark, RoundCheck } from "@/components/icons";
import { alertStore, deleteAlert } from "@/components/Alert/store.ts";

const stack = alertStore;
</script>
<template>
  <div class="alert-stack">
    <div class="alert" v-for="message in stack.slice(-3).reverse()" :key="message.id">
      <div class="alert__type">
        <RoundCheck color="#22c33d" />
      </div>
      <div class="alert__body">
        <b>{{ message.title }}</b>
        {{ message.text }}
      </div>
      <div class="alert__close" @click="() => deleteAlert(message.id)">
        <Xmark color="#86949E" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.alert-stack {
  display: flex;
  position: fixed;
  bottom: 24px;
  right: 24px;
  flex-direction: column;
  gap: 30px;
}

.alert {
  padding: 16px;
  box-sizing: border-box;
  border-left: 8px solid #22c33d;
  display: flex;
  background: white;
  gap: 16px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  width: 400px;
  min-height: 76px;
  justify-content: space-between;
}
.alert__type {
  width: 24px;
}
.alert__body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.alert__close {
  margin: -8px -8px 0 0;
  display: flex;
  cursor: pointer;
}
</style>
