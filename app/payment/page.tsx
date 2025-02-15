'use client'
import VisaIcon from "../public/images/VisaIcons.png";
import Bitcoin from "../public/images/Bitcoin.png";
import Paypal from "../public/images/PayPal.png";
import Card1 from "../public/images/card1.png";
import layer from "../public/images/Layer.png";
import Image from "next/image";
import Footer from "../Home/footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Payment() {
const [state , setState]=useState(false)
const route =useRouter()
  const handleState=()=>{
  setState(true)
 alert("Thank you")
 route.push("/")


}
  return (
    <>
      <div className="w-full h-auto mt-[50px] flex flex-col lg:flex-row lg:justify-between lg:items-start p-4 sm:p-6">
        {/* Card Section */}
        <div className="card w-full lg:w-[492px] h-auto bg-white rounded-[10px] mb-6 lg:mb-0 p-5">
          {/* Header Section */}
          <div className="text mb-4">
            <h1 className="text-[20px] font-bold text-black">Rental Summary</h1>
            <p className="text-[14px] text-gray-500">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>
          </div>
          {/* Image and Car Info Section */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-[132px] h-[108px]">
              <Image src={Card1} alt="Card Image" className="rounded-md" />
            </div>
            <div>
              <h1 className="text-[24px] font-bold text-black">Nissan GT - R</h1>
              <p className="text-yellow-500 text-[20px] font-semibold flex items-center">
                ★★★★☆
                <span className="text-gray-500 text-[14px] ml-2">440+ Reviewer</span>
              </p>
            </div>
          </div>
          {/* Subtotal and Tax Section */}
          <div className="subtotal flex justify-between py-2 border-t mt-8">
            <span className="text-gray-500 text-[16px]">Subtotal</span>
            <span className="text-[16px] font-semibold text-black">$80.00</span>
          </div>
          <div className="subtotal flex justify-between py-2">
            <span className="text-gray-500 text-[16px]">Tax</span>
            <span className="text-[16px] font-semibold text-black">$0</span>
          </div>
          {/* Apply Promo Code Section */}
          <div className="apply flex justify-between items-center bg-gray-100 py-4 px-4 rounded-md mt-4">
            <span className="text-[14px] text-gray-500">Apply promo code</span>
            <button className="text-black text-[14px] font-semibold">Apply now</button>
          </div>
          {/* Total Rental Price Section */}
          <div className="totalRental flex justify-between items-center mt-6">
            <span className="text-[20px] font-semibold text-black">Total Rental Price</span>
            <span className="text-[32px] font-bold text-black">$80.00</span>
          </div>
          <p className="text-[14px] text-gray-500 mt-2">Overall price rental</p>
        </div>

        {/* Payment Method Section */}
        <div className="paymentMethod w-full lg:w-[852px] h-auto bg-white rounded-[10px] p-5">
          {/* Billing Info Section */}
          <div className="billing w-full h-auto bg-white rounded-[10px]">
            <div className="w-full h-auto pt-6">
              <h1 className="text-[20px] font-bold">Billing Info</h1>
              <p className="text-[14px] text-gray-500">Please enter your billing info</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="w-full lg:w-[48%]">
                <label htmlFor="Name" className="block text-[16px] font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4"
                />
              </div>
              <div className="w-full lg:w-[48%]">
                <label htmlFor="Phone" className="block text-[16px] font-semibold mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4"
                />
              </div>
              <div className="w-full lg:w-[48%]">
                <label htmlFor="Address" className="block text-[16px] font-semibold mb-2">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4"
                />
              </div>
              <div className="w-full lg:w-[48%]">
                <label htmlFor="City" className="block text-[16px] font-semibold mb-2">Town / City</label>
                <input
                  type="text"
                  placeholder="Town or City"
                  className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4"
                />
              </div>
            </div>
          </div>

          {/* Rental Info Section */}
          <div className="rentalInfo w-full h-auto bg-white rounded-[10px] mt-6">
            <div className="w-full h-auto pt-6">
              <h1 className="text-[20px] font-bold">Rental Info</h1>
              <p className="text-[14px] text-gray-500">Please select your rental date</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="w-full lg:w-[48%]">
                <label htmlFor="PickupLocation" className="block text-[16px] font-semibold mb-2">Pick-Up Location</label>
                <select className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4">
                  <option value="" disabled>Select your country</option>
                </select>
              </div>
              <div className="w-full lg:w-[48%]">
                <label htmlFor="PickupDate" className="block text-[16px] font-semibold mb-2">Pick-Up Date</label>
                <select className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4">
                  <option value="" disabled>Select your date</option>
                </select>
              </div>
              <div className="w-full lg:w-[48%]">
                <label htmlFor="PickupTime" className="block text-[16px] font-semibold mb-2">Pick-Up Time</label>
                <select className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4">
                  <option value="" disabled>Select your time</option>
                </select>
              </div>
              <div className="w-full lg:w-[48%]">
                <label htmlFor="DropoffLocation" className="block text-[16px] font-semibold mb-2">Drop-Off Location</label>
                <select className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4">
                  <option value="" disabled>Select your country</option>
                </select>
              </div>
              <div className="w-full lg:w-[48%]">
                <label htmlFor="DropoffDate" className="block text-[16px] font-semibold mb-2">Drop-Off Date</label>
                <select className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4">
                  <option value="" disabled>Select your date</option>
                </select>
              </div>
              <div className="w-full lg:w-[48%]">
                <label htmlFor="DropoffTime" className="block text-[16px] font-semibold mb-2">Drop-Off Time</label>
                <select className="w-full h-[56px] bg-[#F6F7F9] rounded-[10px] pl-4">
                  <option value="" disabled>Select your time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Method Section */}
          <div className="methodPay w-full h-auto bg-white rounded-[10px] mt-6">
            <div className="w-full h-auto pt-6">
              <h1 className="text-[20px] font-bold">Payment Method</h1>
              <p className="text-[14px] text-gray-500">Please enter your payment method</p>
            </div>
            <div className="w-full h-auto bg-[#F7F8F9] rounded-[10px] mt-6 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="bg-gray-300 w-[20px] h-[20px] rounded-full flex justify-center items-center">
                    <span className="bg-blue-700 w-[10px] h-[10px] rounded-full"></span>
                  </span>
                  <span className="font-bold text-[16px] ml-3">Credit Card</span>
                </div>
                <Image src={VisaIcon} alt="Visa Icon" width={92} height={20} />
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="w-full lg:w-[48%]">
                  <label htmlFor="CardNumber" className="block text-[16px] font-semibold mb-2">Card Number</label>
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full h-[56px] bg-white rounded-[10px] pl-4"
                  />
                </div>
                <div className="w-full lg:w-[48%]">
                  <label htmlFor="CardHolder" className="block text-[16px] font-semibold mb-2">Card Holder</label>
                  <input
                    type="text"
                    placeholder="Card Holder"
                    className="w-full h-[56px] bg-white rounded-[10px] pl-4"
                  />
                </div>
                <div className="w-full lg:w-[48%]">
                  <label htmlFor="ExpirationDate" className="block text-[16px] font-semibold mb-2">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="Expiration Date"
                    className="w-full h-[56px] bg-white rounded-[10px] pl-4"
                  />
                </div>
                <div className="w-full lg:w-[48%]">
                  <label htmlFor="CVC" className="block text-[16px] font-semibold mb-2">CVC</label>
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full h-[56px] bg-white rounded-[10px] pl-4"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center justify-between w-full h-[56px] bg-[#F6F7F9] rounded-[10px] p-4">
                <div className="flex items-center">
                  <input type="radio" className="w-[24px] h-[24px]" />
                  <label htmlFor="PayPal" className="text-[16px] font-semibold ml-2">PayPal</label>
                </div>
                <Image src={Paypal} alt="PayPal Icon" width={100} height={24} />
              </div>
              <div className="flex items-center justify-between w-full h-[56px] bg-[#F6F7F9] rounded-[10px] p-4">
                <div className="flex items-center">
                  <input type="radio" className="w-[24px] h-[24px]" />
                  <label htmlFor="Bitcoin" className="text-[16px] font-semibold ml-2">Bitcoin</label>
                </div>
                <Image src={Bitcoin} alt="Bitcoin Icon" width={100} height={24} />
              </div>
            </div>
          </div>

          {/* Confirmation Section */}
          <div className="confirmation w-full h-auto bg-white rounded-[10px] mt-6 p-4">
            <div className="w-full h-auto">
              <h1 className="text-[20px] font-bold">Confirmation</h1>
              <p className="text-[14px] text-gray-500">
                We are getting to the end. Just a few clicks and your rental is ready!
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center w-full h-[56px] bg-[#F6F7F9] rounded-[10px] p-4">
                <input type="checkbox" className="w-[24px] h-[24px]" />
                <label htmlFor="Marketing" className="text-[10px] font-semibold ml-2">
                  I agree with sending marketing and newsletter emails. No spam, promised!
                </label>
              </div>
              <div className="flex items-center w-full h-[56px] bg-[#F6F7F9] rounded-[10px] p-4">
                <input type="checkbox" className="w-[24px] h-[24px]" />
                <label htmlFor="Terms" className="text-[10px] font-semibold ml-2">
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
            </div>
            <button onClick={handleState}  className="w-[140px] h-[56px] mt-6 bg-blue-700 text-white rounded-[10px] text-[16px]">
            Rent Now
            </button>
            <Image src={layer} alt="Layer Image" className="mt-6" />
            <div className="w-full h-auto mt-6">
              <h1 className="text-[16px] font-bold">All your data are safe</h1>
              <p className="text-[14px] text-gray-500">
                We are using the most advanced security to provide you the best experience ever.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}