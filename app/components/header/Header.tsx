"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Rubik } from "next/font/google";

import LinkComponent from "../LinkComponent";

import SvgFrakano from "../svg/SvgFrakano";
import SvgBlog from "../svg/SvgBlog";
import SvgArchive from "../svg/SvgArchive";
import SvgPerson from "../svg/SvgPerson";

const RUBIK = Rubik({ subsets: ["latin"] });

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const currentPage = usePathname();
  const isCurrentPath = (path: string) => currentPage === path;
  const navPathStyles = "mr-1.5 group-hover:fill-black";
  const navPaths = [
    {
      name: "about",
      icon: (
        <SvgPerson
          className={`${navPathStyles} ${
            isCurrentPath("/about") ? "fill-black" : "fill-gray-500"
          }`}
        />
      ),
      isCurrentPath: isCurrentPath("/about"),
    },
    {
      name: "archive",
      icon: (
        <SvgArchive
          className={`${navPathStyles} ${
            isCurrentPath("/archive") ? "fill-black" : "fill-gray-500"
          }`}
        />
      ),
      isCurrentPath: isCurrentPath("/archive"),
    },
    {
      name: "blog",
      icon: (
        <SvgBlog
          className={`${navPathStyles} ${
            isCurrentPath("/blog") ? "fill-black" : "fill-gray-500"
          }`}
        />
      ),
      isCurrentPath: isCurrentPath("/blog"),
    },
  ];

  const navHandler = () => {
    setIsActive(prev => !prev);
  }

  const deactivateNav = () => {
    setIsActive(false);
  }

  return (
    <header className="sticky top-0 z-10 h-20 w-full bg-gray-100 border-b border-b-gray-300 overflow-hidden xl:static xl:max-w-7xl xl:rounded-t-3xl">
      <nav className="flex justify-between items-center h-full">
        <Link href="/" className="flex pl-6 group">
          <SvgFrakano className="mr-1.5 fill-black" />
          <h1
            className={`${RUBIK.className} text-3xl ${
              isCurrentPath("/") ? "text-black" : "text-gray-500"
            } border-b border-b-transparent group-hover:text-black group-hover:border-black`}
          >
            frakano.id
          </h1>
        </Link>
        <ul className={`flex flex-col items-start fixed top-20 z-20 w-96 h-screen bg-gray-100 shadow-md transition-all ${isActive ? "opacity-100 right-0" : "opacity-0 -right-full"} lg:flex-row lg:static lg:pr-6 lg:w-auto lg:h-auto lg:shadow-none lg:opacity-100`}>
        {navPaths.map((path) => (
          <li key={path.name} className="flex items-center justify-start w-full lg:mx-2" onClick={deactivateNav}>
            <LinkComponent
            href={path.name}
            icon={path.icon}
            label={path.name}
            isLink={true}
            isCurrentPath={path.isCurrentPath}
            />
          </li>
        ))}
        </ul>
        {/* https://dev.to/devggaurav/let-s-build-a-responsive-navbar-and-hamburger-menu-using-html-css-and-javascript-4gci */}
        <div className="cursor-pointer pr-6 lg:hidden" onClick={navHandler}>
          <span className={`block w-7 h-1 my-1 mx-auto bg-gray-500 transition duration-300 ease-out ${isActive ? "translate-y-2 rotate-45" : "translate-y-0 rotate-0"}`}></span>
          <span className={`block w-7 h-1 my-1 mx-auto bg-gray-500 transition duration-300 ease-out ${isActive ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-7 h-1 my-1 mx-auto bg-gray-500 transition duration-300 ease-out ${isActive ? "-translate-y-2 -rotate-45" : "translate-y-0 rotate-0"}`}></span>
        </div>
      </nav>
    </header>
  );
}
