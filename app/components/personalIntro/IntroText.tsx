import React from "react";

import { Rubik } from "next/font/google";

const RUBIK = Rubik({ subsets: ["latin"] });

interface IntroTextProps {
  name: string;
  role: string;
}
const IntroText: React.FC<IntroTextProps> = ({ name, role }) => {
  return (
    <div className="text-3xl text-center mb-4">
      <figcaption className={`${RUBIK.className} text-gray-500 mb-2`}>{name}</figcaption>
      <h2 className="text-gray-700">{role}</h2>
    </div>
  );
};

export default IntroText;
