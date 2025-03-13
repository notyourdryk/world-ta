import type { TodoItem, TodoList } from "@/types.ts";

export const getters = {
  getTodoById: (listId: TodoList.id): TodoList => state.find(({ id }) => id === listId),
  getItem: (listId: TodoList.id, itemId: TodoItem.id): TodoItem => {
    const list = state.find(({ id }) => id === listId);

    return list.items.find(({ id }) => id === itemId);
  }
};
