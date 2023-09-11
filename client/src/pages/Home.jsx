import React, { useState } from "react";
import Background from "../assets/bg.mp4";
import { navLinks, home } from "../constant/home";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Home = () => {
  const [nav, setNav] = useState(false);

  const handleClickNav = () => {
    setNav(!nav);
  };

  return (
    <div className="relative w-full">
      <header className="absolute flex items-center justify-between px-10 p-5 z-20">
        <h1 className="text-3xl font-bold text-white">Jammies</h1>
        <ul className="hidden md:flex justify-center text-white font-semibold">
          {navLinks.map((link, index) => (
            <li
              className="px-4 cursor-pointer flex items-center justify-center"
              key={index}
            >
              {link.title}
            </li>
          ))}
        </ul>
        <div className="hidden md:block w-36">
          <button className="text-semibold border-2 rounded-full text-white w-full p-2 hover:bg-white hover:text-black cursor-pointer duration-300">
            Book Now
          </button>
        </div>
        <div
          onClick={handleClickNav}
          className="block md:hidden z-50 cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={30} className="text-black" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>
        <ul
          className={
            nav
              ? "flex items-center justify-center flex-col fixed left-0 top-0 w-[80%] h-full bg-white text-black ease-in-out duration-500 z-30"
              : " flex items-center justify-center flex-col fixed left-[-100%] top-0 w-[80%] h-full bg-white text-black ease-in-out duration-500"
          }
        >
          {navLinks.map((link, index) => (
            <li
              className="px-4 py-6 cursor-pointer font-semibold text-lg"
              key={index}
            >
              {link.title}
            </li>
          ))}
        </ul>
      </header>

      <div className="video-background relative">
        <video autoPlay muted loop className="fullscreen-video">
          <source src={Background} type="video/mp4" />
        </video>
        <div className="absolute inset-0 justify-center text-white top-24 md:top-60 left-10">
          <p className="font-semibold text-lg md:text-2xl drop-shadow-xl">
            Discover the colorful world
          </p>
          <h1 className="font-bold text-2xl md:text-5xl drop-shadow-xl py-5">
            New Experience
          </h1>
          <p className="drop-shadow-xl text-sm font-sm">
            You can easily look for your dream destination and book your flight
            instantly
          </p>
          <div className="mt-4">
            <button className="bg-gray-500 px-8 py-2 rounded-full hover:bg-gray-600 border-none">
              Explore
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto w-full mt-10 px-6">
          <h1 className="font-semibold text-2xl text-gray-700 mb-4">
            Popular Destination
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {home.map((item, index) => (
              <div
                key={index}
                className="bg-gray-300 p-4 rounded-lg z-10 overflow-hidden"
              >
                <img
                  src={item.linkImage}
                  alt={item.title}
                  className="hover:scale-125 cursor-pointer duration-300"
                />
                <p className="text-xl pt-4">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
