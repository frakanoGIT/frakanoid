import React, { ReactNode } from "react";

import Link from "next/link";

import SvgArrow from "./svg/SvgArrow";

interface SocialMediaLinkProps {
  isLink?: boolean;
  isCurrentPath?: boolean;
  href: string;
  icon: ReactNode;
  label: string;
}

const LinkComponent: React.FC<SocialMediaLinkProps> = ({
  isLink,
  isCurrentPath,
  href,
  icon,
  label,
}) => {

  const Component = isLink ? Link : 'a';
  const figureStyles = `flex items-center group-hover:text-black group-hover:border-black ${isLink ? "text-3xl" : ""} lg:text-base`;
  const figcaptionStyles = `capitalize ${isCurrentPath ? "border-black text-black" : "border-transparent"} border-b  transition duration-300 group-hover:border-black`;
  return (
    <Component href={href} target={isLink ? "_self" : "_blank"} className="flex items-center justify-between w-full px-3 my-3 group lg:p-0" >
      <figure className={figureStyles}>
        {icon}
        <figcaption className={figcaptionStyles}>
          {label}
        </figcaption>
      </figure>
      {isLink && !isCurrentPath ? <SvgArrow className="fill-gray-500 lg:hidden"/> : ""}
    </Component>
  );
};

export default LinkComponent;
