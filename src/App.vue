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
import TodoList from "@/components/TodoList/TodoList.vue";
import Modal from "@/components/Modal.vue";
import Alert from "@/components/Alert/Alert.vue";
import { itemDeleted } from "@/components/Alert/alerts.ts";

const todos = ref([
  {
    id: 0,
    title: "На согласование",
    color: "#FF99E9",
    items: [
      { id: 0, description: "Новая задача" },
      { id: 1, description: "Описать правила поведения интерфейса" },
      {
        id: 2,
        description:
          "Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца",
      },
      {
        id: 3,
        description:
          "Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца",
      },
      {
        id: 4,
        description:
          "Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца",
      },
    ],
  },
  {
    id: 1,
    title: "Новые",
    color: "#66B8FF",
    items: [
      {
        id: 5,
        description:
          "Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца",
      },
    ],
  },
  {
    id: 2,
    title: "В процессе",
    color: "#FFD466",
    items: [],
  },
  {
    id: 3,
    title: "Готово",
    color: "#53C666",
    items: [],
  },
  {
    id: 4,
    title: "Доработать",
    color: "#F76E85",
    items: [],
  },
]);
const isModalOpen = ref(false);
const modalBody = ref("Example");
const itemForDelete = ref(null);
const listForUpdate = ref(null);
const showModal = (listId, item) => {
  isModalOpen.value = true;
  modalBody.value = item.description;
  itemForDelete.value = item.id;
  listForUpdate.value = listId;
};
const deleteItem = () => {
  const list = todos.value.find(({ id }) => id === listForUpdate.value);
  const itemIndex = list.items.findIndex(({ id }) => id === itemForDelete.value);
  itemDeleted(list.items[itemIndex].description);
  list.items.splice(itemIndex, 1);
  hideModal();
}
const hideModal = () => isModalOpen.value = false;
</script>

<template>
  <TodoList v-for="(list, index) in todos" :list="list" :key="index" @delete-item="showModal" />
  <Modal :open="isModalOpen" @close="hideModal" @ok="deleteItem" @cancel="hideModal">
    {{ modalBody }}
  </Modal>
  <Alert message="" type=""/>
</template>
