export interface ToDo {
  id: string;
  title: string;
}

export interface Column {
  id: number;
  title: string;
  todos: ToDo[];
}
