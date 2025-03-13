<script setup lang="ts">
/**
 * TODOS:
 * - TempItem
 * ----
 * - What to do with state? Move to store.
 * - Code cleanup
 * - fonts
 * - responsive ui
 */
import { ref } from "vue";
import { TodoList, Modal, Alert } from "@/components";
import { itemDeleted } from "@/components/Alert/alerts.ts";
import type { TodoItem, TodoList as TodoListType } from "@/types.ts";
import { store } from "@/store";

const todos = store;
const isModalOpen = ref(false);
const modalBody = ref("Example");
const itemForDelete = ref<TodoItem["id"] | null>(null);
const listForUpdate = ref<TodoListType["id"] | null>(null);
const showModal = (listId: TodoListType["id"], item: TodoItem) => {
  isModalOpen.value = true;
  modalBody.value = item.description;
  itemForDelete.value = item.id;
  listForUpdate.value = listId;
};
const deleteItem = () => {
  const list = todos.value.find(({ id }) => id === listForUpdate.value);
  if (!list)
    throw new Error(`List with id: ${listForUpdate.value} not found`);
  const itemIndex = list.items.findIndex(({ id }) => id === itemForDelete.value);
  if (itemIndex < 0)
    throw new Error(`item with id: ${itemForDelete.value} not found`);
  itemDeleted(list.items[itemIndex].description);
  list.items.splice(itemIndex, 1);
  hideModal();
};
const hideModal = () => (isModalOpen.value = false);
</script>

<template>
  <TodoList v-for="(list, index) in todos" :list="list" :key="index" @delete-item="showModal" />
  <Modal :open="isModalOpen" @close="hideModal" @ok="deleteItem" @cancel="hideModal">
    {{ modalBody }}
  </Modal>
  <Alert message="" type="" />
</template>
