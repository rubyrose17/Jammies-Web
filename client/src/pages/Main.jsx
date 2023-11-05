import React from "react";
import Background from "../assets/images/hero_4.jpg";
import About from "./About";
import Rooms from "./Rooms";
import Photos from "./Photos";
import Menus from "./Menus";
import { Events } from "./Events";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="relative w-full">
      <header className="absolute flex items-center justify-between px-10 p-5 z-20">
        <h1 className="text-3xl font-bold text-white">Jammies</h1>

        <div className="hidden md:block w-36">
          <button className="text-semibold border-2 rounded-full text-white w-full p-2 hover:bg-white hover:text-black cursor-pointer duration-300">
            Book Now
          </button>
        </div>
      </header>

      <div
        style={{ backgroundImage: `url(${Background})` }}
        className="h-screen w-full "
      >
        <div className="w-full h-screen flex flex-col items-center justify-center ">
          <p data-aos="flip-left" className="font-semibold text-white">
            Welcome to Jammies
          </p>
          <h1
            data-aos="flip-left"
            className="text-3xl md:text-6xl font-bold text-white"
          >
            A Best Place To Stay
          </h1>

          <div
            data-aos="flip-up"
            className="bottom-[-4rem] absolute grid md:grid-cols-4 shadow-lg bg-white rounded-md w-full max-w-sm md:max-w-2xl"
          >
            <div className="flex flex-col p-5">
              <p className="font-bold text-xl">Check In</p>
              <input type="date" className="cursor-pointer" />
            </div>
            <div className="flex flex-col p-5">
              <p className="font-bold text-xl">Check Out</p>
              <input type="date" className="cursor-pointer" />
            </div>
            <div className="flex flex-col p-5">
              <p className="font-bold text-xl">Adults</p>
              <select className="cursor-pointer">
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
                <option value="option-3">Option 3</option>
              </select>
            </div>
            <div className="flex flex-col p-5">
              <p className="font-bold text-xl">Children</p>
              <select className="cursor-pointer">
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
                <option value="option-3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <About />
        <Rooms />
        <Photos />
        <Menus />
        <Events />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
