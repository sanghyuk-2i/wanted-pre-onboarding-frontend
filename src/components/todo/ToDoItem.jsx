import React, { useState } from "react";
import { useSubmit } from "react-router-dom";
import useRetouchMode from "../../hooks/useRetouchMode";
import ToDoDefaultButtons from "./ToDoDefaultButtons";
import ToDoUpdateButtons from "./ToDoUpdateButtons";

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
    <li>
      <label>
        <input
          type="checkbox"
          name="isCompleted"
          checked={modifyChecked}
          onChange={handleModifyChange}
        />
        {retouchMode ? (
          <input
            type="text"
            name="modify-todo"
            data-testid="modify-input"
            defaultValue={todo}
            onChange={handleModifyChange}
          />
        ) : (
          <span>{todo}</span>
        )}
      </label>
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
    </li>
  );
};

export default ToDoItem;
