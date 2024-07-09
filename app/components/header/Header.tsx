import React from "react";
import Link from "next/link";

import { Rubik } from "next/font/google";

import LinkComponent from "../LinkComponent";

import SvgFrakano from "../svg/SvgFrakano";
import SvgBlog from "../svg/SvgBlog";
import SvgArchive from "../svg/SvgArchive";

const RUBIK = Rubik({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-gray-100 px-6 border-b border-b-gray-300 flex justify-between items-center overflow-hidden xl:static xl:max-w-7xl xl:rounded-t-3xl">
      <Link href="/" className="flex group">
        <SvgFrakano className="mr-1.5 fill-gray-500 group-hover:fill-black" />
        <h1
          className={`${RUBIK.className} text-3xl text-gray-500 border-b border-b-transparent group-hover:text-black group-hover:border-black`}
        >
          frakano.id
        </h1>
      </Link>
      <nav className="flex">
        <LinkComponent
          href="archives"
          icon={
            <SvgArchive className="mr-1.5 fill-gray-500 group-hover:fill-black" />
          }
          label="Archives"
          isLink={true}
        />
        <LinkComponent
          href="blogs"
          icon={
            <SvgBlog className="mr-1.5 fill-gray-500 group-hover:fill-black" />
          }
          label="Blogs"
          isLink={true}
        />
      </nav>
    </header>
  );
}
