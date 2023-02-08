import React from "react";
import styled from "styled-components";
import selectionApi from "../api/selectionApi";
import useSignData from "../hooks/useSignData";
import useSignUpAvailable from "../hooks/useSignUpAvailable";
import {
  Box,
  Button,
  Input,
  InputContainer,
  Label,
} from "../styles/globaStyles";

const SignUpBox = styled(Box)`
  padding: 16px 24px;
  margin: auto;
  justify-content: center;
  gap: 12px;
  & > p {
    display: ${({ signUpAvailable }) => (!signUpAvailable ? "block" : "none")};
    color: #ff686b;
    font-size: 10px;
    transition: all 0.5s;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

const SignUp = () => {
  const [{ email, password }, setSignUpData] = useSignData();

  const signUpAvailable = useSignUpAvailable({ email, password });

  const postSignUp = async () => {
    try {
      await selectionApi.post("/auth/signup", { email, password });
    } catch (e) {
      console.log(e.toJSON());
    }
  };

  return (
    <SignUpBox size="md" signUpAvailable={signUpAvailable}>
      <h2>회원가입</h2>
      <InputContainer>
        <Label>이메일</Label>
        <Input type="text" data-testid="email-input" onChange={setSignUpData} />
      </InputContainer>
      <InputContainer>
        <Label>비밀번호</Label>
        <Input
          type="password"
          data-testid="password-input"
          onChange={setSignUpData}
        />
      </InputContainer>
      <p>
        ※ 이메일 형식인지 확인하거나 비밀번호는 최소 8자리 이상이여야 합니다
      </p>

      <SubmitButton
        size="md"
        options={!signUpAvailable ? "disabled" : "primary"}
        disabled={!signUpAvailable}
        onClick={postSignUp}
      >
        기입 완료
      </SubmitButton>
    </SignUpBox>
  );
};

export default SignUp;
