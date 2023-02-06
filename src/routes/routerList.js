import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routerList = [
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export default routerList;
