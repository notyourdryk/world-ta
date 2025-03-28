import type { TodoList } from "@/types.ts";
import { type Ref, ref } from "vue";

export const store: Ref<Array<TodoList>> = ref([
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

