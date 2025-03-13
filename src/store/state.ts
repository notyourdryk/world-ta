import { defineStore } from "pinia";
import type { TodoList } from "@/types.ts";
import { actions } from "@/store/actions.ts";
import { getters } from "@/store/getters.ts";

const initialState = [];
export const useStore = defineStore<Array<TodoList>>("todos", {
  state: () => initialState,
  actions,
  getters
});

