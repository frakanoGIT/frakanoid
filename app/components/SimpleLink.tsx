import React from "react";

interface SimpleLink {
  href: string;
  text: string;
}

const SimpleLink: React.FC<SimpleLink> = ({ href, text }) => {
  return <a href={href} target="_blank" className="border-b border-transparent hover:transition hover:duration-300 hover:border-black">{text}</a>;
};

export default SimpleLink;
