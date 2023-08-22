import React, { ReactNode } from "react";

interface SocialMediaLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  href,
  icon,
  label,
}) => {
  return (
    <a href={href} className="social-link mx-2 group">
      <figure className="flex items-center group-hover:text-black group-hover:border-black">
        {icon}
        <figcaption className="border-b border-transparent transition duration-300 group-hover:border-black">
          {label}
        </figcaption>
      </figure>
    </a>
  );
};

export default SocialMediaLink;
