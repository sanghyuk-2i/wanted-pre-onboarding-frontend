import { Navigate } from "react-router-dom";
import { useAuth } from "./components/auth/AuthProvider";

const App = () => {
  const { user } = useAuth();

  return <Navigate to={user ? "/todo" : "/signin"} />;
};

export default App;
