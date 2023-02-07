import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { removeStorageData, saveStorageData } from "../../utils/storageData";

const AuthContext = createContext();

const AuthProvider = ({ userData, children, navigate }) => {
  const [user, setUser] = useState(userData);

  const signIn = (accessToken) => {
    saveStorageData("access-token", accessToken);
    setUser(accessToken);
  };

  const signOut = () => {
    removeStorageData("access-token");
    setUser(null);
    navigate("/signin", { replace: true });
  };

  const value = useMemo(() => ({ user, signIn, signOut }), [user]);

  useEffect(() => {
    if (user) {
      navigate("/todo", { replace: true });
    }
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
