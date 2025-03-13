import type { TodoItem, TodoList } from "@/types.ts";

export const actions = {
  addItem: (listId: TodoList.id, itemDescription: TodoItem.description) => {
    const newItem = {
      id: crypto.randomUUID(),
      description: itemDescription,
    }
    const list = this.find(({ id }) => id === listId);
    list.items.push(newItem);
  },
  deleteItem: (listId: TodoList.id, itemId: TodoItem.id) => {
    const list = this.find(({ id }) => id === listId);
    const itemIndex = list.items.findIndex(({ id }) => id === itemId);
    list.items.spice(itemIndex, 1);
  },
  updateItem: (listId: TodoList.id, itemId: TodoItem.id, changes: Partial<TodoItem>) => {
    const list = this.find(({ id }) => id === listId);
    const item = list.items.find(({ id }) => id === itemId);

    item.description = changes.description;
  },
}
