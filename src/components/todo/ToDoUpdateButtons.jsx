import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { Button } from "../../styles/globaStyles";

const ToDoUpdateButton = styled(Button)`
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

const ToDoUpdateButtons = ({
  submit,
  id,
  todo,
  isCompleted,
  handleRetouchMode,
}) => {
  const onUpdateClick = () => {
    submit({ id, todo, isCompleted }, { method: "put", action: "/todo" });
    handleRetouchMode();
  };
  return (
    <>
      <ToDoUpdateButton
        data-testid="submit-button"
        name="submit-button"
        onClick={onUpdateClick}
        backgroundColor="#90be6d"
      >
        <AiOutlineCheck size={14} color="white" />
      </ToDoUpdateButton>
      <ToDoUpdateButton
        data-testid="cancel-button"
        onClick={handleRetouchMode}
        backgroundColor="#ff686b"
      >
        <AiOutlineClose size={14} color="white" />
      </ToDoUpdateButton>
    </>
  );
};

export default ToDoUpdateButtons;
