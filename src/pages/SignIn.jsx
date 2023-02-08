import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import selectionApi from "../api/selectionApi";
import { useAuth } from "../components/auth/AuthProvider";
import useSignData from "../hooks/useSignData";
import {
  Box,
  Button,
  Input,
  InputContainer,
  Label,
} from "../styles/globaStyles";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

const SignInBox = styled(Box)`
  padding: 16px 24px;
  margin: auto;
  justify-content: center;
  gap: 12px;
`;

const LoginButton = styled(Button)`
  margin-top: 20px;
`;

const SignIn = () => {
  const naviagte = useNavigate();
  const { signIn } = useAuth();
  const [{ email, password }, setSignInData, resetInputValue] = useSignData();

  const postSignIn = async () => {
    try {
      const { data } = await selectionApi.post("/auth/signin", {
        email,
        password,
      });
      signIn(data.access_token);
    } catch (e) {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
      resetInputValue();
    }
  };

  return (
    <SignInBox size="md">
      <h2>환영합니다!</h2>
      <InputContainer>
        <Label>이메일</Label>
        <Input
          size="md"
          type="text"
          data-testid="email-input"
          onChange={setSignInData}
          value={email}
        />
      </InputContainer>
      <InputContainer>
        <Label>비밀번호</Label>
        <Input
          size="md"
          type="password"
          data-testid="password-input"
          value={password}
          onChange={setSignInData}
        />
      </InputContainer>
      <LoginButton
        size="md"
        options="primary"
        data-testid="signin-input"
        onClick={postSignIn}
      >
        <AiOutlineLogin />
        로그인
      </LoginButton>
      <Button
        size="md"
        options="secondary"
        data-testid="signup-input"
        onClick={() => naviagte("/signup")}
      >
        <AiOutlineUserAdd />
        회원가입
      </Button>
    </SignInBox>
  );
};

export default SignIn;
