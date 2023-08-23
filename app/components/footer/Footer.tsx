import React from "react";

import SocialMediaLink from "../SocialMediaLink";

import SvgGithub from "../svg/SvgGithub";
import SvgLinkedin from "../svg/SvgLinkedin";

export default function Footer() {
  const socialIconStyles = "mr-1.5 fill-gray-500 group-hover:fill-black";
  const socialMediaLinks = [
    {
      name: 'Linkedin',
      href: "https://linkedin.com",
      icon: <SvgLinkedin className={socialIconStyles} />,
    },
    {
      name: 'Github',
      href: "https://github.com/frakanoGIT",
      icon: <SvgGithub className={socialIconStyles} />,
    },
  ];

  const socialMediaLinksComponents = socialMediaLinks.map((link) => (
    <SocialMediaLink
      key={link.name} // Make sure to provide a unique key for each component
      href={link.href}
      icon={link.icon}
      label={link.name}
    />
  ));

  return (
    <footer className="h-16 bg-gray-100 px-6 border-t border-gray-300 flex justify-center items-center lg:justify-end xl:rounded-b-3xl xl:shadow-xl">
      <nav className="flex items-center">
        {socialMediaLinksComponents}
      </nav>
    </footer>
  );
}
