import React from "react";

import LinkComponent from "../LinkComponent";

import SvgGithub from "../svg/SvgGithub";
import SvgDiscord from "../svg/SvgDiscord";

export default function Footer() {
  const socialIconStyles = "mr-1.5 fill-gray-500 group-hover:fill-black";
  const socialMediaLinks = [
    {
      name: "discord",
      href: "https://discordapp.com/users/frakano",
      icon: <SvgDiscord className={socialIconStyles} />,
    },
    {
      name: "github",
      href: "https://github.com/frakanoGIT",
      icon: <SvgGithub className={socialIconStyles} />,
    },
  ];

  const socialMediaLinksComponents = socialMediaLinks.map((link) => (
    <LinkComponent
      key={link.name} // Make sure to provide a unique key for each component
      label={link.name}
      href={link.href}
      icon={link.icon}
    />
  ));

  return (
    <footer className="h-16 bg-gray-100 px-6 border-t border-gray-300 flex justify-center items-center lg:justify-end xl:rounded-b-3xl xl:shadow-xl">
      <div className="flex items-center">{socialMediaLinksComponents}</div>
    </footer>
  );
}
