import React from "react";
import { AiOutlineAlert } from "react-icons/ai";
import styled from "styled-components";

const ErrorContainer = styled.div`
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

const ErrorMark = () => {
  return (
    <ErrorContainer>
      <AiOutlineAlert color="#ff686b" size={64} />
      <h2>정보를 불러오는데 문제가 발생했습니다.</h2>
    </ErrorContainer>
  );
};

export default ErrorMark;
