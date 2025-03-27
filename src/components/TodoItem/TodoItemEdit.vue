<script setup lang="ts">
import "./TodoItem.style.css";
import { Xmark, Check } from "@/components/icons";
import { onMounted, ref, useTemplateRef } from "vue";
import autosize from "autosize";

const { description } = defineProps({
  description: String,
  cancel: Function,
  save: Function,
});
const value = ref(description);
const inputRef = useTemplateRef("textarea");
defineEmits(["save", "cancel"]);
onMounted(() => inputRef.value && inputRef.value.focus());
onMounted(() => inputRef.value && autosize(inputRef.value));
</script>

<template>
  <div class="todo-card todo-card--edit">
    <textarea ref="textarea" v-model="value" class="todo-card__textarea"></textarea>
    <div class="todo-card__buttons">
      <Xmark color="#F53D5C" @click="$emit('cancel')" />
      <Check color="#22C33D" @click="$emit('save', value)" />
    </div>
  </div>
</template>

<style scoped>
.todo-card__textarea {
  border: none;
  outline: none;
  min-height: 2em;
  resize: none;
  height: 100%;
  width: 100%;
}
</style>
