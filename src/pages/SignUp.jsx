import React from "react";
import selectionApi from "../api/selectionApi";
import useSignData from "../hooks/useSignData";
import useSignUpAvailable from "../hooks/useSignUpAvailable";

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
    <div>
      <input type="text" data-testid="email-input" onChange={setSignUpData} />
      <input
        type="password"
        data-testid="password-input"
        onChange={setSignUpData}
      />
      <button disabled={!signUpAvailable} onClick={postSignUp}>
        기입완료
      </button>
    </div>
  );
};

export default SignUp;
