/* eslint-disable @next/next/no-img-element */
import React from "react";

function Section2() {
  return (
    <div
      className="bg-white rounded-[20px] w-full md:w-[75%] z-50
       py-2 px-2 custom-shadow mt-12"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-items-start">
        <img
          src="/dashboard.jpg"
          alt="dash-img"
          className="lg:w-[400px] lg:h-[400px] object-center object-cover rounded-[15px]"
        />
        <div className="items-start justify-start flex flex-col lg:pt-20 py-12 lg:pb-0 px-6">
          <p
            className="text-[10px] text-black to-[#f244f823]  from-[#7d3be723] 
          bg-gradient-to-r tracking-tighter rounded-full px-3 py-1 mb-6"
          >
            Advanced dashboard + SSL
          </p>
          <h2
            className="text-4xl md:text-6xl to-[#f244f8] via-[#7d3be7] from-[#7d3be7]
             text-transparent bg-clip-text bg-gradient-to-r tracking-tighter z-0 font-semibold"
          >
            Automate your commits
          </h2>
          <p className="w-full md:w-[90%] text-black tracking-tighter mt-6 text-lg">
            We have built a suite of AI-powered solutions that can help you make
            smarter decisions, faster.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
