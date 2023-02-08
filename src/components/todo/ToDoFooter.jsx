import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/globaStyles";
import { useAuth } from "../auth/AuthProvider";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  & > Button {
    border-radius: 6px;
  }
  & > p {
    font-size: 10px;
  }
`;

const ToDoFooter = () => {
  const { signOut } = useAuth();
  return (
    <FooterContainer>
      <Button options="destructive" onClick={signOut}>
        로그아웃
      </Button>
      <p>© Sang Hyuk, 2023</p>
    </FooterContainer>
  );
};

export default ToDoFooter;
