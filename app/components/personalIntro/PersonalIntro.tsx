import React from "react";

import IntroImage from "./IntroImage";
import IntroText from "./IntroText";
import SocialMediaButton from "../SocialMediaButton";

import SvgWhatsapp from "../svg/SvgWhatsapp";
import SvgInstagram from "../svg/SvgInstagram";

export default function PersonalIntro() {
  const socialIconStyles = "fill-gray-500 group-hover:fill-black";
  const socialMediaButtons = [
    {
      name: "Whatsapp",
      href: "https://api.whatsapp.com/send?phone=6282114867191",
      icon: <SvgWhatsapp className={socialIconStyles} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/frakano",
      icon: <SvgInstagram className={socialIconStyles} />,
    },
  ];

  const socialMediaButtonsComponents = socialMediaButtons.map((link) => (
    <SocialMediaButton key={link.name} href={link.href} icon={link.icon} />
  ));
  const getYearsOld = new Date().getFullYear() - 1996;
  return (
    <figure className="flex flex-col items-center p-6 text-3xl lg:col-start-1 lg:col-end-2">
      <IntroImage />
      <IntroText name={`Franky (${getYearsOld} y.o)`} role="Web Developer" />
      <div className="flex space-x-4">{socialMediaButtonsComponents}</div>
    </figure>
  );
}
