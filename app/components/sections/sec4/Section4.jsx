/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import CanvasComponent from "./CanvasComponent";
import { useInView } from "react-intersection-observer";

function Section4() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className="w-full items-center justify-center
       flex z-50 flex-col lg:min-h-[45vh] min-h-[55vh] 
     border-b"
    >
      <img
        src="/mesh.png"
        className="ml-24 h-[300px] w-[300px] filter blur-3xl opacity-20 absolute"
      />
      <CanvasComponent inView={inView} />
    </div>
  );
}

export default Section4;
