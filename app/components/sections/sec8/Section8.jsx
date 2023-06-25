"use client";
import React from "react";
import { Collapse } from "@nextui-org/react";

function Section8() {
  return (
    <div
      className="bg-white rounded-[20px] w-full md:w-[75%]
       pt-2 custom-shadow mt-24 mb-12 overflow-hidden z-50
        items-center justify-center flex flex-col"
    >
      <div className="items-center justify-center flex flex-col pt-10 pb-5 px-6 z-50  w-full">
        <p
          className="text-[11px] text-black to-[#E7DBF3]  from-[#d0b4ec] 
          bg-gradient-to-r tracking-tighter rounded-full px-3 py-1 mb-4"
        >
          5 Star Customer • Support
        </p>
        <h2
          className="text-4xl md:text-6xl to-[#23223A] from-[#421788]
         tracking-tighter z-0 font-semibold  bg-gradient-to-r text-transparent bg-clip-text py-4"
        >
          Need Help?
        </h2>
      </div>
      <div
        className="w-full md:w-[80%] items-center 
      justify-center flex px-6 pb-24 pt-12 mb-12 "
      >
        <Collapse.Group style={{ width: "100%" }}>
          <Collapse
            title="How does it generate responses?"
            className="text-xl font-golos"
          >
            <p className="font-normal text-black/80 text-md w-full md:w-[80%]">
              The response generation process of the system is based on natural
              language processing and machine learning techniques. It analyzes
              the input data and identifies the key information to generate
              relevant and accurate responses.
            </p>
          </Collapse>
          <Collapse
            title="Track and analyze business reports"
            className="text-xl font-golos"
          >
            <p className="font-normal text-black/80 text-md w-full md:w-[80%]">
              The response generation process of the system is based on natural
              language processing and machine learning techniques. It analyzes
              the input data and identifies the key information to generate
              relevant and accurate responses.
            </p>
          </Collapse>
          <Collapse
            title="Do you release updates? What should I expect?"
            className="text-xl font-golos"
          >
            <p className="font-normal text-black/80 text-md w-full md:w-[80%]">
              The response generation process of the system is based on natural
              language processing and machine learning techniques. It analyzes
              the input data and identifies the key information to generate
              relevant and accurate responses.
            </p>
          </Collapse>
          <Collapse
            title="Do I get all the demos and templates with a single license?"
            className="text-xl font-golos"
          >
            <p className="font-normal text-black/80 text-md w-full md:w-[80%]">
              The response generation process of the system is based on natural
              language processing and machine learning techniques. It analyzes
              the input data and identifies the key information to generate
              relevant and accurate responses.
            </p>
          </Collapse>
          <Collapse
            title="How does it generate responses?"
            className="text-xl font-golos"
          >
            <p className="font-normal text-black/80 text-md w-full md:w-[80%]">
              The response generation process of the system is based on natural
              language processing and machine learning techniques. It analyzes
              the input data and identifies the key information to generate
              relevant and accurate responses.
            </p>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  );
}

export default Section8;
