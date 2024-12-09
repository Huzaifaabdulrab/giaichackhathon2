'use client'
import { useState } from "react";
import Profile2 from "../public/images/Profill2.png"
import Profile from "../public/images/Profill.png"
import leftTopImg from "../public/images/Screen1.png";
import left1 from "../public/images/view1.png";
import left2 from '../public/images/View 2.png';
import left3 from "../public/images/View 3.png";
import Image from "next/image";
import { BsFuelPumpFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { LuLoaderPinwheel } from "react-icons/lu";
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";

import Car13 from "../public/images/Car10.png";

import Car11 from "../public/images/Car11.png";
import Car12 from "../public/images/Car12.png";

import Car8 from "../public/images/Car8.png";
import Car9 from "../public/images/Car9.png";
import Car10 from "../public/images/Car10.png";
import {  Poppins } from "next/font/google";
// Declare Inter font
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
;
const carData = [
  
{ id: 11, name: "MG ZX Excite", type: "Hatchback", image: Car11, fuel: "90L", transmission: "Manual", people: "4 People", price: "$74.00", duration: "day", heartColor: "pink" },
   { id: 12, name: "New MG ZS", type: "SUV", image: Car12, fuel: "80L", transmission: "Manual", people: "6 People", price: "$80.00", duration: "day", heartColor: "black" },
   { id: 13, name: "BMW X6", type: "SUV", image: Car13, fuel: "70L", transmission: "Manual", people: "5 People", price: "$100.00", duration: "day", heartColor: "pink" },
]

const carData2 = [
  
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
   { id: 10, name: "New MG ZS", type: "SUN", image: Car10, fuel: "80L", transmission: "Manual", people: "5 People", price: "$80.00", duration: "day", heartColor: "black" },
  
]
export default function CarRent() {
  const [visibleCars, setVisibleCars] = useState(12); // State to control the number of visible cars

  // Function to show more cars
  const showMoreCars = () => {
    setVisibleCars((prevVisible) => prevVisible + 4); // Increase visible cars by 4
  };  
  return(
        <div className="w-full h-full top-[124px] flex">
        <div className="hidden lg:block w-[360px] border bg-white">
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
            
          <div className="w-[176px] h-[352px]   ml-[32px] gap-[32px] ">
            <p className="sideNavTxt text-[12px] font-semibold text-sideNav mb-6 ">PRICE</p>
            <input type="range" className="w-[200px] h-[20px]"/>
            <p className={`text-[20px] text-[#596780] font-semibold ${inter.className} `}>Max . $100.00</p>
            </div>
            
          </div>
         </div>
         <div className="">
            <div className=" lg:ml-44 screenLeft lg:w-[1140px] lg:h-full lg:flex flex-col">
    {/* Large Image */}
    <div className="flex flex-col lg:flex-row   p-6   rounded-lg">
  {/* Left Section */}
  <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
    {/* Large Image */}
    <div className="w-[352px]  h-[232px] mr-[6.5%]  lg:w-[492px] lg:h-[360px] mb-6">
      <Image src={leftTopImg} alt="Large Car Image" className="w-full h-full object-cover rounded-lg" />
    </div>

    {/* Small Images */}
    <div className="flex gap-5 w-[328px] h-[64px] lg:w-full mr-[7.5%]">
      <div className="lg:w-[148px] lg:h-[124px] w-[96px] h-[96px]">
        <Image src={left2} alt="Small Image 1" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="lg:w-[148PX] lg:h-[124px]  w-[96px] h-[96px] ">
        <Image src={left1} alt="Small Image 2" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="lg:w-[148PX] lg:h-[124px]  w-[96px] h-[96px] ">
        <Image src={left3} alt="Small Image 3" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  </div>
  <div className="w-[327px] h-[408px] ml-5 lg:ml-0 mt-20 lg:mt-0 lg:w-[492px] lg:h-auto bg-white shadow-md rounded-lg p-6">
  {/* Title */}
  <h3 className="text-[28px] lg:text-[34px] font-bold text-gray-900 mb-2">Nissan GT - R</h3>
  <div className="flex items-center mb-4">
    <p className="text-yellow-500 text-[20px] font-semibold">★★★★☆</p>
    <span className="text-gray-600 text-[14px] ml-2">440+ Reviews</span>
  </div>

  {/* Description */}
  <p className="text-gray-700 lg:text-[20px] text-[12px] mb-6">
    NISMO has become the embodiment of Nissan’s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.
  </p>

  {/* Specifications */}
  <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-gray-600 text-[10px] lg:text-[20px] mb-8">
    <div>
      <span className="font-bold text-labelTxt">Type Car:</span> Sport
    </div>
    <div>
      <span className="font-bold text-labelTxt">Capacity:</span> 2 Person
    </div>
    <div>
      <span className="font-bold text-labelTxt">Steering:</span> Manual
    </div>
    <div>
      <span className="font-bold text-labelTxt">Gasoline:</span> 70L
    </div>
  </div>

  {/* Pricing and Button */}
  <div className="flex flex-col sm:flex-row items-start justify-between">
    <div className="mb-4 sm:mb-0">
      <p className="text-[20px] lg:text-[24px] font-bold text-gray-900">
        $80.00 / <span className="text-[14px] font-normal text-gray-500">day</span>
      </p>
      <p className="text-[14px] text-gray-500 line-through ml-2">$100.00</p>
    </div>
    <button className="bg-blue-500 text-white text-[16px] font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-600">
      Rent Now
    </button>
  </div>
</div>

<div className="bg-white lg:w-[1016px] lg:h-auto w-[327px] h-auto ml-10 lg:ml-56 mt-[92px] rounded-lg shadow-md p-4 lg:p-10">
  {/* Header */}
  <div className="flex items-center text-[20px] font-semibold mb-6">
    Reviews
    <span className="ml-2 w-[44px] text-white text-center h-[38px] rounded-[4px] p-1 bg-btnBg">
      13
    </span>
  </div>

  {/* Review 1 */}
  <div className="w-full flex flex-col lg:flex-row items-start gap-4 mb-8">
    {/* Profile Picture */}
    <Image
      src={Profile}
      alt="Alex Stantion"
      className="w-12 h-12 rounded-full object-cover"
    />
    {/* Review Content */}
    <div className="flex-1">
      <h4 className="font-bold text-gray-900 text-[16px] lg:text-[20px]">Alex Stantion</h4>
      <p className="text-sm text-gray-500">CEO at Bukalapak</p>
      <p className="text-gray-700 mt-2 text-[14px] lg:text-[16px]">
        We are greatly helped by the services of the MORENT Application. Morent has low prices and
        also a wide variety of cars with good and comfortable facilities. In addition, the service
        provided by the officers is also very friendly and very polite.
      </p>
      <div className="text-[12px] lg:text-sm text-gray-400 mt-2 flex justify-between items-center">
        <span>20 July 2022</span>
        <span className="text-yellow-500 text-[16px] lg:text-[20px]">★★★★★</span>
      </div>
    </div>
  </div>

  {/* Review 2 */}
  <div className="w-full flex flex-col lg:flex-row items-start gap-4 mb-8">
    {/* Profile Picture */}
    <Image
      src={Profile2}
      alt="Skylar Dias"
      className="w-12 h-12 rounded-full object-cover"
    />
    {/* Review Content */}
    <div className="flex-1">
      <h4 className="font-bold text-gray-900 text-[16px] lg:text-[20px]">Skylar Dias</h4>
      <p className="text-sm text-gray-500">CEO at Amazon</p>
      <p className="text-gray-700 mt-2 text-[14px] lg:text-[16px]">
        We are greatly helped by the services of the MORENT Application. Morent has low prices and
        also a wide variety of cars with good and comfortable facilities. In addition, the service
        provided by the officers is also very friendly and very polite.
      </p>
      <div className="text-[12px] lg:text-sm text-gray-400 mt-2 flex justify-between items-center">
        <span>20 July 2022</span>
        <span className="text-yellow-500 text-[16px] lg:text-[20px]">★★★★★</span>
      </div>
    </div>
  </div>
</div>


<div className="flex gap-[100px] lg:gap-[860px]   lg:w-[1016px] lg:h-[44px] justify-center lg:ml-56 ml-5 w-[372px] h-[20px] mt-10">
<p className="text-lablelTxt text-[16px]">Recent Car</p>
         <p className="text-[16px] text-btnBg">View All</p>
</div>
<div className=" lg:flex   gap-6   lg:ml-28 justify-center">
          {carData.slice(0, visibleCars).map((car) => (
            <div
              key={car.id}
              className="w-[304px] h-[408px] mt-10 lg:mt-0 ml-14 bg-white rounded-lg shadow-md p-4 flex flex-col"
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
                  <LuLoaderPinwheel className="w-[24px] h-[24px]" /> {car.transmission}
                </span>
                <span className="flex items-center text-iconsCard gap-1 text-[14px] font-medium">
                  <HiUsers className="w-[24px] h-[24px]" /> {car.people}
                </span>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-7">
                <p className="text-xl font-semibold text-gray-800">
                  {car.price}/{" "}
                  <span className="text-iconsCard text-[14px]">{car.duration}</span>
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <a href="/CarRent">Rent Now</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Cars Button */}
        {visibleCars < carData.length && ( // Only show button if there are more cars to display
          <div className="flex justify-center mt-8 ">
            <button
              className="w-[156px] h-[44px] bg-btnBg rounded-[4px] items-center justify-center p-[8px] text-white"
              onClick={showMoreCars}
            >
              Show More Cars
            </button>
          </div>
        )}
      

<div className="flex  gap-[100px] lg:gap-[700px] lg:w-[1016px] lg:h-[44px] w-[327px] h-[20px] justify-center lg:ml-44 ml-10 mt-10">
<p className="text-lablelTxt text-[16px]">Recomended Car</p>
         <p className="text-[16px] text-btnBg">View All</p>
</div>
<div className="lg:flex lg:flex-wrap lg:ml-28 mb-10 gap-6 justify-center">

  
          {carData2.slice(0, visibleCars).map((car) => (
            <div
              key={car.id}
              className="w-[304px] h-[408px] bg-white rounded-lg mt-10 ml-14 shadow-md p-4 flex flex-col"
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
                  <LuLoaderPinwheel className="w-[24px] h-[24px]" /> {car.transmission}
                </span>
                <span className="flex items-center text-iconsCard gap-1 text-[14px] font-medium">
                  <HiUsers className="w-[24px] h-[24px]" /> {car.people}
                </span>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-7">
                <p className="text-xl font-semibold text-gray-800">
                  {car.price}/{" "}
                  <span className="text-iconsCard text-[14px]">{car.duration}</span>
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <a href="/CarRent">Rent Now</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Cars Button */}
        {visibleCars < carData.length && ( // Only show button if there are more cars to display
          <div className="flex justify-center mt-8">
            <button
              className="w-[156px] h-[44px] bg-btnBg rounded-[4px] items-center justify-center p-[8px] text-white"
              onClick={showMoreCars}
            >
              Show More Cars
            </button>
          </div>
        )}
       

 </div>
</div>     
</div>     
 
</div>     
    )
}
