import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const CustomMainLayout = styled.div`
  display: flex;
  min-height: 100vh;
  background-image: url("/background.svg");
  background-size: cover;
  z-index: -1;
`;

const MainLayout = (props) => {
  return (
    <CustomMainLayout>
      <Outlet />
    </CustomMainLayout>
  );
};

export default MainLayout;
