import React from "react";
import { useNavigate } from "react-router-dom";
import useSignData from "../hooks/useSignData";

const SignIn = () => {
  const naviagte = useNavigate();
  const [{ email, password }, setSignInData] = useSignData();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <input
        type="text"
        data-testid="email-input"
        onChange={setSignInData}
        value={email}
      />
      <input
        type="password"
        name=""
        data-testid="password-input"
        value={password}
        onChange={setSignInData}
      />
      <button
        data-testid="signin-input"
        onClick={() => console.log({ email, password })}
      >
        로그인
      </button>
      <button data-testid="signup-input" onClick={() => naviagte("/signup")}>
        회원가입
      </button>
    </div>
  );
};

export default SignIn;
