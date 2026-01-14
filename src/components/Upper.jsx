import {  Star } from "lucide-react";
import cloud from "../asstets/cloud.png";
import check from "../asstets/check.png";
import Vectorupper from "../asstets/vectorupper.png";
import Vectorlower from "../asstets/vectorlower.png";
import homeicon from "../asstets/homeicon.png";

const GridStatusBar = () => {

  return (
    <>
      <div className="fixed top-0 left-0 w-full w-full h-[46px] flex items-center gap-[16px] pt-[8px] pr-[16px] pb-[8px] pl-[24px] bg-white overflow-x-auto overflow-y-hidden whitespace-nowrap z-50">
        <div className="flex items-center gap-3 w-[1280px] h-[46px] text-gray-600 bg-white">
          <img
            src={homeicon}
            alt="homeicon"
            className="w-[24px] h-[24px] ml-2 p-[5.33px] bg-[#F3F4F6] rounded-[5.33px] shadow-[0_1px_3px_rgba(16,24,40,0.06)] flex items-center justify-center cursor-pointer hover:bg-gray-200"
          />

          <Star
            size={16}
            className="cursor-pointer text-yellow-500 fill-yellow-500"
          />

          <span className="ml-2 text-gray-400">
            Workbook - Bitscale UX / UI testing flow
          </span>
          <span>/</span>
          <span className="font-semibold text-gray-800">
            Bitscale grid only
          </span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="w-[16px] h-[16px] flex items-center justify-center">
            <div className="relative w-[16px] h-[16px]">
              <img
                src={cloud}
                alt="cloud"
                className="w-[16px] h-[16px] object-contain"
              />

              <img
                src={check}
                alt="check"
                className="absolute bottom-[1px] left-1/2 -translate-x-1/2 w-[6px] h-[6px]"
              />
            </div>
          </span>
          <div className="w-[144px] h-[30px] px-[8px] py-[4px] gap-[6px] border border-gray-300 rounded-[10.5px] flex items-center bg-white">
            <div className="relative w-[16px] h-[16px]">
              <img
                src={Vectorupper}
                alt="upper"
                className="absolute top-0 left-0 w-[16px] h-[16px] object-contain"
              />

              <img
                src={Vectorlower}
                alt="lower"
                className="absolute bottom-0 left-0 w-[16px] h-[8px] object-contain"
              />
            </div>

            <span className="text-sm text-green-700">500/500</span>

            <span className=" ml-auto w-[42px] h-[22px] flex items-center justify-center gap-[3.5px] text-[10px] font-semibold text-white bg-[#438361] px-[7px] py-[1.75px] rounded-[8.5px] border border-t-[#000000] shadow-none leading-non ">
              FREE
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridStatusBar;
