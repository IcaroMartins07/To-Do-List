import {
  CompleteButton,
  Paragraph,
  RemoveButton,
  TodoContainer,
} from "@/pages/HomePage/styles";
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
    <TodoContainer isCompleted={todo.isCompleted}>
      <div className="contet">
        <Paragraph>{todo.text}</Paragraph>
        <Paragraph className="category">({todo.category})</Paragraph>
      </div>
      <div>
        <CompleteButton onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? "Desfazer" : "Completar"}
        </CompleteButton>
        <RemoveButton className="remove" onClick={() => removeTodo(todo.id)}>
          x
        </RemoveButton>
      </div>
    </TodoContainer>
  );
};

export default Todo;
