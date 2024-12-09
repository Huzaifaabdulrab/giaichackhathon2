import { Poppins } from "next/font/google"
const inter = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });
  
export default function SideBar() {
    return(
        <>        <div className="hidden lg:block w-[360px] border bg-white">
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
</>
    )
}