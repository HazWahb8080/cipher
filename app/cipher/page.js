"use client";
import React, { useRef } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Section1 from "./components/sections/sec1/Section1";
import Section2 from "./components/sections/sec2/Section2";
import Section3 from "./components/sections/sec3/Section3";
import Section4 from "./components/sections/sec4/Section4";
import { useInView } from "react-intersection-observer";
import Section5 from "./components/sections/sec5/Section5";
import Section6 from "./components/sections/sec6/Section6";
import Section7 from "./components/sections/sec7/Section7";
import Section8 from "./components/sections/sec8/Section8";
import Section9 from "./components/sections/sec9/Section9";

function HomePage() {
  const { ref, inView } = useInView();

  return (
    <main
      className="w-full relative bg-[url('/hero.png')] 
    bg-auto bg-no-repeat max-w-screen"
    >
      <div
        className="flex items-center justify-center w-full sticky top-0 px-4
       z-[9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999]"
      >
        <Header />
      </div>
      <div
        className={`lg:px-12 px-4 sticky top-[20vh] z-0 ${
          inView && "opacity-0"
        } `}
      >
        <Hero />
      </div>

      <div
        className={`mt-[20vh] bg-[#FEFDFE] rounded-t-[100px] w-full pt-12 md:px-12 px-4 
      items-center justify-center flex flex-col z-50 ${!inView && "relative"}`}
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <div
          className="
        bg-transparent w-full md:w-[75%]
       py-12 px-6  mt-24 z-50 items-center justify-center flex flex-col "
        >
          <p
            className="text-[10px] text-black to-[#f244f823]  from-[#7d3be723] 
          bg-gradient-to-r tracking-tighter rounded-full px-3 py-1 mb-6"
          >
            Custom Templates • Unlimited
          </p>
          <h2
            className="text-4xl md:text-6xl to-[#7d3be7] from-[#0000008e] text-transparent bg-clip-text py-4
          bg-gradient-to-r tracking-tighter z-0 font-bold lg:w-2/3 w-full text-center "
          >
            What can it write for your ?
          </h2>
        </div>
        <div ref={ref} className="items-center flex justify-center w-full">
          <Section4 />
          {/* this component has to be the end of this div  */}
        </div>
        <div
          className="items-center justify-center 
        flex w-full bg-white z-50 flex-col"
        >
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
