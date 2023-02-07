import React from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import AuthProvider from "./AuthProvider";

const AuthLayout = () => {
  const { userData } = useLoaderData();
  const navigate = useNavigate();

  return (
    <AuthProvider userData={userData} navigate={navigate}>
      <Outlet />
    </AuthProvider>
  );
};

export default AuthLayout;
