import styled from "styled-components";

export const TodoListItem = styled.div<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  padding: 0.5rem 0;
  cursor: pointer;
  height: fit-content;
`;

export const TodoListWrapper = styled.div`
  height: 60vh;
  overflow: auto;
  margin-top: 8px;
  background-color: white;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.329);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
