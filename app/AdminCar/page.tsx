import Image from "next/image"
import { RiHome5Fill } from "react-icons/ri";
import { IoCarOutline } from "react-icons/io5";
import { TbSettings } from "react-icons/tb";
import { CgInsights } from "react-icons/cg";
import { CiCreditCard1 } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuCalendarDays, LuCloudMoon } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { RiSunFill } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { LogOut } from "lucide-react"
import map from "../public/images/Maps.png"
import Card1 from "../public/images/card1.png"
import RentalCar from "../public/images/Top 5 Car Rental.png"
import AdminCar1 from '../public/images/car Amin.png';
import AdminCar2 from "../public/images/car2 Admin.png";
import AdminCar3 from "../public/images/car3 Admin.png";
import AdminCar4 from "../public/images/car4 Admin.png";
export default function AdminCar() {
    return(
        <>
        <div className="lg:w-[1440px] w-[327px]  lg:h-[900px] h-[1273px] bg-screenBg lg:flex">
            <div className="w-[286px] h-[900px] bg-white lg:block hidden ">
                <p className="text-[#94A7CB] text-[12px] font-semibold text-justify  ml-[24px] mt-[44px]">MAIN MENU</p>
            <div className="w-[200px] h-[56px] ml-[16px] flex bg-btnBg text-white rounded-[10px] mt-[24px] justify-start items-center gap-2 pl-4"><RiHome5Fill/> <span className="text-[16px]">Dashboard</span></div>
            <div  className="w-[116px] h-[28px] text-lablelTxt flex gap-[12px] mt-[24px] ml-[24px]"><IoCarOutline /> <span>Car Rent</span></div>
            <div  className="w-[116px] h-[28px] text-lablelTxt flex gap-[12px] mt-[24px] ml-[24px]"><CgInsights/> <span>Insight</span></div>
            <div  className="w-[116px] h-[28px] text-lablelTxt flex gap-[12px] mt-[24px] ml-[24px]"><CiCreditCard1/> <span>Reimburse</span></div>
            <div  className="w-[116px] h-[28px] text-lablelTxt flex gap-[12px] mt-[24px] ml-[24px]"><IoChatboxEllipsesOutline /> <span>Inbox</span></div>
            <div  className="w-[116px] h-[28px] text-lablelTxt flex gap-[12px] mt-[24px] ml-[24px]"><LuCalendarDays/> <span>Calender</span></div>
            <p className="text-[#94A7CB] text-[12px] font-semibold text-justify  ml-[24px] mt-[45%]">PREFERENCES</p>
            <div className="w-[212px] h-[56px] ml-[16px] flex text-lablelTxt rounded-[10px] mt-[24px] justify-start items-center gap-2 pl-4"><TbSettings/> <span className="text-[16px]">Setting</span></div>
            <div className="w-[212px] h-[56px] ml-[16px] flex  text-lablelTxt rounded-[10px] mt-[24px] justify-start items-center gap-2 pl-4"><IoIosHelpCircleOutline/> <span className="text-[16px]">Help & Center</span></div>
            <div className="w-[212px] h-[56px] ml-[16px] flex text-lablelTxt rounded-[10px] mt-[24px] justify-start items-center gap-2 pl-4"><CiDark/> <span className="text-[16px]">Dark Mode</span> <div className="text-white bg-btnBg rounded-full"><RiSunFill/></div>< IoMoonOutline/></div>
          <div className="gap-[12px] ml-[32px]  flex text-lablelTxt mt-[30%]"> <LogOut/> Log Out</div>
            </div>
        <div className="lg:w-[534px] lg:h-[836px] w-[372px] h-[1272px] bg-white mt-[32px] lg:ml-[108px] rounded-[10px]">
            <p className="mt-[24px] ml-[24px] font-bold text-[20px]"> Details Rental</p>
<Image src={map} alt="Map Image"className="w-[445px] w-[295px] h-[272px] mt-[24px] lg:ml-[23px] rounded-[10px]"/>
<div className="w-[352px] h-[73px]  mt-[24px] ml-[24px] flex ">
    <div className="w-[132] h-[72px]"> 
        <Image src={Card1} width={142} height={72} alt="Card Image" className="rounded-md" />
    </div>           
              <h1 className="text-[24px] font-bold text-black pl-[24px] pt-[24px]">
                Nissan GT - R
    <div className="text-[16px] text-lablelTxt mt-[12px] font-medium">Sport Car</div>
              </h1>
    
            </div> 
            <h2 className="flex items-center mt-[12%]   ml-[24px]">
                <span className="bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center">
                  <span className="bg-blue-700 w-[10px] h-[10px] rounded-full"></span>
                </span>
                <span className="Pick font-semibold pl-2 text-[16px]">Pick-Up</span>
              </h2>
            <div className="w-[486px] h-[68px] mt-1 flex justify-center items-center  ">
                <div className="w-[126px] h-[68px] mt-[24px]">
                    <span className="text-[16px] font-bold ml-[24px]">Locations</span>
                    <div className="text-[12px] text-lablelTxt ml-[20px]"><select name="#" id="#"><option value="#" >Kota Semarang</option></select></div>
                </div>
                <div className="w-[68px] h-[2px] rotate-90   bg-rotateLine "></div>
                <div className="w-[126px] h-[68px] mt-[24px]">
                    <span className="text-[16px] font-bold ml-[24px]">Date</span>
                    <div className="text-[12px] text-lablelTxt ml-[20px]"><select name="#" id="#"><option value="#" >20 July 2022</option></select></div>
                    </div>
                <div className="w-[68px] h-[2px] rotate-90   bg-rotateLine "></div>
                <div className="w-[126px] h-[68px]  mt-[24px]">
                    <span className="text-[16px] font-bold ml-[24px]">Time</span>
                    <div className="text-[12px] text-lablelTxt ml-[20px]"><select name="#" id="#"><option value="#" >07.00</option></select></div>
                </div>
                
                </div> 
    
            <h2 className="flex items-center mt-[24px] mb-1 ml-[24px]">
                <span className="bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center">
                  <span className="bg-blue-700 w-[10px] h-[10px] rounded-full"></span>
                </span>
                <span className="Pick font-semibold pl-2 text-[16px]">Pick-Up</span>
              </h2>
            
            <div className="w-[486px] h-[68px] mt-1">
            <div className="w-[486px] h-[68px] mt-1 flex justify-center items-center  ">
                <div className="w-[126px] h-[68px] mt-[24px]">
                    <span className="text-[16px] font-bold ml-[24px]">Locations</span>
                    <div className="text-[12px] text-lablelTxt ml-[20px]"><select name="#" id="#"><option value="#" >Kota Semarang</option></select></div>
                </div>
                <div className="w-[68px] h-[2px] rotate-90  bg-rotateLine"></div>
                <div className="w-[126px] h-[68px] mt-[24px]">
                    <span className="text-[16px] font-bold ml-[24px]">Date</span>
                    <div className="text-[12px] text-lablelTxt ml-[20px]"><select name="#" id="#"><option value="#" >20 July 2022</option></select></div>
                    </div>
                <div className="w-[68px] h-[2px] rotate-90  bg-rotateLine "></div>
                <div className="w-[126px] h-[68px]  mt-[24px]">
                    <span className="text-[16px] font-bold ml-[24px]">Time</span>
                    <div className="text-[12px] text-lablelTxt ml-[20px]"><select name="#" id="#"><option value="#" >07.00</option></select></div>
                </div>
            </div> 
            
            <hr className="w-[462px] items-center text-center ml-[11px] mt-[24px]"/>
            <div className="totalRental justify-around flex lg:mt-">
            <span className="lg:text-[20px] text-[16px]  mt-3 lg:mr-24 font-semibold text-black">
              Total Rental Price
            </span>
            <span className="lg:text-[32px] mt-2  text-[20px] font-bold text-black">$80.00</span>
          </div>
          <p className="text-[14px] text-gray-500 ml-7">
            Overall price rental
          </p>
            </div> 
            </div> 
          
        <div className="w-[524px] h-[836px]  mt-[32px] ml-[108px]  rounded-[10px]">
        <div className="w-[524px] h-[280px]   ">
<Image src={RentalCar} alt="5 rental Car Image"/>
        </div>
 
            <div className="w-[524px] h-[480px]  mt-[72px] rounded-[10px] bg-white">   
                <div className="flex lg:justify-center items-center pt-4 mb-8 gap-x-64">
          <p className="text-lg font-bold">Recent Transaction</p>
          <p className="text-sm text-blue-600 cursor-pointer hover:underline">
            <a href="/categories">View All</a>
          </p>
        </div>
        <div className="'w-[476px] h-[376px]   ml-[24px] mr-[24px]">
          <div className="w-[476px] h-[70px] flex  justify-around bg-white mt-[14px]">
            <Image src={AdminCar1} alt="AdminCar1" width={132} height={70}/>
            <div className="w-[108px] h-[48px] ml-4 mt-4">
              <h1 className="text-[16px] font-bold">Nisa GT - R</h1>
              <p className="text-lablelTxt text-[12px] font-semibold">Sport Car</p>
            </div>
            <div className="w-[108px] h-[48px] ml-[154px] mt-4">
              <h1 className="text-12px] font-medium ">20 July</h1>
              <p className="text[16px] font-bold">$80.00</p>
            </div>
          </div>
          <div className="w-[476px] border border-lablelTxt  mt-[14px] "></div>
          <div className="w-[476px] h-[70px] flex  justify-around bg-white mt-[14px]">
            <Image src={AdminCar2} alt="AdminCar1" width={132} height={70}/>
            <div className="w-[108px] h-[48px] ml-4 mt-4">
              <h1 className="text-[16px] font-bold">Nisa GT - R</h1>
              <p className="text-lablelTxt text-[12px] font-semibold">Sport Car</p>
            </div>
            <div className="w-[108px] h-[48px] ml-[154px] mt-4">
              <h1 className="text-12px] font-medium ">20 July</h1>
              <p className="text[16px] font-bold">$80.00</p>
            </div>
          </div>
          <div className="w-[476px] border border-lablelTxt  mt-[14px] "></div>
          <div className="w-[476px] h-[70px] flex  justify-around bg-white mt-[14px]">
            <Image src={AdminCar3} alt="AdminCar1" width={132} height={70}/>
            <div className="w-[108px] h-[48px] ml-4 mt-4">
              <h1 className="text-[16px] font-bold">Nisa GT - R</h1>
              <p className="text-lablelTxt text-[12px] font-semibold">Sport Car</p>
            </div>
            <div className="w-[108px] h-[48px] ml-[154px] mt-4">
              <h1 className="text-12px] font-medium ">20 July</h1>
              <p className="text[16px] font-bold">$80.00</p>
            </div>
          </div>
          <div className="w-[476px] border border-lablelTxt  mt-[14px] "></div>
          <div className="w-[476px] h-[70px] flex  justify-around bg-white mt-[14px]">
            <Image src={AdminCar4}   alt="AdminCar1" width={132} height={70}/>
            <div className="w-[108px] h-[48px] ml-4 mt-4">
              <h1 className="text-[16px] font-bold">Nisa GT - R</h1>
              <p className="text-lablelTxt text-[12px] font-semibold">Sport Car</p>
            </div>
            <div className="w-[108px] h-[48px] ml-[154px] mt-4">
              <h1 className="text-12px] font-medium ">20 July</h1>
              <p className="text[16px] font-bold">$80.00</p>
            </div>
          </div>
          
        </div>
         </div>
        </div>
        </div>
 
        </>
    )
}