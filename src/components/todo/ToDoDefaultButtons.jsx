import React from "react";
import { AiOutlineDelete, AiOutlineForm } from "react-icons/ai";
import styled from "styled-components";
import { Button } from "../../styles/globaStyles";

const ToDoDefaultButton = styled(Button)`
  width: 28px;
  height: 28px;
  margin: 1px;
  padding: 0;
  border-radius: 28px;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "black"};
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;

const ToDoDefaultButtons = ({ submit, id, handleRetouchMode }) => {
  const onDeleteClick = () => {
    submit({ id }, { method: "delete", action: "/todo" });
  };
  return (
    <>
      <ToDoDefaultButton
        data-testid="modify-button"
        onClick={handleRetouchMode}
        backgroundColor="#90be6d"
      >
        <AiOutlineForm size={14} color="white" />
      </ToDoDefaultButton>
      <ToDoDefaultButton
        data-testid="delete-button"
        name="delete-button"
        onClick={onDeleteClick}
        backgroundColor="#ff686b"
      >
        <AiOutlineDelete size={14} color="white" />
      </ToDoDefaultButton>
    </>
  );
};

export default ToDoDefaultButtons;
