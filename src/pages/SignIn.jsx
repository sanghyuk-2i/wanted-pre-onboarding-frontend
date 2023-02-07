import React from "react";
import { useNavigate } from "react-router-dom";
import selectionApi from "../api/selectionApi";
import { useAuth } from "../components/auth/AuthProvider";
import useSignData from "../hooks/useSignData";

const SignIn = () => {
  const naviagte = useNavigate();
  const { signIn } = useAuth();
  const [{ email, password }, setSignInData] = useSignData();

  const postSignIn = async () => {
    try {
      const { data } = await selectionApi.post("/auth/signin", {
        email,
        password,
      });
      signIn(data.access_token);
    } catch (e) {
      console.log(e.toJSON());
    }
  };

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
        data-testid="password-input"
        value={password}
        onChange={setSignInData}
      />
      <button data-testid="signin-input" onClick={postSignIn}>
        로그인
      </button>
      <button data-testid="signup-input" onClick={() => naviagte("/signup")}>
        회원가입
      </button>
    </div>
  );
};

export default SignIn;
