<script setup lang="ts">
import draggable from "vuedraggable";
import "./TodoList.style.css";
import TodoColumnTitle from "@/components/TodoList/TodoColumnTitle.vue";
import TodoItem from "@/components/TodoItem/TodoItem.vue";
import { ref } from "vue";
import AddItemButton from "@/components/AddItemButton.vue";
import { itemAdded, itemMoved } from "@/components/Alert/alerts.ts";
import { type TodoItem as TodoItemType } from "@/types.ts";

defineEmits(["delete-item"]);
const props = defineProps(["list"]);
const { title, items, color, id } = props.list;
const editItemId = ref<TodoItemType["id"] | null>(null);
const setEditItemId = (itemId: TodoItemType["id"] | null) => {
  editItemId.value = itemId;
};
const tempItem = ref<TodoItemType | null>(null);

const removeAdding = () => tempItem.value = null;
const addTodoItem = () => {
  tempItem.value = {
    id: crypto.randomUUID(),
    description: "",
  };
};
const createItem = (description: TodoItemType["description"]) => {
  if (!tempItem.value)
    return;

  items.push({
    ...tempItem.value,
    description
  });
  itemAdded(title, description);
  tempItem.value = null;
}
const saveChanges = (value: TodoItemType["description"]) => {
  const item = items.find(({ id }: TodoItemType) => id === editItemId.value);
  item.description = value;
  setEditItemId(null);
};
const onChange = (ev: any) => {
  if (ev.added) {
    itemMoved(title, ev.added.element.description);
  }
}
</script>

<template>
  <div class="todo-list__wrapper">
    <TodoColumnTitle :color="color" :title="title" />
    <div class="todo-list">
      <draggable :list="items" group="todos" item-key="id" @change="onChange">
        <template #item="{ element }">
          <TodoItem
            :edit="editItemId === element.id"
            :description="element.description"
            @edit="setEditItemId(element.id)"
            @delete="$emit('delete-item', id, element)"
            @edited="setEditItemId(null)"
            @change="(value) => saveChanges(value)"
          />
        </template>
      </draggable>
      <TodoItem v-if="tempItem"
                :edit="true"
                :description="''"
                @edited="removeAdding"
                @change="createItem" />
      <div v-if="!editItemId" class="todo-list__item">
        <AddItemButton @click="addTodoItem" />
      </div>
    </div>
  </div>
</template>
