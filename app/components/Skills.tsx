import React from "react";
import Section from "./Section";
import SvgHTML5 from "./svg/SvgHTML5";
import SvgCSS3 from "./svg/SvgCSS3";
import SvgJS from "./svg/SvgJS";
import SvgReact from "./svg/SvgReact";

export default function Skills() {
  const iconStyles = "mr-1.5 fill-gray-500"
  const programmingLanguages = [
    { name: "HTML5", icon: <SvgHTML5 className={iconStyles} /> },
    { name: "CSS3", icon: <SvgCSS3 className={iconStyles} /> },
    { name: "JavaScript", icon: <SvgJS className={iconStyles} /> },
    { name: "React", icon: <SvgReact className={iconStyles} /> },
  ];

  return (
    <Section title="Skills" className="lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2">
      <ul className="grid grid-cols-2 gap-4">
        {programmingLanguages.map((language) => (
          <li key={language.name} className={`flex py-3`}>
            {language.icon}
            {language.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
