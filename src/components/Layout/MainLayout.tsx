import React from "react";
import TopNav from "./TopNav";
import { Outlet } from "react-router-dom";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <>
      <TopNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
