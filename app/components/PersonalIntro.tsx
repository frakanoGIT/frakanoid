import React from "react";
import Image from "next/image";

import SvgWhatsapp from "./svg/SvgWhatsapp";
import SvgFacebook from "./svg/SvgFacebook";
import SvgInstagram from "./svg/SvgInstagram";

export default function PersonalIntro() {
  return (
    <figure className="flex flex-col items-center p-6 text-3xl">
      <div className="w-48 h-48 rounded-full mb-4 shadow bg-gray-100 overflow-hidden">
        <Image
          src="/frakano.png"
          alt="Frakano"
          width={192}
          height={192}
          className="translate-y-2"
        />
      </div>
      <div className="text-3xl text-center mb-4">
        <figcaption className="font-semibold mb-2">Franky</figcaption>
        <h2 className="text-gray-700">Web Developer</h2>
      </div>
      <div className="flex space-x-4">
        <a href="https://api.whatsapp.com" className="p-3 rounded-md shadow bg-gray-100 group">
          <SvgWhatsapp className="fill-gray-500 group-hover:fill-black" />
        </a>
        <a href="https://www.facebook.com" className="p-3 rounded-md shadow bg-gray-100 group">
          <SvgFacebook className="fill-gray-500 group-hover:fill-black" />
        </a>
        <a href="https:www.instagram.com"className="p-3 rounded-md shadow bg-gray-100 group">
          <SvgInstagram className="fill-gray-500 group-hover:fill-black" />
        </a>
      </div>
    </figure>
  );
}
