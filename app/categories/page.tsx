"use client";
import { useState } from "react";
import Footer from "../Home/footer";
import { BsFuelPumpFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { LuLoaderPinwheel } from "react-icons/lu";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import Image from "next/image";
import Car1 from "../public/images/car1.png";
import Car2 from "../public/images/car2.png";
import Car3 from "../public/images/car3.png";

import Car4 from "../public/images/car3.png";
import Car15 from "../public/images/Car4.png";
import Car5 from "../public/images/Car5.png";

import Car14 from "../public/images/Car5.png";
import Car6 from "../public/images/Car6.png";
import Car7 from "../public/images/Car7.png";
import Car16 from "../public/images/Car7.png";

import Car8 from "../public/images/Car8.png";
import Car9 from "../public/images/Car9.png";
import Car10 from "../public/images/Car10.png";
import Car13 from "../public/images/Car10.png";

import Car11 from "../public/images/Car11.png";
import Car12 from "../public/images/Car12.png";
import { BsArrowDownUp } from "react-icons/bs";

import { Inter, Poppins } from "next/font/google";
// Declare Inter font
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const carData = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    image: Car1,
    fuel: "90L",
    transmission: "Manual",
    people: "2 People",
    price: "$99.00",
    duration: "day",
    heartColor: "pink",
  },
  {
    id: 2,
    name: "Nissan GT-R",
    type: "Sport",
    image: Car2,
    fuel: "80L",
    transmission: "Manual",
    people: "2 People",
    price: "$80.00",
    duration: "day",
    off: "$100.00",
    heartColor: "black",
  },
  {
    id: 3,
    name: "Rolls-Royce",
    type: "Sedan",
    image: Car3,
    fuel: "70L",
    transmission: "Manual",
    people: "4 People",
    price: "$96.00",
    duration: "day",
    heartColor: "pink",
  },
  {
    id: 4,
    name: "Nissan GT-R",
    type: "Sport",
    image: Car4,
    fuel: "80L",
    transmission: "Manual",
    people: "2 People",
    price: "$80.00",
    duration: "day",
    off: "$100.00",
    heartColor: "black",
  },
  {
    id: 5,
    name: "All New Rush",
    type: "ESUV",
    image: Car5,
    fuel: "70L",
    transmission: "Manual",
    people: "6 People",
    price: "$72.00",
    duration: "day",
    off: "$80.00",
    heartColor: "black",
  },
  {
    id: 6,
    name: "CR-V",
    type: "SUN",
    image: Car6,
    fuel: "80L",
    transmission: "Manual",
    people: "6 People",
    price: "$80.00",
    duration: "day",
    heartColor: "pink",
  },
  {
    id: 7,
    name: "All New Terios",
    type: "SUN",
    image: Car7,
    fuel: "90L",
    transmission: "Manual",
    people: "6 People",
    price: "$74.00",
    duration: "day",
    heartColor: "black",
  },
  {
    id: 8,
    name: "CR-V",
    type: "SUV",
    image: Car8,
    fuel: "80L",
    transmission: "Manual",
    people: "6 People",
    price: "$800.00",
    duration: "day",
    heartColor: "pink",
  },
  {
    id: 9,
    name: "MG ZX Exclusice",
    type: "Manual",
    image: Car9,
    fuel: "70L",
    transmission: "Automatic",
    people: "4 People",
    price: "$76.00",
    duration: "day",
    off: "$80.00",
    heartColor: "pink",
  },
  // { id: 10, name: "New MG ZS", type: "SUN", image: Car10, fuel: "80L", transmission: "Manual", people: "5 People", price: "$80.00", duration: "day", heartColor: "black" },
  // { id: 11, name: "MG ZX Excite", type: "Hatchback", image: Car11, fuel: "90L", transmission: "Manual", people: "4 People", price: "$74.00", duration: "day", heartColor: "pink" },
  // { id: 12, name: "New MG ZS", type: "SUV", image: Car12, fuel: "80L", transmission: "Manual", people: "6 People", price: "$80.00", duration: "day", heartColor: "black" },
  // { id: 13, name: "BMW X6", type: "SUV", image: Car13, fuel: "70L", transmission: "Manual", people: "5 People", price: "$100.00", duration: "day", heartColor: "pink" },
  // { id: 14, name: "Audi A8", type: "Sedan", image: Car14, fuel: "75L", transmission: "Automatic", people: "4 People", price: "$120.00", duration: "day", heartColor: "black" },
  // { id: 15, name: "Mercedes Benz C-Class", type: "Sedan", image: Car15, fuel: "60L", transmission: "Automatic", people: "4 People", price: "$110.00", duration: "day", heartColor: "pink" },
  // { id: 16, name: "Jaguar F-Type", type: "Sport", image: Car16, fuel: "80L", transmission: "Manual", people: "2 People", price: "$150.00", duration: "day", heartColor: "black" }
];
export default function AllCars() {
  const [visibleCars, setVisibleCars] = useState(12); // State to control the number of visible cars

  // Function to show more cars
  const showMoreCars = () => {
    setVisibleCars((prevVisible) => prevVisible + 4); // Increase visible cars by 4
  };

  return (
    <>
      <div className="w-full h-[1600px] top-[124px] flex">
        <div className="hidden lg:block w-[360px] h-[1600px] border bg-white">
          <div className="w-[176px] h-[352px] mt-[32px] ml-[32px] gap-[32px]  ">
            <p className="sideNavTxt text-[12px] font-semibold text-sideNav mb-6">Type</p>
            <input
              type="checkbox"
              checked 
              name="Sport"
              id="Sport"
              className="mb-6  mr-2"
            />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              Sport <span className="text-sideNav"> (10)</span>
              <br />
            </span>
            <input type="checkbox" checked name="#" id="#" className=" mb-6  mr-2" />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              SUV <span className="text-sideNav"> (10)</span>
              <br />
            </span>
            <input type="checkbox" name="#" id="#" className="mb-6  mr-2" />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              MPV <span className="text-sideNav"> (10)</span>
              <br />
            </span>
            <input type="checkbox" name="#" id="#" className="mb-6  mr-2" />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              Sedan <span className="text-sideNav"> (10)</span>
              <br />
            </span>
            <input type="checkbox" name="#" id="#" className="mb-6  mr-2" />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              Coupe <span className="text-sideNav"> (10)</span>
              <br />
            </span>
            <input type="checkbox" name="#" id="#" className="mb-6  mr-2" />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              Hatchback <span className="text-sideNav"> (10)</span>
              <br />
            </span>
          </div>
          
          <div className="w-[176px] h-[352px] mt-[32px] ml-[32px] gap-[32px] ">
            <p className="sideNavTxt text-[12px] font-semibold text-sideNav mb-6 ">CAPACITY</p>

            <input type="checkbox" checked  name="#" id="#" className="mb-6  mr-2" />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              2 Person <span className="text-sideNav"> (10)</span>
              <br />
            </span>
            <input type="checkbox" name="#" id="#" className="mb-6  mr-2" />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              4 Person <span className="text-sideNav"> (10)</span>
              <br />
            </span>
            <input type="checkbox" name="#" id="#" className="mb-6  mr-2" />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              6 Person <span className="text-sideNav"> (10)</span>
              <br />
            </span>
            <input type="checkbox" checked  name="#" id="#" className="mb-6  mr-2" />
            <span className="text-gray-700  tracking-[-2%] text-[20px]">
              8 Person <span className="text-sideNav"> (10)</span>
              <br />
            </span>
          </div>
          <div className="rang">
            
          <div className="w-[176px] h-[352px]  ml-[32px] gap-[32px] ">
            <p className="sideNavTxt text-[12px] font-semibold text-sideNav mb-6 ">PRICE</p>
            <input type="range" className="w-[200px] h-[20px]"/>
            <p className={`text-[20px] text-[#596780] font-semibold ${inter.className} `}>Max . $100.00</p>
            </div>
            
          </div>
        </div>
        <div>
          {/* Pick-Up and Drop-Off Section */}
          <div className="flex flex-col justify-center mt-[32px] lg:ml-[30px] lg:flex-row space-y-4 lg:space-y-0 lg:space-x-[20px] mt-8">
            {/* Pick-Up */}
            <div className="w-full lg:[464px] h-[123px]  lg:w-[600px] bg-white p-4 rounded-lg shadow-md">
              <h2 className="flex items-center space-x-2">
                <span className="bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center">
                  <span className="bg-blue-700 w-[10px] h-[10px] rounded-full"></span>
                </span>
                <span className="font-bold text-[16px]">Pick-Up</span>
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                {/* Location */}
                <div className="flex-1">
                  <label className="text-[14px] font-bold">Location</label>
                  <select
                    className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value=""
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                {/* Date */}
                <div className="flex-1">
                  <label className="text-[14px] font-bold">Date</label>
                  <select
                    className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value=""
                  >
                    <option value="" disabled>
                      Select Date
                    </option>
                  </select>
                </div>
                {/* Time */}
                <div className="flex-1">
                  <label className="text-[14px] font-bold">Time</label>
                  <select
                    className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value=""
                  >
                    <option value="" disabled>
                      Select Time
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Arrow Button */}
            <div className="flex justify-center items-center w-[48px] h-[48px] bg-blue-600 text-white rounded-md self-center lg:self-auto">
              <BsArrowDownUp />
            </div>

            {/* Drop-Off */}
            <div className="w-full lg:[464px] h-[123px] lg:w-[600px] bg-white p-4 rounded-lg shadow-md">
              <h2 className="flex items-center space-x-2">
                <span className="bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center">
                  <span className="bg-blue-700 w-[10px] h-[10px] rounded-full"></span>
                </span>
                <span className="font-bold text-[16px]">Drop-Off</span>
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                {/* Location */}
                <div className="flex-1">
                  <label className="text-[14px] font-bold">Location</label>
                  <select
                    className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value=""
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                {/* Date */}
                <div className="flex-1">
                  <label className="text-[14px] font-bold">Date</label>
                  <select
                    className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value=""
                  >
                    <option value="" disabled>
                      Select Date
                    </option>
                  </select>
                </div>
                {/* Time */}
                <div className="flex-1">
                  <label className="text-[14px] font-bold">Time</label>
                  <select
                    className="w-full h-[36px] mt-2 text-[12px] text-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value=""
                  >
                    <option value="" disabled>
                      Select Time
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Cars Section */}
          <div className="flex flex-wrap gap-[32px] justify-center lg:w-[1015px] lg:ml-[10%] h-[1228px] mt-[100px] left-[392px]">
            {carData.slice(0, visibleCars).map((car) => (
              <div
                key={car.id}
                className="w-[304px] h-[408px] bg-white rounded-lg shadow-md p-4 flex flex-col"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold w-full text-gray-800 flex flex-col">
                    {car.name}
                    <span className="text-sm text-gray-500">{car.type}</span>
                  </span>

                  {/* Heart Icon */}
                  {car.heartColor === "pink" ? (
                    <IoHeartSharp className="ml-2 text-[#ED3F3F] w-[24px] h-[24px]" />
                  ) : (
                    <IoHeartOutline className="ml-2 text-gray-500 w-[24px] h-[24px]" />
                  )}
                </div>

                {/* Car Image */}
                <div className="mb-4">
                  <Image
                    src={car.image}
                    alt={`${car.name} Image`}
                    width={232}
                    height={132}
                    className="mx-auto mt-10"
                  />
                </div>

                {/* Specifications */}
                <div className="flex justify-between mt-14">
                  <span className="flex items-center text-iconsCard gap-1 text-[14px] font-medium">
                    <BsFuelPumpFill className="w-[24px] h-[24px]" /> {car.fuel}
                  </span>
                  <span className="flex items-center text-iconsCard gap-1 text-[14px] font-medium">
                    <LuLoaderPinwheel className="w-[24px] h-[24px]" />{" "}
                    {car.transmission}
                  </span>
                  <span className="flex items-center text-iconsCard gap-1 text-[14px] font-medium">
                    <HiUsers className="w-[24px] h-[24px]" /> {car.people}
                  </span>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-7">
                  <p className="text-xl font-semibold text-gray-800">
                    {car.price}/{" "}
                    <span className="text-iconsCard text-[14px]">
                      {car.duration}
                    </span>
                  </p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Cars Button */}
          {visibleCars < carData.length && (
            <div className="flex justify-center mt-8">
              <button
                className="w-[156px] h-[44px] bg-btnBg rounded-[4px] items-center justify-center p-[8px] text-white"
                onClick={showMoreCars}
              >
                Show More Cars
              </button>
    
            </div>
          )}
    <div></div>
        </div>
      
      </div>
    
    </>
  );
}
