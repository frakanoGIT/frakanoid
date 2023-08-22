import React from "react";

interface IntroTextProps {
  name: string;
  role: string;
}
const IntroText: React.FC<IntroTextProps> = ({ name, role }) => {
  return (
    <div className="text-3xl text-center mb-4">
      <figcaption className="font-semibold mb-2">{name}</figcaption>
      <h2 className="text-gray-700">{role}</h2>
    </div>
  );
};

export default IntroText;
