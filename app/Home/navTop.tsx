'use client'
import { useState } from "react";
import Image from "next/image";
import logotext from "../public/images/command.png";

export default function NavTop() {
  const [isImageClicked, setIsImageClicked] = useState(false); // State to toggle image visibility

  const handleImageClick = () => {
    setIsImageClicked(true); // Set the state to hide the image when clicked
  };

  return (
    <>
<NavTop/>
    <div onClick={handleImageClick}  className={` ${isImageClicked ? "hidden" : "" } flex flex-wrap justify-between items-center lg:p-8 lg:gap-3 ml-1 w-full h-[141px] bg-white relative`}>
    
      {/* Logo and Title */}
      <div className="w-[543px] h-[40px] flex lg:ml-[44px]">
        {/* Image click event */}
        <div className="relative cursor-pointer" >
          <Image
            src={logotext}
            alt="LogoImage"
            width={33}
            height={33}
            // Hide the image if clicked
          />
        </div>
        <h1 className="lg:w-[499px] h-[14px] text-topNavColor items-center font-serif lg:text-[30px] text-[20px] font-bold">
          High Fidelity Dashboard - Home Rent
        </h1>
      </div>

      {/* Last Updated Section */}
      <div className="w-[236px] h-[25px] lg:mb-0 mb-10">
        <span className="text-[#666666] text-[20px]">Last Updated:</span>{" "}
        <span className="font-bold text-[20px]">8 Aug 2022</span>
      </div>
    </div>
    </>
  );
}
