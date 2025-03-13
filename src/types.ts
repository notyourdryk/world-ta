export type Tag = string;

export type TodoItem = {
  id: number | string;
  description: string;
};

export type TodoList = {
  id: number | string;
  items: Array<TodoItem>;
  title: string;
  color: string;
};

export type Alert = {
  id: number | string;
  text: string;
  title: string;
}
