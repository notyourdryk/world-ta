export type Tag = string;

export type TodoItem = {
  id: number | string;
  description: string;
  tags: Array<Tag>;
};

export type TodoList = {
  id: number | string;
  items: Array<TodoItem>;
  title: string;
  tags: Array<Tag>;
  color: string;
};

export type Alert = {
  id: number | string;
  message: string;
  title: string;
  type: string;
}
