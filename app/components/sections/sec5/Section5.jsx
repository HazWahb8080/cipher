/* eslint-disable @next/next/no-img-element */
import React from "react";

const badges = ["Analytics", "Balance", "User Access"];

function Section5() {
  return (
    <div
      className="bg-white rounded-[20px] w-full md:w-[75%]
       pt-2 custom-shadow mt-24 mb-12 overflow-hidden z-50 items-center justify-center flex flex-col"
    >
      <div className="items-center justify-center flex flex-col py-12 px-6 z-50 mb-6 border-b border-black/5 w-full">
        <p
          className="text-[10px] text-black to-[#f244f823]  from-[#7d3be723] 
          bg-gradient-to-r tracking-tighter rounded-full px-3 py-1 mb-6"
        >
          Easy to use • Process
        </p>
        <h2 className="text-4xl md:text-6xl text-[#7d3be7] tracking-tighter z-0 font-semibold">
          How it works?
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 justify-items-start px-6">
        <div className="items-start justify-start flex flex-col py-12 px-6 z-[99999] mb-6">
          <StepItem
            heading={"Register your app"}
            number={"1"}
            desc={
              "To be able to create an account, input your email address and password."
            }
          />
          <StepItem
            heading={"Select a Template"}
            number={"2"}
            desc={
              "Simply input some basic information or keywords about your brand or product."
            }
          />
          <StepItem
            heading={"Done"}
            number={"3"}
            desc={
              "View, edit or export your AI Powered copy with a few clicks."
            }
          />
        </div>
        <div className="lg:items-end lg:justify-end items-center justify-center flex w-full h-full z-10">
          <img
            src="/payment.jpg"
            className="rounded-[15px] z-[99999] w-[500px] object-center object-cover"
            alt="payment-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Section5;

export const StepItem = ({ heading, number, desc }) => {
  return (
    <div className="flex items-start justify-start w-full py-4 space-x-6 mb-6 group">
      <span
        className="rouded-full px-[16px] py-2 text-xl font-semibold
             self-start group-hover:bg-[#8788E7] border 
             group-hover:shadow-lg group-hover:shadow-[#9778eba1]
              border-black/5 text-[#9b56e9] group-hover:text-[#ffffff] rounded-full smooth"
      >
        {number}
      </span>
      <span>
        <h2
          className="text-xl md:text-2xl from-[#49147a] text-transparent
               to-[#ba9cf3] bg-gradient-to-r bg-clip-text tracking-tighter z-0 font-semibold mb-2"
        >
          {heading}
        </h2>
        <p className=" text-black/80">{desc}</p>
      </span>
    </div>
  );
};
