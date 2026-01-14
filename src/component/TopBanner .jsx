const TopBanner = () => {
  return (

    <div className="w-full h-[44px] mt-[46px] pr-[8px] gap-[24px] border bg-[#C81E1E] flex items-center">

  <div className="flex-1"></div>
  <div className="flex items-center gap-3 text-white text-sm font-medium whitespace-nowrap">
    <span>
      Payment failed. 450,000 credits will permanently expire in 30 days
    </span>

    <div className="w-[18px] h-[18px] rounded-full border border-white flex items-center justify-center text-[10px] font-bold">
      i
    </div>

    <button className="bg-white text-gray-800 px-3 py-[4px] rounded-md text-xs font-semibold">
      Pay Now
    </button>
  </div>
  <div className="flex-1"></div>

</div>

  );
};
export default TopBanner;
