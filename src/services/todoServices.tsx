import type { TodoType } from "@/types/todoType";

export const filterTodos = (todos: TodoType[], filter: string) => {
  if (filter === "completed") {
    return todos.filter((todo) => todo.isCompleted);
  }

  if (filter === "incomplete") {
    return todos.filter((todo) => !todo.isCompleted);
  }

  return todos;
};

export const searchTodos = (todos: TodoType[], search: string) => {
  return todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );
};

export const sortTodos = (todos: TodoType[], order: string) => {
  return [...todos].sort((a, b) => {
    if (order === "a-z") {
      return a.text.localeCompare(b.text);
    }

    if (order === "z-a") {
      return b.text.localeCompare(a.text);
    }

    return 0;
  });
};