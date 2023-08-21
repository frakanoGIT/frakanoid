import React from "react";
import Section from "./Section";
import SvgHTML5 from "./svg/SvgHTML5";
import SvgCSS3 from "./svg/SvgCSS3";
import SvgJS from "./svg/SvgJS";
import SvgReact from "./svg/SvgReact";

export default function Skills() {
  const programmingLanguages = [
    {name: "HTML5", icon: <SvgHTML5 className="mr-1.5 fill-gray-500" />},
    {name: "CSS3", icon: <SvgCSS3 className="mr-1.5 fill-gray-500" />},
    {name: "JavaScript", icon: <SvgJS className="mr-1.5 fill-gray-500" />},
    {name: "React", icon: <SvgReact className="mr-1.5 fill-gray-500" />},
    // Add more programming languages here
  ];

  return (
    <Section title="Skills">
      <ul className="grid grid-cols-2 gap-4 text-gray-500">
        {programmingLanguages.map((language) => (
          <li
            key={language.name}
            className={`flex p-3 rounded-md shadow bg-gray-100`}
          >
            {language.icon}
            {language.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}