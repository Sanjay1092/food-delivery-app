import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-3/4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
