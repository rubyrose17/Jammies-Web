import React from "react";
import { events } from "../constant/events";
export const Events = () => {
  return (
    <div className="w-full min-h-screen px-4 py-16 ">
      <div className="max-w-screen-xl mx-auto">
        <div data-aos="flip-left" className="max-w-md mx-auto text-center">
          <h1 className=" font-bold text-2xl md:text-4xl">Events</h1>
          <p className="pt-4 text-md">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-12">
          {events.map((event, i) => (
            <div
              key={i}
              className="shadow-lg overflow-hidden"
              data-aos="fade-up"
            >
              <img
                src={event.img}
                alt={event.title}
                className="hover:scale-105 duration-300 transition cursor-pointer"
              />
              <div className="px-12 py-8">
                <p className="text-gray-400">{event.date}</p>
                <p className="text-xl py-5">{event.title}</p>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
