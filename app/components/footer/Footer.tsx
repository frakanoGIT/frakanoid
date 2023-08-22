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
      href: "https://Github.com",
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
    <footer className="h-16 bg-gray-100 border-t border-gray-300 flex justify-center items-center">
      <nav className="flex items-center text-gray-500">
        {socialMediaLinksComponents}
      </nav>
    </footer>
  );
}
