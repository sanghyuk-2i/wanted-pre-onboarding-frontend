import { createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import AuthLayout from "../components/auth/AuthLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ToDo from "../pages/ToDo";
import { getStorageData } from "../utils/storageData";
import action from "./toDoRouterAction";
import { getToDoData } from "../api/fetchToDo";

const routerElements = createRoutesFromElements(
  <Route
    element={<AuthLayout />}
    loader={() => ({ userData: getStorageData("access-token") })}
  >
    <Route path="/" element={<App />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route element={<ProtectedRoute />}>
      <Route
        path="/todo"
        element={<ToDo />}
        action={action}
        loader={async () => ({ toDoData: await getToDoData() })}
      />
    </Route>
  </Route>
);

export default routerElements;
