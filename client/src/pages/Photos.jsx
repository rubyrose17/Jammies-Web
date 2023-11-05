import React from "react";
import { photos } from "../constant/photos";
const Photos = () => {
  return (
    <div className="w-full min-h-screen px-4 py-16 bg-gray-200">
      <div data-aos="flip-left" className="max-w-screen-xl mx-auto">
        <div className="max-w-md mx-auto text-center">
          <h1 className=" font-bold text-2xl md:text-4xl">Photos</h1>
          <p className="pt-4 text-md">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-12">
        {photos.map((photo, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              className="hover:scale-105 cursor-pointer duration-300 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
