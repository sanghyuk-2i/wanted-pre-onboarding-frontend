import React, { useState } from "react";

const useSignData = () => {
  const [signData, setSignData] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    e.preventDefault();
    const { value, dataset } = e.target;
    const { testid } = dataset;

    switch (testid) {
      case "email-input":
        setSignData((prevState) => ({ ...prevState, email: value }));
        break;
      case "password-input":
        setSignData((prevState) => ({ ...prevState, password: value }));
        break;
      default:
        break;
    }
  };

  return [signData, handleInput];
};

export default useSignData;
