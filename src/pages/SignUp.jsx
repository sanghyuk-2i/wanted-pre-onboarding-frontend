import React, { useEffect, useState } from "react";
import useSignData from "../hooks/useSignData";
import useSignUpAvailable from "../hooks/useSignUpAvailable";

const SignUp = () => {
  const [{ email, password }, setSignUpData] = useSignData();

  const signUpAvailable = useSignUpAvailable({ email, password });

  return (
    <div>
      <input type="text" data-testid="email-input" onChange={setSignUpData} />
      <input
        type="password"
        data-testid="password-input"
        onChange={setSignUpData}
      />
      <button
        disabled={!signUpAvailable}
        onClick={() => console.log("clicked")}
      >
        기입완료
      </button>
    </div>
  );
};

export default SignUp;
