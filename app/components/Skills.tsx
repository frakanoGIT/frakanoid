"use client"

import React, { useState } from "react";
import Section from "./Section";

export default function Skills() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const programmingLanguages = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    // Add more programming languages here
  ];

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <Section title="Skills">
      <ul className="grid grid-cols-2 gap-4">
        {programmingLanguages.map((language) => (
          <li
            key={language}
            onClick={() => handleLanguageClick(language)}
            className={`cursor-pointer ${
              selectedLanguage === language ? "text-blue-500 font-semibold" : ""
            }`}
          >
            {language}
          </li>
        ))}
      </ul>
      {selectedLanguage && (
        <p className="mt-4">
          You've selected: <strong>{selectedLanguage}</strong>
        </p>
      )}
    </Section>
  );
}