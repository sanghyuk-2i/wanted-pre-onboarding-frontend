import React, { useState } from "react";

const SignIn = () => {
  const [signInData, setSignInData] = useState({ id: "", password: "" });

  const handleInput = (e) => {
    e.preventDefault();
    const { value, dataset } = e.target;
    const { testid } = dataset;

    switch (testid) {
      case "email-input":
        setSignInData((prevState) => ({ ...prevState, id: value }));
        break;
      case "password-input":
        setSignInData((prevState) => ({ ...prevState, password: value }));
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <input
        type="text"
        data-testid="email-input"
        onChange={handleInput}
        value={signInData.id}
      />
      <input
        type="password"
        name=""
        data-testid="password-input"
        value={signInData.password}
        onChange={handleInput}
      />
      <button
        data-testid="signin-input"
        onClick={() => console.log(signInData)}
      >
        로그인
      </button>
      <button data-testid="signup-input">회원가입</button>
    </div>
  );
};

export default SignIn;
