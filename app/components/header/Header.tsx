import React from "react";

import Nav from "../Nav";

export default function Header() {
  return (
    <header>
      <div className="fixed z-50 h-20 w-full bg-gray-100 p-3 border-b border-gray-300 flex items-center">
        <Nav />
        <h1 className="text-3xl">Frakano</h1>
      </div>
    </header>
  );
}
