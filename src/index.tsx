import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";
import BasicPricingPage from "./Pages/BasicPricingPage";
import AdvancedPricingPage from "./Pages/AdvancedPricingPage";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import Contact from "./Pages/Contact";
import FourZeroFour from "./Pages/FourZeroFour";
import { AnimatePresence } from "framer-motion";
import SignIn from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import DashBoard from "./Pages/DashBoard";
import Shop from "./Pages/Shop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route element={<Home />} index />
            <Route element={<About />} path="about-us" />
            <Route element={<Features />} path="features" />
            <Route element={<Pricing />} path="pricing" />
            <Route element={<BasicPricingPage />} path="pricing/basic" />
            <Route element={<AdvancedPricingPage />} path="pricing/advanced" />
            <Route element={<Blog />} path="blog" />
            <Route element={<SingleBlog />} path="blog/:title" />
            <Route element={<Contact />} path="contact" />
            <Route path="*" element={<FourZeroFour />} />
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/dashboard/:name/adminshop" element={<Shop />} />
          <Route path="/:name" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
