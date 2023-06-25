/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Marquee from "react-fast-marquee";

export function MarqueeEl() {
  return (
    <main className="items-center justify-center flex mt-12">
      <Marquee
        className="w-full space-x-10 from-[#1c1b2e] via-[#23223abd] 
      to-[#23223A] bg-gradient-to-r py-2"
      >
        <img src="/nike.svg" className="marquee__item" />
        <img src="/marvel.svg" className="marquee__item" />
        <img src="/lyft.svg" className="marquee__item" />

        <img src="/vw.svg" className="marquee__item" />
        <img src="/nike.svg" className="marquee__item" />
        <img src="/marvel.svg" className="marquee__item" />

        <img src="/lyft.svg" className="marquee__item" />
        <img src="/vw.svg" className="marquee__item" />
        <img src="/marvel.svg" className="marquee__item" />

        <img src="/lyft.svg" className="marquee__item" />
        <img src="/nike.svg" className="marquee__item" />
        <img src="/marvel.svg" className="marquee__item" />

        <img src="/lyft.svg" className="marquee__item" />
        <img src="/nike.svg" className="marquee__item" />
        <img src="/vw.svg" className="marquee__item" />
      </Marquee>
    </main>
  );
}
