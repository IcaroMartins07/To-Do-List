import { useState } from "react";

import Filter from "@/components/Filter";
import Search from "@/components/Search";
import Todo from "@/components/Todo";
import TodoForms from "@/components/TodoForms";

import { useTodos } from "@/hooks/useTodos";

import { filterTodos, searchTodos, sortTodos } from "@/services/todoServices";

import { AppContainer, Separator, Title } from "./styles";

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
    <AppContainer>
      <Title>Lista de Tarefas</Title>
      
      <Search search={search} setSearch={setSearch} />

      <Filter
        filter={filter}
        setFilter={setFilter}
        order={order}
        setOrder={setOrder}
      />

      <Separator>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </Separator>

      <TodoForms addTodo={addTodo} />
    </AppContainer>
  );
};

export default HomePage;
