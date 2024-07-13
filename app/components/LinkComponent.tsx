import React, { ReactNode } from "react";

import Link from "next/link";
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
  const figureStyles = "flex items-center group-hover:text-black group-hover:border-black";
  const figcaptionStyles = `capitalize ${isCurrentPath ? "border-black text-black" : "border-transparent"} border-b  transition duration-300 group-hover:border-black`;
  return (
    <Component href={href} target={isLink ? "_self" : "_blank"} className="group" >
      <figure className={figureStyles}>
        {icon}
        <figcaption className={figcaptionStyles}>
          {label}
        </figcaption>
      </figure>
    </Component>
  );
};

export default LinkComponent;
