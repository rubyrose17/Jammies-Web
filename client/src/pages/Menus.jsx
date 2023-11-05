import React from "react";
import { menus } from "../constant/menus";
import Background from "../assets/images/hero_3.jpg";
const Menus = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
      className="w-full min-h-screen  px-4 py-16"
    >
      <div className="max-w-screen-xl  mx-auto">
        <div
          data-aos="flip-left"
          className="max-w-md mx-auto text-center text-white"
        >
          <h1 className=" font-bold text-2xl md:text-4xl">
            Our Restaurant Menu
          </h1>
          <p className="pt-4 text-md">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          {menus.map((menu, i) => (
            <div key={i} className="p-10" data-aos="fade-up">
              <p className="text-orange-400">{menu.price}</p>
              <p className="text-white font-bold text-3xl pt-6">{menu.title}</p>
              <p className="text-white text-sm pt-2">{menu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menus;
