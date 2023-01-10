import React from "react";
import { Link } from "react-router-dom";
import { assets } from "./Assets/assets";
import Background from "./Components/Background";

function App() {
  return (
    <>
      <Background />
      <div className="px-[14%] relative py-14">
        <div className="flex justify-between items-center">
          <div className="flex">
            <img
              src={assets.Logo}
              alt="Web vira"
              className="w-[60px] h-[40px] object-cover"
            />
            <h3 className="h3">WebVira</h3>
          </div>
          <div className="flex text-sm">
            <div className="flex rounded-full px-9 py-3 text-white navbar gap-x-11">
              <Link to="/">Home</Link>
              <Link to="/about-us">About</Link>
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/blog">Blog</Link>
            </div>
            <button className="bg-white px-8 rounded-full ml-10 font-semibold">
              Sign in
            </button>
          </div>
        </div>
        <div className="flex mt-[14%] justify-between relative">
          <div className="w-[50%]">
            <h1 className="h1">
              Build your <br /> audience and grow <br /> your brand online
            </h1>
            <p className="text-gray-500 mt-4 mb-7">
              Get your landing page, web application or android application on
              the cheap today with Africa's <br />
              fastest growing tech corporation.{" "}
            </p>
            <div className="flex text-sm">
              <button className="bg-primaryOne text-white py-3 px-5 rounded-full">
                Get Started
              </button>
              <button className="bg-gray-100 rounded-full pl-4 pr-1 ml-3 flex items-center font-bold">
                Watch Video
                <img
                  src={assets.PlayButton}
                  alt="play"
                  className="h-9 w-9 ml-3"
                />
              </button>
            </div>
          </div>
          <img
            src={assets.GraphScreen}
            alt="graph"
            className="w-[50%] ml-11 object-cover absolute -right-12 -top-12"
          />
        </div>
      </div>
    </>
  );
}

export default App;
