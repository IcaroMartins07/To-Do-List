import { api } from "@/services/api";
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
    todo.text.toLowerCase().includes(search.toLowerCase()),
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

// função para buscar os dados da API
export async function getTodos() {
  try {
    const response = await api.get("/todos");
    return response.data.map((todo: any) => ({
      //convertendo os dados da API para o formato do TodoType
      id: todo.id,
      text: todo.title,
      isCompleted: todo.completed,
    }));
  } catch (error) {
    console.error("Erro ao buscar todos", error);
    return [];
  }
}

//função para criar um novo todo
export async function createTodo(todo: TodoType) {
  const response = await api.post("/todos", todo);
  return response.data;
}

//função para deletar um todo
export async function deleteTodo(id: number) {
  await api.delete(`/todos/${id}`);
}

//função para atualizar um todo
export async function updateTodo(todo: TodoType) {
  //verificando se o todo tem um id válido
  if (!todo?.id) {
    throw new Error("Todo inválido");
  }

  const response = await api.put(`/todos/${todo.id}`, todo);
  return response.data;
}
