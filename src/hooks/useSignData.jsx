import { useState } from "react";

const useSignData = () => {
  const initialState = { email: "", password: "" };
  const [signData, setSignData] = useState(initialState);

  const handleInput = (e) => {
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

  const resetInputValue = () => {
    setSignData(initialState);
  };

  return [signData, handleInput, resetInputValue];
};

export default useSignData;
