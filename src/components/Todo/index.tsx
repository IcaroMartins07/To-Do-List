import type { TodoType } from "@/types/todoType";

const Todo = ({
  todo,
  removeTodo,
  completeTodo,
}: {
  todo: TodoType;
  removeTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
    >
      <div className="contet">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button
          className={todo.isCompleted ? "complete.undo" : "complete"}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.isCompleted ? "Desfazer" : "Completar"}
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;
