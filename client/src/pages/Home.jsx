import React from "react";
import BgHome from "../assets/BgHome.jpg";
import { home } from "../constant/home";

function Home() {
  const backgroundStyle = {
    background: `url(${BgHome})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={backgroundStyle}>
      <div className="max-w-lg mx-auto text-center text-white">
        <p className="font-semibold text-2xl drop-shadow-xl ">
          Discover the colorful world
        </p>
        <h1 className="font-bold text-5xl drop-shadow-xl py-5">
          New Experience
        </h1>
        <p className="drop-shadow-xl  text-sm font-sm">
          You can easily look for your dream destination and book your flight
          instantly
        </p>
        <div className="mt-4">
          <button className="bg-gray-500 px-8 py-2 rounded-full hover border-none">
            Book Now
          </button>
        </div>
      </div>

      {/* <div className="max-w-xl mx-auto">
        <h1 className="font-medium text-white text-lg">Places to go</h1>
        <div className="grid grid-cols-3 gap-4">
          {home.map((item, index) => (
            <div key={index}>
              <img
                src={item.linkImage}
                alt={item.title}
                className="object-cover "
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Home;
