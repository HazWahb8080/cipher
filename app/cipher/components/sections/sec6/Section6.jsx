/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IntegrationLogos } from "./data";

const badges = ["Analytics", "Balance", "User Access"];

function Section6() {
  return (
    <div
      className="bg-[#23223A] rounded-[20px] w-full md:w-[75%]
       pt-2 custom-shadow mt-24 mb-12 overflow-hidden z-50
        items-center justify-center flex flex-col pb-12"
    >
      <div
        className="items-center justify-center flex flex-col py-10 px-6 z-50 mb-6
       border-b border-white/10 w-full"
      >
        <p
          className="text-[11px] text-black to-[#E7DBF3]  from-[#d0b4ec] 
          bg-gradient-to-r tracking-tighter rounded-full px-3 py-1 mb-4"
        >
          Seamless Integration • Plugins
        </p>
        <h2
          className="text-4xl md:text-6xl lg:text-7xl from-[#e6dbf8] via-[#d0c2e6] to-[#5f4786]
         tracking-tighter z-0 font-semibold  bg-gradient-to-b text-transparent bg-clip-text py-4"
        >
          Beyond AI
        </h2>
      </div>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 justify-items-start px-6
       gap-y-12 pt-12 xl:w-2/3 pb-8"
      >
        {IntegrationLogos.map((logo) => (
          <span
            key={logo.id}
            className="space-y-8 w-full items-center justfiy-center flex flex-col group smooth hover:-translate-y-2"
          >
            <span
              className="h-14 w-14 group-hover:fill-white fill-white/50 smooth
             self-center"
            >
              {logo.icon}
            </span>
            <p className="text-white">{logo.title}</p>
          </span>
        ))}
      </div>
      <div
        className="w-full md:w-[50%] mt-14 mb-10 text-center
       items-center justify-center flex flex-col space-y-10"
      >
        <p className="text-white/80 md:w-[80%] text-md">
          Take your business to the next level via built-in risk and profit
          management tools.
        </p>
        <p className="w-full text-sm text-white/50 font-light border py-2 px-2 rounded-xl border-gray-200/10">
          Still have a question? Browse{" "}
          <a className="underline cursor-pointer hover:text-white/90 smooth">
            documentation
          </a>{" "}
          or{" "}
          <a className="underline cursor-pointer hover:text-white/90 smooth">
            submit a ticket
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Section6;
