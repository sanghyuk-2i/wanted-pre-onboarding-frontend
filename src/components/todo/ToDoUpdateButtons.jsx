import React from "react";

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
      <button
        data-testid="submit-button"
        name="submit-button"
        onClick={onUpdateClick}
      >
        제출
      </button>
      <button data-testid="cancel-button" onClick={handleRetouchMode}>
        취소
      </button>
    </>
  );
};

export default ToDoUpdateButtons;
