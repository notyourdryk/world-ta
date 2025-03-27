<script setup lang="ts">
import "./TodoItem.style.css";
import TodoCardEdit from "@/components/TodoItem/TodoItemEdit.vue";
import MenuItem from "@/components/MenuItem.vue";
import Menu from "@/components/Menu.vue";
import { Tippy } from "vue-tippy";
import { Trash, Edit, Elipsis } from "@/components/icons";

defineProps(["description", "edit"]);
defineEmits(["edited", "click", "change", "delete", "edit"]);
</script>
<template>
  <div>
    <TodoCardEdit
      v-if="edit"
      @cancel="$emit('edited')"
      @save="(value) => $emit('change', value)"
      :description="description"
    />
    <div v-if="!edit" class="todo-card">
      <div class="todo-card__description">{{ description }}</div>
      <Tippy
        style="height: 20px"
        transition="0"
        placement="right-start"
        interactive
        :append-to="(ref) => ref.parentNode?.parentNode as Element"
      >
        <Elipsis color="#86949E" class="todo-card__details" />
        <template #content>
          <Menu>
            <MenuItem @click="$emit('edit')">
              <Edit color="#86949E" />
              Редактировать
            </MenuItem>
            <MenuItem @click="$emit('delete')">
              <Trash color="#86949E" />
              Удалить
            </MenuItem>
          </Menu>
        </template>
      </Tippy>
    </div>
  </div>
</template>

<style scoped>
.todo-card__details:hover {
  stroke: #3d86f4;
}
</style>
