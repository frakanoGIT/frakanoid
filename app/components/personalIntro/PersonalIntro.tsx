import React from "react";

import IntroImage from "./IntroImage";
import IntroText from "./IntroText";
import SocialMediaButton from "../SocialMediaButton";

import SvgWhatsapp from "../svg/SvgWhatsapp";
import SvgFacebook from "../svg/SvgFacebook";
import SvgInstagram from "../svg/SvgInstagram";

export default function PersonalIntro() {
  const socialIconStyles = "fill-gray-500 group-hover:fill-black";
  const socialMediaButtons = [
    {
      name: "Whatsapp",
      href: "https://api.whatsapp.com",
      icon: <SvgWhatsapp className={socialIconStyles} />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com",
      icon: <SvgFacebook className={socialIconStyles} />,
    },
    {
      name: "Instagram",
      href: "https:www.instagram.com",
      icon: <SvgInstagram className={socialIconStyles} />,
    },
  ];

  const socialMediaButtonsComponents = socialMediaButtons.map((link) => (
    <SocialMediaButton key={link.name} href={link.href} icon={link.icon} />
  ));
  return (
    <figure className="flex flex-col items-center p-6 text-3xl">
      <IntroImage />
      <IntroText name="Franky" role="Web Developer" />
      <div className="flex space-x-4">{socialMediaButtonsComponents}</div>
    </figure>
  );
}
