import React from "react";
import Img1 from "../assets/images/img_1.jpg";
import Food1 from "../assets/images/food-1.jpg";

const About = () => {
  return (
    <div className="w-full px-4 pt-40 bg-gray-200 h-screen">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 pt-16 gap-4">
          <div data-aos="fade-right" className="p-6 md:p-12 rounded">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="pt-4 text-md font-medium">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <div className="pt-5">
              <button className="bg-orange-300 text-white px-8 py-3 rounded cursor-pointer hover:bg-transparent hover:shadow-lg hover:text-black duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            style={{ backgroundImage: `url(${Img1})` }}
            className="w-full h-96 bg-cover bg-center relative"
          >
            <div className="absolute bottom-0 right-0 ">
              <img
                src={Food1}
                alt="food"
                className="w-48 rounded-full border-8 border-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
