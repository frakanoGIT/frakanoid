import React from "react";

import { Rubik } from "next/font/google";
import SvgFrakano from "../svg/SvgFrakano";

const RUBIK = Rubik({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-gray-100 px-6 border-b border-b-gray-300 flex items-center overflow-hidden xl:static xl:max-w-7xl xl:rounded-t-3xl">
      <SvgFrakano className="mr-1.5 fill-gray-500"/>
      <h1 className={`${RUBIK.className} text-3xl text-gray-500`}>frakano.id</h1>
    </header>
  );
}
