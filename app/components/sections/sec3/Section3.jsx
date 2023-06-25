/* eslint-disable @next/next/no-img-element */
import React from "react";

const badges = ["Analytics", "Balance", "User Access"];

function Section3() {
  return (
    <div
      className="bg-white rounded-[20px] w-full md:w-[75%]
       py-2 px-6 custom-shadow mt-24 overflow-hidden z-50"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-items-start relative">
        <img
          src="/grid.png"
          className="absolute top-[20%] left-[10%] z-0 w-[500px] h-[500px] object-center object-cover"
          alt="grid-img"
        />
        <div className="items-start justify-start flex flex-col py-24 px-6 z-[99999]">
          <p
            className="text-[10px] text-black to-[#f244f823]  from-[#7d3be723] 
          bg-gradient-to-r tracking-tighter rounded-full px-3 py-1 mb-6"
          >
            Intelligent Assistant • WYSIWYG
          </p>
          <h2 className="text-4xl md:text-6xl text-[#7d3be7] tracking-tighter z-0 font-semibold">
            Manage 🤩 your data.
          </h2>
          <p className="w-full md:w-[90%] text-black tracking-tighter mt-6 text-lg">
            Advanced algorithms and machine learning models can analyze large
            data sets and provide you with actionable insights.
          </p>
          <span className="w-full items-center justify-start flex space-x-6 mt-12">
            {badges.map((badge) => (
              <span
                key={badge}
                className="bg-gray-100 px-3 py-2 text-gray-900 font-semibold rounded-lg text-xs"
              >
                {badge}
              </span>
            ))}
          </span>
        </div>
        <div className="items-center justify-end flex w-full">
          <video
            src="/sticky.mp4"
            autoPlay
            muted
            loop
            className="rounded-[15px] z-[99999]"
          />
        </div>
      </div>
    </div>
  );
}

export default Section3;
