import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="px-[12%] relative py-14">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
