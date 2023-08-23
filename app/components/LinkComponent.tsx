import React, { ReactNode } from "react";

import Link from "next/link";
interface SocialMediaLinkProps {
  isLink?: boolean;
  href: string;
  icon: ReactNode;
  label: string;
}

const LinkComponent: React.FC<SocialMediaLinkProps> = ({
  isLink,
  href,
  icon,
  label,
}) => {

  const Component = isLink ? Link : 'a';
  return (
    <Component href={href} className="mx-2 group">
      <figure className="flex items-center group-hover:text-black group-hover:border-black">
        {icon}
        <figcaption className="border-b border-transparent transition duration-300 group-hover:border-black">
          {label}
        </figcaption>
      </figure>
    </Component>
  );
};

export default LinkComponent;
