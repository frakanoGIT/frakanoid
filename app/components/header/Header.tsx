"use client";

import React from "react";
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
      name: "archives",
      icon: (
        <SvgArchive
          className={`${navPathStyles} ${
            isCurrentPath("/archives") ? "fill-black" : "fill-gray-500"
          }`}
        />
      ),
      isCurrentPath: isCurrentPath("/archives"),
    },
    {
      name: "blogs",
      icon: (
        <SvgBlog
          className={`${navPathStyles} ${
            isCurrentPath("/blogs") ? "fill-black" : "fill-gray-500"
          }`}
        />
      ),
      isCurrentPath: isCurrentPath("/blogs"),
    },
  ];

  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-gray-100 px-6 border-b border-b-gray-300 overflow-hidden xl:static xl:max-w-7xl xl:rounded-t-3xl">
      <nav className="flex h-full justify-between items-center">
          <Link href="/" className="flex group">
            <SvgFrakano className="mr-1.5 fill-black" />
            <h1
              className={`${RUBIK.className} text-3xl ${
                isCurrentPath("/") ? "text-black" : "text-gray-500"
              } border-b border-b-transparent group-hover:text-black group-hover:border-black`}
            >
              frakano.id
            </h1>
          </Link>
        <ul className="fixed -left-full top-20 lg:flex lg:static">
        {navPaths.map((path) => (
          <li key={path.name} className="mx-2 flex items-center">

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
        <div className="block cursor-pointer lg:hidden">
          <span className="block w-7 h-1 my-1 mx-auto bg-gray-500 transition duration-300 ease-out"></span>
          <span className="block w-7 h-1 my-1 mx-auto bg-gray-500 transition duration-300 ease-out"></span>
          <span className="block w-7 h-1 my-1 mx-auto bg-gray-500 transition duration-300 ease-out"></span>
        </div>
      </nav>
    </header>
  );
}
