import Image from 'next/image';
import { IoHeartSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import filter from "../public/images/filter.png";
import logo from "../public/images/command.png";
import { Bell } from 'lucide-react';
import { Inter } from 'next/font/google';
import { BiBell } from 'react-icons/bi';
import Link from 'next/link';

// Declare Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const Navbar = () => {
  return (
    
    <div className="w-full bg-white lg:h-[140px] h-auto flex flex-wrap items-center justify-between p-4 border-b-2 border-gray-200">
      <div className="w-full flex justify-center md:justify-start md:w-auto lg:ml-10">
        <h1 className={`text-[#3563e9] text-2xl md:text-3xl font-bold ${inter.className}`}>MORENT</h1>
      </div>
      
      <div className="relative w-full md:w-[50%] flex items-center mt-4 md:mt-0">
        <CiSearch className="absolute lg:left-4 left-1 lg:mt-0 mt-2 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Say something here"
          className="w-full pl-12 pr-12 py-2 rounded-full border border-gray-300  focus:ring-2 focus:ring-blue-500"
        />
        <Image
          src={filter}
          alt="Filter Icon"
          width={24}
          height={24}
          className="absolute  cursor-pointer right-3 lg:mt-0 mt-2 "
        />
      </div>
      
      <div className="flex items-center space-x-4 mt-4 md:mt-0 justify-center md:justify-end w-full ml-10 md:w-auto">
        <Link href="/AdminLayout" className="p-2 border rounded-full hover:bg-gray-100">
          <BiBell className="w-6 h-6" />
        </Link>
        <Link href="/cart" className="p-2 border rounded-full hover:bg-gray-100">
          <IoHeartSharp className="w-6 h-6 text-red-600" />
        </Link>
        <Link href="/AdminCar" className="p-2 border rounded-full hover:bg-gray-100">
          <IoMdSettings className="w-6 h-6" />
        </Link>
        <div className="rounded-full overflow-hidden border border-gray-300">
          <Link href="/AdminCar">
            <div className="p-2 w-[44px] h-[44px]">
              <Image src={logo} alt='logo'/>
               </div>
          </Link>
        </div>
      </div>
      </div> );
};

export default Navbar;

