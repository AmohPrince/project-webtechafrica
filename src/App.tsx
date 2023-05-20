import { AnimatePresence } from "framer-motion";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar/Navbar";

export const PRICES = {
  basic: 3999,
  advanced: 9499,
};

export const PREMIUM_FEATURES = [
  "Custom domain name",
  "Hosting",
  "Unlimited customer support",
  "Completed website design and development",
  "Social media management",
  "Custom Ads management",
  "Sell products online",
  "Fully designed and deployed web shop",
  "Payments covered!",
];

export const BASIC_FEATURES = [
  "Unlimited customer support",
  "Hosting",
  "Custom domain name",
  "Complete website design and development",
];

function App() {
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
