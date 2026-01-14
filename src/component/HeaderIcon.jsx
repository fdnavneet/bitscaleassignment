const HeaderIcon = ({ col }) => {
  if (col.type === "people-building") {
    return (
      <div className="relative w-[16px] h-[16px] overflow-hidden">
        <img
          src={col.building}
          className="absolute inset-0 w-[16px] h-[16px]"
          alt=""
        />
        <img
          src={col.people}
          className="absolute left-0 top-0 w-[16px] h-[16px] translate-y-[50%]"
          alt=""
        />
      </div>
    );
  }

  return (
    <img
      src={col.icon}
      style={{ width: col.width, height: col.height }}
      alt=""
    />
  );
};

export default HeaderIcon;


