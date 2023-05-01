import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="px-[5%] sm:px-[12%] relative py-14 w-screen overflow-x-hidden">
      <AnimatePresence>
        <Navbar />
        <Outlet />
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
