import React from "react";
import { Form } from "react-router-dom";

const ToDoAddition = () => {
  return (
    <div>
      <Form method="post" action="/todo">
        <input type="text" data-testid="new-todo-input" name="todo" />
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </Form>
    </div>
  );
};

export default ToDoAddition;
