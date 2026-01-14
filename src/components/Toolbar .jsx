import building from "../assets/building.png";
import people from "../assets/people.png";
import arrowdown from "../assets/arrowdown.png";
import bookicon from "../assets/bookicon.png";
import iconpage from "../assets/iconpage.png";
import sort from "../assets/sort.png";
import filterlines from "../assets/filter-lines.png";
import enrichment from "../assets/enrichment.png";
import chevrondown from "../assets/chevrondown.png";
import circlestar from "../assets/circlestar.png";

const Toolbar = () => {
  return (
    <div className="w-full h-[58px] flex items-center gap-3 px-4 bg-[#FFFFFF] border-t border-[#E5E7EB]">
      <div className="flex items-center gap-3">
        <button className="relative flex items-center gap-2 w-[155px] h-[28px] px-3 rounded-lg bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200">
          <div className="relative w-[30px] h-[20px]">
            <img
              src={people}
              alt="cloud"
              className="absolute top-0 left-0 w-[14px] h-[14px]"
            />
            <img
              src={building}
              alt="db"
              className="absolute bottom-1.5 right-2.5 w-[14px] h-[14px]"
            />
          </div>
          Load Data
          <span className="w-[16px] h-[16px]">
            <img src={arrowdown} alt="arrowdown" />
          </span>
          <span className="absolute -top-1 -right-1 bg-blue-700 text-white text-[10px] px-[6px] py-[1px] rounded-full">
            1
          </span>
        </button>

        <div className="w-[20px] h-0 border-t border-gray-300 rotate-90"></div>
        <div className="relative flex items-center justify-center w-[103px] h-[27.88px] gap-[6px] rounded-lg bg-white border border-gray-300 text-sm font-medium text-gray-700">
          <span className="w-[16px] h-[16px] relative ">
            <img
              src={bookicon}
              alt="bookicon"
              className="absolute w-[12px] h-[12px] top-[2px] left-[2px]  border-gray-400 "
            />
          </span>
          <span className="flex items-center justify-center w-[65px] h-[18px] gap-[2px] leading-none whitespace-nowrap">
            2000 Rows
          </span>
          <span className="absolute -top-[4px] -right-[2px] w-[8px] h-[8px] bg-blue-700 rounded-full"></span>
        </div>

        <div className="relative flex items-center justify-center w-[125px] h-[27.88px] gap-[6px] rounded-lg bg-white border border-gray-300 text-sm font-medium text-gray-700">
          <span className="w-[16px] h-[16px] relative ">
            <img
              src={iconpage}
              alt="bookicon"
              className="absolute w-[12px] h-[12px] top-[2px] left-[2px]  border-gray-400 "
            />
          </span>
          <span className="flex items-center justify-center w-[87px] h-[18px] gap-[2px] leading-none whitespace-nowrap">
            16/20 Columns
          </span>
          <span className="absolute -top-[4px] -right-[2px] w-[8px] h-[8px] bg-blue-700 rounded-full"></span>
        </div>
        <div className="relative flex items-center w-[69px] h-[28px] px-[8px] py-[2px] gap-[6px] rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-700">
          <span className="w-[16px] h-[16px] flex items-center justify-center">
            <img
              src={sort}
              alt="filterlines"
              className="w-[12px] h-[10.66px]"
            />
          </span>
          <span className="relative left-[-7px]  top-[-1px] flex items-center justify-center w-[42px] h-[18px] text-gray-700 text-[12px] font-medium leading-none whitespace-nowrap">
            Sort
          </span>
          <span className="absolute -top-[4px] -right-[2px] w-[8px] h-[8px] bg-blue-700 rounded-full"></span>
        </div>
        <div className="relative flex items-center justify-center w-[80px] h-[28px] gap-[6px] rounded-lg bg-white border border-gray-300 text-sm font-medium text-gray-700">
          <span className="w-[16px] h-[16px] flex items-center justify-center">
            <img
              src={filterlines}
              alt="filterlines"
              className="w-[12px] h-[10.66px]"
            />
          </span>

          <span className="relative left-[-7.5px]  top-[-2.5px] flex items-center justify-center w-[42px] h-[18px] text-gray-700 text-[12px] font-medium leading-none whitespace-nowrap">
            Filter
          </span>
          <div>
            <span className="absolute -top-1.5 -right-2 bg-blue-700 text-white text-[10px] px-[6px] py-[1px] rounded-full">
              1
            </span>
          </div>
        </div>
      </div>
      <div className="ml-auto relative flex items-center w-[301px] h-[28px] gap-[12px]">
        <button className="flex items-center w-[92px] h-[28px] px-[3px] py-[8px] gap-[8px] rounded-lg bg-gray-100 text-sm text-gray-700">
          <span className="w-[44px] h-[21px] text-[14px] font-medium leading-[150%] tracking-[0%] text-gray-800">
            Action
          </span>
          <span className="w-[16px] h-[16px]">
            <img src={arrowdown} alt="" />
          </span>
        </button>
        <div className="flex items-center w-[157px] h-[28px] gap-[2px]">
          <button className="w-[123px] h-[28px] px-[3px] py-[2px] flex items-center gap-[8px] rounded-l-lg bg-[#1F2A37] opacity-100 transition-none">
            <span className=" relative  w-[14px] h-[14px] opacity-100 transition-opacity duration-300 ease-out">
              <img
                src={enrichment}
                alt="enrichment"
                className="w-[11px] h-[11px] absolute top-[1px] left-[1px] opacity-100  "
              />
            </span>
            <span className="w-[77px] h-[21px] text-white opacity-100 font-inter font-medium text-[14px] leading-[150%] tracking-normal">
              Enrichment
            </span>
          </button>
          <button className="w-[32px] h-[28px] p-[2px] flex items-center justify-center gap-[8px] rounded-r-lg bg-[#1F2A37] opacity-100 transition-none">
            <span className=" relative  w-[16px] h-[16px] opacity-100 transition-opacity duration-300 ease-out">
              <img
                src={chevrondown}
                alt="enrichment"
                className="w-[8px] h-[4px]  absolute top-[6px] left-[4px]border-[2px] border-white opacity-100"
              />
            </span>
          </button>
        </div>

        <div className="relative w-[28px] h-[28px] rounded-full bg-[linear-gradient(217.85deg,_#9061F9_4.87%,_#D03801_95.13%)]">
          <span className="absolute w-[14px] h-[14px] top-[7px] left-[7.4px]">
            <img
              src={circlestar}
              alt="star"
              className="w-[11.67px] h-[11.67px] absolute top-[1.17px] left-[1.17px]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
