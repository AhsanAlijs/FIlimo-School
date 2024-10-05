import React from "react";

const NotiComp = ({ data = {} }) => { // Provide a default value for data
  const { title, date, message } = data;

  return (
    <>
      {/* <div className="bg-[#F9F8FE] max-md:p-2 p-5 rounded-lg mt-10 py-10"> */}
       
        {/* <div> */}
          {/* <div className="w-full flex flex-col gap-8 h-[400px] overflow-y-auto"> */}
            <div className="bg-white rounded-lg py-8 px-4  sm:px-7">
              <div className="flex justify-between pb-5">
                <h1 className="text-[#E67D4B] text-[25px] max-xl:text-[20px] font-medium">
                  {title || "No Title Available"}
                </h1>
                <span className="text-[#702DFF] bg-[#702DFF] bg-opacity-10 rounded-full px-3 py-2 text-[14px] max-xl:text-[13px]">
                  {date || "No Date Available"}
                </span>
              </div>
              <p className="text-gray-600 max-md:text-[16px] max-sm:w-full text-[20px]">
                {message || "No Message Available"}
              </p>
            </div>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default NotiComp;
