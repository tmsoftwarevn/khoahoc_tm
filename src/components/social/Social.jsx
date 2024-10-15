import React from "react";
import "./social.scss";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";


import ScrollTop from "./ScrollTop";

const SocialBar = () => {
  return (
    <>
    
    <div className="social-bar">
      <a
        href="#"
        target="_blank"
        className=""
      >
        <Image src="/fb.png" alt="fb" width={40} height={40} />
      </a>
      <a
        href="#"
        target="_blank"
        className="mt-4 block"
      >
        <Image
          src="/zalo.jpg"
          alt="fb"
          width={40}
          height={40}
          className="flex z-50 rounded-full bg-white"
        />
      </a>
      <a
        href="tel:0987654321"
        className="bg-blue-600 text-white mt-4 rounded-full p-2.5 phone"
      >
        <FaPhoneAlt className="w-full h-full" />
      </a>
      
    </div>
      <ScrollTop />
    </>
  );
};

export default SocialBar;
