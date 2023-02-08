import React, { useState } from "react";
import { useSubmit } from "react-router-dom";
import styled from "styled-components";
import useRetouchMode from "../../hooks/useRetouchMode";
import { CheckBox, Input, Label } from "../../styles/globaStyles";
import ToDoDefaultButtons from "./ToDoDefaultButtons";
import ToDoUpdateButtons from "./ToDoUpdateButtons";

const ToDoItemStyles = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 8px 0;
  gap: 4px;
  & > Label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 4px;
    & > span {
      flex: 1;
      font-size: 14px;
    }
  }
`;

const ToDoItem = ({ id, todo, isCompleted }) => {
  const submit = useSubmit();
  const { retouchMode, retouchModeOn, retouchModeOff } = useRetouchMode();
  const [{ modifyText, modifyChecked }, setModifyValue] = useState({
    modifyText: todo,
    modifyChecked: isCompleted,
  });

  const handleModifyChange = (e) => {
    const { value, type, checked } = e.target;
    const temp =
      type === "checkbox" ? { modifyChecked: checked } : { modifyText: value };
    setModifyValue((prevState) => ({ ...prevState, ...temp }));
  };

  return (
    <ToDoItemStyles>
      <Label>
        <CheckBox
          size={20}
          type="checkbox"
          name="isCompleted"
          checked={modifyChecked}
          onChange={handleModifyChange}
        />

        {retouchMode ? (
          <Input
            type="text"
            name="modify-todo"
            data-testid="modify-input"
            defaultValue={todo}
            onChange={handleModifyChange}
          />
        ) : (
          <span>{todo}</span>
        )}
      </Label>
      {retouchMode ? (
        <ToDoUpdateButtons
          submit={submit}
          id={id}
          todo={modifyText}
          isCompleted={modifyChecked}
          handleRetouchMode={retouchModeOff}
        />
      ) : (
        <ToDoDefaultButtons
          id={id}
          submit={submit}
          handleRetouchMode={retouchModeOn}
        />
      )}
    </ToDoItemStyles>
  );
};

export default ToDoItem;
