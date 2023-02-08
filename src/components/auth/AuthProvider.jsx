import React, { createContext, useContext, useMemo, useState } from "react";
import { removeStorageData, saveStorageData } from "../../utils/storageData";

const AuthContext = createContext();

const AuthProvider = ({ userData, children, navigate }) => {
  const [user, setUser] = useState(userData);

  const signIn = (accessToken) => {
    saveStorageData("access-token", accessToken);
    setUser(accessToken);
    setTimeout(() => navigate("/todo", { replace: true }), 500);
  };

  const signOut = () => {
    removeStorageData("access-token");
    setUser(null);
    navigate("/signin", { replace: true });
  };

  const value = useMemo(() => ({ user, signIn, signOut }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
