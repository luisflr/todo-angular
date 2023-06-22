import { Column } from "@models/todo.model";

export const columns: Column[] = [
  {
    id: 1,
    title: 'Todo',
    todos: [
      {
        id: '1',
        title: 'Desayunar'
      },
      {
        id: '2',
        title: 'Trabajar'
      }
    ]
  },
  {
    id: 2,
    title: 'Doing',
    todos: [
      {
        id: '1',
        title: 'Bañarme'
      },
    ]
  },
  {
    id: 3,
    title: 'Done',
    todos: [
      {
        id: '1',
        title: 'Despertar'
      },
      {
        id: '2',
        title: 'Levantarme'
      },
      {
        id: '3',
        title: 'Ver Tik toks '
      },
    ]
  }
]
