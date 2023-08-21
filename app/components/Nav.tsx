"use client";

import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative p-3">
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center"
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-white p-4 mx-auto shadow-md">
          <a href="#about" className="block mb-2">
            About
          </a>
          <a href="#skills" className="block mb-2">
            Skills
          </a>
          <a href="#projects" className="block">
            Projects
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
