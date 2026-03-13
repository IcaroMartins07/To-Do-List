import type { TodoType } from "@/types/todoType";
import { useEffect, useState } from "react";

//axios
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "@/services/todoServices";

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [loading, setLoading] = useState(false);

  //função para carregar os dados da API
  useEffect(() => {
    async function loadTodos() {
      try {
        setLoading(true);

        const data = await getTodos();
        setTodos(data);
      } catch (error) {
        console.error("Erro ao carregar todos", error);
      } finally {
        setLoading(false);
      }
    }

    loadTodos();
  }, []);

  const addTodo = async (text: string, category: string) => {
    const newTodo: TodoType = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    };

    const createdTodo = await createTodo(newTodo);
    setTodos((prev) => [...prev, createdTodo]);
  };

  const removeTodo = async (id: number) => {
    await deleteTodo(id);

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completeTodo = async (id: number) => {
    const todo = todos.find((t) => t.id === id);

    if (!todo) return;

    const updated = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    await updateTodo(updated);

    setTodos((prev) => prev.map((t) => (t.id === id ? updated : t)));
  };

  return {
    todos,
    addTodo,
    removeTodo,
    completeTodo,
  };
};
