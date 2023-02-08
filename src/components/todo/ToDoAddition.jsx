import React, { useEffect, useRef } from "react";
import { Form } from "react-router-dom";
import styled from "styled-components";
import { Button, Input } from "../../styles/globaStyles";
import { AiOutlinePlus } from "react-icons/ai";

const ToDoAddStyles = styled(Form)`
  display: flex;
  padding: 6px 2px;
  & > Input {
    flex: 1;
    border: 0;
    &:focus {
      border: 0;
    }
  }
  & > Button {
    width: 28px;
    height: 28px;
    margin: 4px 0;
    margin-left: 4px;
    padding: 0;
    border-radius: 28px;
    justify-self: center;
    align-self: center;
  }
`;

const ToDoAddition = () => {
  const inputRef = useRef(null);

  return (
    <ToDoAddStyles method="post" action="/todo">
      <Input
        ref={inputRef}
        size="md"
        type="text"
        data-testid="new-todo-input"
        name="todo"
        placeholder="Todo 목록 추가"
      />
      <Button
        options="primary"
        type="submit"
        data-testid="new-todo-add-button"
        onClick={() => {
          setTimeout(() => (inputRef.current.value = ""), 100);
        }}
      >
        <AiOutlinePlus size={20} />
      </Button>
    </ToDoAddStyles>
  );
};

export default ToDoAddition;
