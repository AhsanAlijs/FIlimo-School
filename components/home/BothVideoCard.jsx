import React from "react";

const BothVideoCard = ({ data }) => {
  const { header, para } = data;
  return (
    <>
      <div className="flex justify-start" dir="rtl" >
        <div className="flex flex-col max-sm:ml-10  ">
          <h1 className="text-[35px] font-bold text-[#000000] max-sm:text-2xl">
            {header}
          </h1>
          <div className="h-[12px] w-[110px] bg-[#F4BD50] border-b-2 border-transparent  border-b-[#E67D4B] "></div>
          <p className="text-[16px]  my-7 pb-7">{para}</p>
        </div>
      </div>
    </>
  );
};

export default BothVideoCard;
