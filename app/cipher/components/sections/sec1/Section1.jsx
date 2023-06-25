/* eslint-disable @next/next/no-img-element */
import React from "react";
import { features } from "./data";

function Section1() {
  return (
    <div
      className="bg-white rounded-[20px] w-full md:w-[75%] min-h-screen
       py-12 px-4 custom-shadow mt-24 relative"
    >
      <img
        className="absolute opacity-80 blur-3xl filter w-[250px] object-center object-cover rounded-full z-0"
        src="/mesh.png"
        alt="gradient-bg"
        style={{ left: "45%", transform: "translateX(-50%)", top: "45%" }}
      />

      <span className="w-full py-6 items-center justify-center flex flex-col relative z-50">
        <img
          src="/newbadge.svg"
          alt="arrow-icon"
          className="h-12 w-12 animate-pulse"
        />
        <img
          src="/arrow.svg"
          alt="arrow-icon"
          className="h-36 w-36 absolute left-24 -bottom-10 hidden rotate-[90deg] lg:inline-flex"
        />
        <h2 className="text-5xl md:text-6xl text-[#2f3996] tracking-tighter z-0 font-semibold">
          Supercharge
        </h2>
        <h2
          className="text-5xl md:text-6xl text-transparent font-semibold
        bg-gradient-to-r from-[#6695DF] to-[#A369DA] bg-clip-text py-4 px-2 -mt-5 tracking-tighter z-0"
        >
          your apps
        </h2>
      </span>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-6 mt-12 gap-y-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center justify-center space-x-2"
          >
            <span className="h-10 w-10 self-start pt-4">{feature.icon}</span>
            <div className="space-y-2 w-full md:w-[75%]">
              <h2 className="text-lg font-semibold text-[#181B31]">
                {feature.title}
              </h2>
              <p className="text-[14px] text-black/80">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section1;
