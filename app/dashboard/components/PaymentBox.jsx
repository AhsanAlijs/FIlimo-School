import React from "react";


const PaymentBox = (props) => {
  return (
    <section>
     

        <div className="w-full bg-[#FFFFFF] p-4 rounded-3xl">
          <div className="flex gap-[20px] justify-center items-center">
            <div className={`${props.bg} rounded-full p-4`}>
              <span className={`${props.textCol} text-[40px]`}>
                {props.icon}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#718EBF] text-[20px] max-md:text-lg">{props.heading}</p>
              <p className="font-semibold text-[30px] max-md:text-lg">{props.price}</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default PaymentBox;
