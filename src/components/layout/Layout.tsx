import React from "react";
import { Outlet } from "react-router";

import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-violet-800 text-white">
      <Header />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
