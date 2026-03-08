import { useState } from "react";

type TodoFormsProps = {
  addTodo: (text: string, category: string) => void;
};

const TodoForms = ({ addTodo }: TodoFormsProps) => {
  const [value, setValeue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValeue("");
    setCategory("");
    console.log("Tarefa:", value, "Categoria:", category);
  };
  return (
    <div className="todo-forms">
      <h2>Adicionar nova tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a tarefa"
          value={value}
          onChange={(e) => setValeue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForms;
