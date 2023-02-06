import { useMemo } from "react";

const checkEmailAvailable = (email) => {
  return /[\w\-\.]+\@[\w\-\.]+/g.test(email);
};

const checkPasswordAvailable = (password) => {
  return password.length >= 8 ? true : false;
};

const useSignUpAvailable = ({ email, password }) => {
  const isAvailable = useMemo(
    () => checkEmailAvailable(email) && checkPasswordAvailable(password),
    [email, password]
  );

  return isAvailable;
};

export default useSignUpAvailable;
