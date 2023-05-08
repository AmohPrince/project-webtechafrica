import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  return (
    <div className="relative py-14 w-screen overflow-x-hidden">
      <AnimatePresence>
        <Navbar />
        <Outlet />
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
