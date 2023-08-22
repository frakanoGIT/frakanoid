import React, { ReactNode } from "react";

interface SocialMediaButtonProps {
  href: string;
  icon: ReactNode;
}
const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  href,
  icon,
}) => {
  return (
    <a href={href} className="p-3 rounded-md shadow bg-gray-100 group">
      {icon}
    </a>
  );
};

export default SocialMediaButton;
