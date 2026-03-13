import styled from "styled-components";

export const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  background-color: #efefef;
  margin: 8vh auto;
  padding: 20px 30px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Subtitle = styled.h2`
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  margin: 10px 0;
`;

export const TodoForm = styled.div`
  padding-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

export const Separator = styled.div`
  margin: 30px 0 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #555;
`;

type TodoContainerProps = {
  isCompleted: boolean;
};

export const TodoContainer = styled.div<TodoContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 14px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

export const FilterOptions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
  

  div {
    flex: 1 1 0;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #5093db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    background-color: #007bff;
    opacity: 0.9;
  }
`;

export const CompleteButton = styled(Button)`
  background-color: #5cb85c;

  &:hover {
    background-color: #12c112;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: #d9534f;

  &:hover {
    background-color: #d0140d;
  }
`;
