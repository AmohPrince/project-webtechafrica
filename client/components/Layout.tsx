import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative py-14 w-screen overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
