import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./components/auth/AuthProvider";

const App = () => {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return <Navigate to={user ? "/todo" : "/signin"} />;
};

export default App;
