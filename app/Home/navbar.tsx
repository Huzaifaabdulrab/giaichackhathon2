import Image from 'next/image';
import { IoHeartSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import filter from "../public/images/filter.png";
import logo from "../public/images/command.png";
import { Bell } from 'lucide-react';
import { Inter } from 'next/font/google';

// Declare Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Navbar = () => {
  return (
    <div id='navbar' className="w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">
      
      {/* Logo and Search Bar */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 w-full md:w-auto">
        <h1 className={`logo ${inter.className} text-[#3563e9] text-[32px] `}>MORENT</h1>
        <div className="relative w-full md:w-[492px]">
          <CiSearch
            className='w-[24px] h-[24px] absolute top-1/2 left-3 transform -translate-y-1/2'
          />
          <input 
            type="text" 
            title="search" 
            placeholder="Say something here" 
            className='border-2 border-[#e7eef6] w-full h-[44px] rounded-full p-2 pl-10 pr-12'
          />
          <Image 
            src={filter} 
            alt='Filter Icon' 
            width={24} 
            height={24} 
            className='absolute top-1/2 right-3 transform -translate-y-1/2'
          />
        </div>
      </div>

      {/* Icons (Desktop only) */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <div className="w-[44px] h-[44px] flex justify-center items-center border border-[#C3D4E9] rounded-full opacity-80">
          <IoHeartSharp className="w-[24px] h-[24px]" />
        </div>
        <div className="w-[44px] h-[44px] flex justify-center items-center border border-[#C3D4E9] rounded-full opacity-80">
          <Bell className="w-[24px] h-[24px]" />
        </div>
        <div className="w-[44px] h-[44px] flex justify-center items-center border border-[#C3D4E9] rounded-full opacity-80">
          <IoMdSettings className="w-[24px] h-[24px]" />
        </div>
        <div className="w-[44px] h-[44px] rounded-full overflow-hidden border border-[#C3D4E9]">
          <a href="/AdminCar"><Image
            src={logo}
            alt="Profile"
            width={44}
            height={44}
            className="object-cover"
          /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
