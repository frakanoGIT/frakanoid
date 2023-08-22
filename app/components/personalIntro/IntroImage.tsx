import React from "react";
import Image from "next/image";

const IntroImage = () => {
  return (
    <div className="w-48 h-48 rounded-full mb-4 shadow bg-gray-100 overflow-hidden">
      <Image
        src="/frakano.png"
        alt="Frakano"
        width={192}
        height={192}
        className="translate-y-2"
      />
    </div>
  );
};

export default IntroImage;