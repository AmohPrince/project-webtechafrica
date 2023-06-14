import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar/Navbar";

export const PREMIUM_FEATURES: {
  category: "Web Development" | "Social Media and Ads" | "Online business";
  text: string;
}[] = [
  {
    category: "Web Development",
    text: "<sp>Unlimited, customer support",
  },
  {
    category: "Web Development",
    text: "Custom domain name",
  },
  {
    category: "Web Development",
    text: "Hosting",
  },
  {
    category: "Web Development",
    text: "<sp>Free SSL certificate",
  },
  {
    category: "Web Development",
    text: "<sp>Completed, website, <sp>design and development",
  },
  {
    category: "Social Media and Ads",
    text: "Social media management",
  },
  {
    category: "Social Media and Ads",
    text: "Custom Ads management",
  },
  {
    category: "Online business",
    text: "<sp>Sell, products online",
  },
  {
    category: "Online business",
    text: "Fully, <sp>designed, and, <sp>deployed, web shop",
  },
  {
    category: "Online business",
    text: "Payments covered!",
  },
];

export const BASIC_FEATURES: {
  category: "Web Development" | "Social Media and Ads" | "Online business";
  text: string;
}[] = [
  {
    category: "Web Development",
    text: "<sp>Unlimited, customer support",
  },
  {
    category: "Web Development",
    text: "Custom domain name",
  },
  {
    category: "Web Development",
    text: "Hosting",
  },
  {
    category: "Web Development",
    text: "<sp>Completed, website, <sp>design and development",
  },
  {
    category: "Web Development",
    text: "<sp>Free SSL certificate",
  },
  {
    category: "Online business",
    text: "Fully, <sp>designed, and, <sp>deployed, web shop",
  },
];

export const inProduction = process.env.REACT_APP_IN_PRODUCTION === "true";

export const backendURL = inProduction
  ? "https://webtechafrica.herokuapp.com"
  : "http://localhost:8080";

function App() {
  return (
    <div className="relative py-14 w-screen overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
