import Image from "next/image";
import React from "react";

const AuthImage = () => {
  return (
    <div className="h-full w-[90%] m-auto relative rounded-2xl overflow-hidden">
      <Image src="/images/auth-pic.jpg" fill alt="login image" />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    </div>
  );
};

export default AuthImage;
