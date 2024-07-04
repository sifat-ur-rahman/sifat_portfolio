import React from "react";
import { Outlet } from "react-router-dom";
import Foonter from "../Pages/Footer/Foonter";
import Header from "../Pages/Header/Header";

const Main = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div>
        <Header />
      </div>
      <div className="">
        <Outlet />
      </div>
      <Foonter />
    </div>
  );
};

export default Main;
