import { columns } from "../data/data";
import { rows } from "../data/data";
// import checkbox from "../assets/checkbox.png";
import icon from "../assets/icon.png";
import framepeople from "../assets/framepeople.png";
import iconright from "../assets/iconright.png";
import HeaderIcon from "./HeaderIcon";
import aqarrow from "../assets/aqarrow.png";
import emailceck from "../assets/emailceck.png";
import plus from "../assets/plus.png";
import verticaldot from "../assets/verticaldot.png";
import leftarrow from "../assets/leftarrow.png";
import rightarrow from "../assets/rightarrow.png";
import cross from "../assets/cross.png";
import hourglass from "../assets/hourglass.png";

const DataGrid = () => {
  return (
    <>
      <div className="flex-1 min-h-0 bg-white rounded overflow-auto hide-y-scrollbar">
        <table className="border-collapse table-auto text-sm w-full">
          <thead className="sticky top-0 bg-gray-200 z-10">
            <tr>
              <th className="w-[60px] h-[34px] px-[3px] py-[2px] border-t border-[#E5E7EB] flex items-center  gap-2">
                <div className="flex items-center justify-center gap-2">
                  {/* <span className="w-[14px] h-[16px]">
                    <img src={checkbox} alt="checkbox" />
                  </span> */}
                  <span>
                    <img
                      src={icon}
                      alt="checkbox"
                      className="w-[14px] h-[16px] gap-2 rounded-[4px]"
                    />
                  </span>
                </div>
              </th>
              {columns.map((col, i) => (
                <th key={`h-${col.key}-${i}`}
                  className="border px-3 py-2 w-[180px] whitespace-normal break-words font-normal "
                >
                  <div className="flex items-center gap-2">
                    <HeaderIcon col={col} />
                    <span>{col.label}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={`r-${i}`} className="hover:bg-gray-50 ">
                <td className="border px-3 py-2 w-12 text-center">{i + 1}</td>

                {columns.map((col, i) => (
                  <td
                    key={`c-${col.key}-${i}`}
                    className="border px-1  h-[34px] w-[180px]   whitespace-nowrap text-center"
                  >
                    {col.key === "email" ? (
                      row.email === "found" ? (
                        <div className="flex items-center w-[200px]  h-full gap-[8px] pt-[3px] pr-[3px] pb-[3px] pl-[3px] border-b border-[#F3F4F6]">
                          {/* left pill */}
                          <span className=" w-[191px] h-[24px]  pt-[3px] pr-[8px] pb-[3px] pl-[8px] bg-[#F3F4F6] rounded-full flex items-center gap-[8px]">
                            <img
                              src={emailceck}
                              className="w-[12px] h-[12px]"
                            />
                            <span className="whitespace-nowrap">
                              Email Found
                            </span>

                            <img
                              src={iconright}
                              className="w-[4px] h-[8px] ml-auto"
                            />
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center w-[200px]  h-[34px] gap-[8px] pt-[3px] pr-[3px] pb-[3px] pl-[3px] border-b border-[#F3F4F6]">
                          <span className="w-[175px] text-[12px] font-normal text-left italic leading-[150%] align-bottom text-[#C27803] px-2 py-1 rounded">
                            Run condition not met
                          </span>
                        </div>
                      )
                    ) : col.key === "name" ? (
                      <div className="flex items-center w-[200px]  h-[34px] gap-[8px] pt-[3px] pr-[3px] pb-[3px] pl-[3px] border-b border-[#F3F4F6]">
                        <span className=" w-[191px] h-[24px]  pt-[3px] pr-[8px] pb-[3px] pl-[8px] bg-[#E7F3F8] rounded-full flex items-center gap-[8px]">
                          <img
                            src={framepeople}
                            className="w-[14px] h-[14px]"
                          />
                          <span className="whitespace-nowrap">{row.name}</span>

                          <img
                            src={iconright}
                            className="w-[4px] h-[8px] ml-auto"
                          />
                        </span>
                      </div>
                    ) : col.key === "website" ? (
                      <div className="flex items-center w-[200px]  h-[34px] gap-[8px] pt-[3px] pr-[3px] pb-[3px] pl-[3px] border-b border-[#F3F4F6]">
                        <div className="w-[24px] h-[24px]  flex items-center justify-center">
                          <img
                            src={aqarrow}
                            alt="company"
                            className="w-[14px] h-[14px] object-contain"
                          />
                        </div>
                        {row.website}
                      </div>
                    ) : col.key === "linkedin" ? (
                      <div className="flex items-center w-[200px]  h-[34px] gap-[8px] pt-[3px] pr-[3px] pb-[3px] pl-[3px] border-b border-[#F3F4F6]">
                        <div className="w-[24px] h-[24px]  flex items-center justify-center">
                          <img
                            src={aqarrow}
                            alt="company"
                            className="w-[14px] h-[14px] object-contain"
                          />
                        </div>
                        {row.linkedin}
                      </div>
                    ) : col.key === "company" ? (
                      <div className="flex items-center w-[200px]  h-[34px] gap-[8px] pt-[3px] pr-[3px] pb-[3px] pl-[3px] border-b border-[#F3F4F6]">
                        <div className="w-[24px] h-[24px] rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                          <img
                            src={row.icon}
                            alt="company"
                            className="w-[16px] h-[16px] object-contain"
                          />
                        </div>
                        <span>{row.company}</span>
                      </div>
                    ) : (
                      <div className="flex items-center w-[200px] h-[34px] gap-[8px] pt-[3px] pr-[3px] pb-[3px] pl-[3px] border-b border-[#F3F4F6]">
                        {row[col.key] || "—"}
                      </div>
                    )}
                  </td>
                  // company
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full h-[60px] flex flex-row items-center gap-[11.66px] pl-[11.66px] bg-white whitespace-nowrap overflow-x-auto">
        <div className="flex items-center justify-between w-[955.7142944335938px] h-[40px] opacity-100 pl-[11.66px] gap-[11.66px]">
          <button className="inline-flex items-center gap-2 h-[26px] w-[73px] rounded-lg bg-white border border-gray-200 px-3 py-1 text-xs text-gray-600 opacity-100">
            <span className="w-[16px] h-[16px] flex items-center justify-center">
              <img
                src={plus}
                alt="plus"
                className="w-[10px] h-[10px]"
              />
            </span>
            Grid
          </button>
          <div className="flex items-center w-[1445px] h-[40px] opacity-100  px-[11.6px] py-[4.86px] gap-[11.6px] rounded-bl-[7.77px] rounded-br-[7.77px]">
            <span className="text-sm whitespace-nowrap w-[96px] h-[17px] opacity-100 font-medium text-[11.6px] leading-[150%] tracking-normal text-blue-700 whitespace-nowrap">
              Bitscale grid only
            </span>
            <span className="w-[13.5px] h-[13.5px] flex items-center justify-center">
              <img
                src={verticaldot}
                alt="verticaldot"
                className="block w-[1.1px] h-[10px] scale-110"
              />
            </span>
          </div>

          <div className="flex items-center w-[136px] h-[40px] opacity-100 px-[11.66px] py-[4.86px] gap-[11.66px] rounded-full">
            <span className="w-[114px] h-[18px] opacity-100 font-medium text-[12px] leading-[150%] tracking-normal text-gray-400 whitespace-nowrap">
              User Engagement...
            </span>
          </div>

          <div className="flex items-center w-[137px] h-[40px] opacity-100 px-[11.66px] py-[4.86px] gap-[11.66px] rounded-full">
            <span className="w-[112px] h-[18px] opacity-100 font-medium text-[12px] leading-[150%] tracking-normal text-gray-400 whitespace-nowrap">
              Customer Insights...
            </span>
          </div>

          <div className="flex items-center w-[137px] h-[40px] opacity-100 px-[12px] py-[4.86px] gap-[12px] rounded-full">
            <span className="w-[114px] h-[18px] opacity-100 font-medium text-[12px] leading-[150%] tracking-normal text-gray-400 whitespace-nowrap">
              Audience Interaction...
            </span>
          </div>

          <div className="flex items-center w-[137px] h-[40px] opacity-100 px-[11.66px] py-[4.86px] gap-[11.66px] rounded-full">
            <span className="w-[112px] h-[18px] opacity-100 font-medium text-[12px] leading-[150%] tracking-normal text-gray-400 whitespace-nowrap">
              Lead Generation...
            </span>
          </div>

          <div className="flex items-center w-[62.17px] h-[29.14px] gap-[4px] opacity-100">
            <span className="w-[29px] h-[29px] opacity-100 flex items-center justify-center">
              <img
                src={rightarrow}
                alt=""
                className="block w-[13.5px] h-[13.5px] opacity-100 object-contain"
              />
            </span>
            <span>
              <img
                src={leftarrow}
                alt=""
                className="block w-[13.5px] h-[13.5px] opacity-100 object-contain"
              />
            </span>
          </div>
        </div>

        <div className="w-full h-[60px] flex items-center gap-[12px] pl-[12px] bg-white whitespace-nowrap overflow-x-auto">
          <button className="inline-flex items-center gap-2 h-[26px] w-[73px] rounded-lg border border-gray-200 px-3 py-1 text-xs text-gray-600">
            <span className="w-[16px] h-[16px] flex items-center justify-center">
              <img src={plus} alt="plus" className="w-[9.5px] h-[9.5px]" />
            </span>
            Grid
          </button>
          <div className="flex items-center gap-[6px]">
            <div className="flex items-center gap-2 h-[28px] rounded-lg px-[3px]">
              <span className="relative w-[13.6px] h-[13.6px]">
                <img
                  src={cross}
                  alt="cross"
                  className="absolute w-[11px] h-[9px] top-[2.27px] left-[1.28px] object-contain"
                />
              </span>

              <span className="relative -top-[2px] left-[1px] font-sans font-normal text-[12px] leading-[150%] tracking-normal text-red-500">
                Kill Run
              </span>
            </div>
            <span className="h-[21px] w-0 border-l border-gray-300 mx-[4px]" />
            <div className="relative inline-flex items-center gap-[6px] h-[28px] px-[8px] rounded-lg border border-gray-300">
              <span className="relative w-[16px] h-[16px]">
                <img
                  src={hourglass}
                  alt="hourglass"
                  className="absolute w-[9.33px] h-[11.67px] top-[1.17px] left-[2.33px] "
                />
              </span>

              <span className="w-[53px] h-[18px] font-sans font-medium text-[12px] leading-[150%] tracking-normal text-gray-700">
                Auto Run
              </span>
              <span className="absolute -top-[4px] -right-[2px] w-[8px] h-[8px] bg-blue-700 rounded-full" />
            </div>

            <div className="relative inline-flex items-center gap-[6px] w-[112px] h-[27.88px] px-[8px] rounded-lg border border-gray-300">
              <span className="relative w-[16px] h-[16px]">
                <img
                  src={hourglass}
                  alt="hourglass"
                  className="absolute w-[9.33px] h-[11.67px] top-[1.17px] left-[2.33px] "
                />
              </span>

              <span className="w-[53px] h-[18px] font-sans font-medium text-[12px] leading-[150%] tracking-normal text-gray-700">
                Auto Dedupe
              </span>
              <span className="absolute -top-[4px] -right-[2px] w-[8px] h-[8px] bg-blue-700 rounded-full" />
            </div>

            <div className="relative inline-flex items-center gap-[6px] h-[28px] px-[8px] rounded-lg border border-gray-300">
              <span className="relative w-[16px] h-[16px]">
                <img
                  src={hourglass}
                  alt="hourglass"
                  className="absolute w-[9.33px] h-[12px] top-[1.5px] left-[2px]  border-gray-500"
                />
              </span>

              <span className="w-[53px] h-[18px] font-sans font-medium text-[12px] leading-[150%] tracking-normal text-gray-700">
                Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataGrid;
