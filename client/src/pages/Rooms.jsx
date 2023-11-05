import React from "react";
import { rooms } from "../constant/rooms";
const Resorts = () => {
  return (
    <div className="w-full max-w-screen-xl min-h-screen mx-auto px-4 py-16">
      <div data-aos="flip-left" className="max-w-md mx-auto text-center">
        <h1 className=" font-bold text-2xl md:text-4xl">Rooms and Suits</h1>
        <p className="pt-4 text-md">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>

      <div className="grid md:grid-cols-3 py-12 gap-4 ">
        {rooms.map((room, i) => (
          <div
            data-aos="fade-up"
            key={i}
            className="text-center overflow-hidden"
          >
            <img
              src={room.img}
              alt={room.title}
              className="hover:scale-105 duration-300 transition cursor-pointer"
            />
            <p className="font-bold text-2xl py-6">{room.title}</p>
            <p className="text-orange-500">{room.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resorts;
