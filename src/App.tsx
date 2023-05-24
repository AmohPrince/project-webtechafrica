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
  "<sp>Unlimited, customer support",
  "Custom domain name",
  "Hosting",
  "<sp>Completed, website, <sp>design and development",
  "Social media management",
  "Custom Ads management",
  "<sp>Sell, products online",
  "Fully, <sp>designed, and, <sp>deployed, web shop",
  "Payments covered!",
];

export const BASIC_FEATURES = [
  "<sp>Unlimited, customer support",
  "Hosting",
  "Custom domain name",
  "Complete, <sp>website design and development",
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
