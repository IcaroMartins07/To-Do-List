import { useState } from "react";

import Filter from "@/components/Filter";
import Search from "@/components/Search";
import Todo from "@/components/Todo";
import TodoForms from "@/components/TodoForms";

import { useTodos } from "@/hooks/useTodos";

import { filterTodos, searchTodos, sortTodos } from "@/services/todoServices";

import "@/pages/HomePage/styles.css";
import "@/styles/global.css";

const HomePage = () => {
  const { todos, addTodo, removeTodo, completeTodo } = useTodos();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [order, setOrder] = useState("a-z");

  const filteredTodos = sortTodos(
    searchTodos(filterTodos(todos, filter), search),
    order,
  );

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <Search search={search} setSearch={setSearch} />

      <Filter
        filter={filter}
        setFilter={setFilter}
        order={order}
        setOrder={setOrder}
      />

      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>

      <TodoForms addTodo={addTodo} />
    </div>
  );
};

export default HomePage;
