'use client'
import { useState } from "react";

export default function Categories() {
  const [price, setPrice] = useState(100); // State to handle the price range value

  // Function to handle price change
  const handlePriceChange = (e: any) => {
    setPrice(e.target.value);
  };

  return (
    <>
    <div className="w-[300px] h-[1600px] bg-white border-r border-[#F3F5F7] box-border p-4">
      {/* First Section: TYPE and CATEGORY */}
      <div className="space-y-6">
        {/* TYPE Section */}
        <div className="space-y-3 gap-8">
          <h1 className="text-sm text-gray-300 text-[8px]">TYPE</h1>
          {['Sport', 'SUV', 'MPV', 'Sedan', 'Coupe', 'Hatchback'].map((type, idx) => (
            <div key={idx} className="flex items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <p className="text-[20px] text-gray-600 font-semibold">{type}</p>
              </label>
              <p className="text-gray-500 text-sm">({idx * 2 + 10})</p>
            </div>
          ))}
        </div>

        {/* CATEGORY Section */}
        <div className="space-y-3">
          <h1 className="text-sm text-gray-300 font-semibold text-[8px]">CATEGORY</h1>
          {['2 Person', '4 Person', '6 Person', '8 or More'].map((category, idx) => (
            <div key={idx} className="flex items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <p className="text-[20px] text-gray-600 font-semibold">{category}</p>
              </label>
              <p className="text-gray-500 text-sm">({idx * 2 + 10})</p>
            </div>
          ))}
        </div>

        {/* PRICE Range */}
        <div className="space-y-4 mt-5">
          <h1 className="text-sm text-gray-600 font-semibold">PRICE</h1>

          {/* Custom Price Range Slider */}
          <input
            type="range"
            min="0"
            max="200"
            value={price}
            onChange={handlePriceChange}
            className="w-[220px] h-[12px] bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />

          <div className="flex justify-between items-center mt-3">
            <span className="text-gray-500 font-semibold">Max. ${price}</span>
          </div>
        </div>
      </div>
      </div><div>hoo</div>
</>
  );
}
