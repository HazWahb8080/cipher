/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TeamsLogos } from "./data";

function Hero() {
  return (
    <main className="min-h-screen px-12 relative z-0">
      <div className=" min-h-screen w-full items-center justify-start flex flex-col font-golos">
        <h2 className="text-6xl md:text-8xl font-bold text-[#2f3996] tracking-tighter">
          Supercharge
        </h2>
        <h2
          className="text-6xl md:text-8xl font-bold text-transparent 
        bg-gradient-to-b from-[#2f3996] to-[#A369DA] bg-clip-text py-4 px-2 -mt-5 tracking-tighter"
        >
          your apps
        </h2>
        <p className="text-black/80 text-xl font-normal md:w-1/2 w-full text-center mt-6">
          Drive growth and rank higher on search engines with the most advanced
          SEO tools.
        </p>
        <span className="flex items-center justify-center space-x-4 font-normal md:w-[40%] w-full mt-6">
          <input
            className="bg-white rounded-sm py-3 px-4 w-full input"
            placeholder="Enter your email address"
          />
          <button className="bg-black/80 text-white/90 px-4 py-3 rounded-sm smooth hover:bg-black">
            Subscribe
          </button>
        </span>
        <div className="flex flex-col items-center justify-center md:w-[60%] w-full mt-12 ">
          <h2> Trusted by these amazing companies</h2>
          <span className="flex w-full space-x-5 opacity-20 items-center justify-center mt-6 ">
            {TeamsLogos.map((logo) => (
              <img
                src={logo}
                alt={logo}
                key={logo}
                className="h-18 w-18 object-center object-contain"
              />
            ))}
          </span>
        </div>
      </div>
    </main>
  );
}

export default Hero;
