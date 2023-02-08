import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styled from "styled-components";

const ToDoAddContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > h2 {
    font-size: 16px;
    margin-top: 40px;
  }
  margin: auto;
`;

const ToDoAddMark = () => {
  return (
    <ToDoAddContainer>
      <AiOutlinePlusCircle color="#9f86c0" size={64} />
      <h2>Todo를 새로 생성해보세요!</h2>
    </ToDoAddContainer>
  );
};

export default ToDoAddMark;
