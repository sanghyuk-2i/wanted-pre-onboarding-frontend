import React from "react";

const ToDoDefaultButtons = ({ submit, id, handleRetouchMode }) => {
  const onDeleteClick = () => {
    submit({ id }, { method: "delete", action: "/todo" });
  };
  return (
    <>
      <button data-testid="modify-button" onClick={handleRetouchMode}>
        수정
      </button>
      <button
        data-testid="delete-button"
        name="delete-button"
        onClick={onDeleteClick}
      >
        삭제
      </button>
    </>
  );
};

export default ToDoDefaultButtons;
