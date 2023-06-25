/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { NavLinks } from "./data";
import "../../../../app/globals.css";
function Header() {
  return (
    <div
      className="w-full items-start justify-start flex flex-col md:w-2/3 xl:w-[70%] py-2
    z-[9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999]"
    >
      <div className="items-start justify-start flex space-x-6 w-full my-2 mx-2 z-50">
        <SocialIcon icon="github.png" title="github" link="github.com" />
        <SocialIcon icon="twitter.png" title="twitter" link="twitter.com" />
        <SocialIcon icon="linkedin.png" title="linkedin" link="linkedin.com" />
      </div>
      <div
        className="grid grid-cols-6
       bg-white shadow-2xl shadow-[#0000002d] rounded-2xl px-2 py-3 w-full z-50"
      >
        {/* 1 */}
        <img
          src="/cipher.png"
          className="w-24 object-center object-contain col-span-1"
          alt="cipher-logo"
        />
        {/* 2 */}
        <div className="flex space-x-2 items-center justify-center px-4 w-full col-span-4">
          {NavLinks.map((link) => (
            <span key={link.id} className="flex nav-link">
              <h1 className="text-sm">{link.title}</h1>
              {link.new && (
                <span className="bg-[#EAE8F5] text-[#9385E3] rounded-xl text-xs py-0.5 ml-1 px-2 self-center">
                  new
                </span>
              )}
            </span>
          ))}
        </div>
        {/* 3 */}
        <button className="px-4 col-span-1 hover:text-[#090938] smooth cursor-pointer">
          join
        </button>
      </div>
    </div>
  );
}

export default Header;

const SocialIcon = ({ icon, title, link }) => {
  return (
    <span title={title}>
      <Link href={link}>
        <img src={icon} alt={title} className="social-icon" />
      </Link>
    </span>
  );
};
