import {
  Button,
  Input,
  Select,
  Subtitle,
  TodoForm,
} from "@/pages/HomePage/styles.ts";
import { useState } from "react";

type TodoFormsProps = {
  addTodo: (text: string, category: string) => void;
};

const TodoForms = ({ addTodo }: TodoFormsProps) => {
  const [value, setValeue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValeue("");
    setCategory("");
    console.log("Tarefa:", value, "Categoria:", category);
  };

  return (
    <TodoForm>
      <Subtitle>Adicionar nova tarefa</Subtitle>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite a tarefa"
          value={value}
          onChange={(e) => setValeue(e.target.value)}
        />
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </Select>
        <Button type="submit">Criar Tarefa</Button>
      </form>
    </TodoForm>
  );
};

export default TodoForms;
