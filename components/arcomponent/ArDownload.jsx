import Image from 'next/image';
import React from 'react'

const ArDownload = ({data}) => {
  return (
    <section className="px-4">
      <div className="w-[1010px] max-xl:w-full mx-auto  py-4 ">
        <div className="w-[78%] max-md:w-full mx-auto">
          <h1 className="text-[#E67D4B] text-[40px]  max-sm:text-[16px] max-md:text-[30px] font-bold text-center ">
            {data.head}
          </h1>
          <div className="bg-[#F4BD50] h-2 w-[40%] max-md:w-full ml-6 max-md:ml-2 border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
        </div>
        <p className="text-center pt-10 text-[16px] max-sm:text-[14px]">{data.paraline}</p>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 max-sm:gap-10 pt-20 max-sm:pt-10">
          <div className="flex flex-col items-center">
            <Image src={data.img1} alt="hello" className="w-[100px] max-sm:w-[80px]" />
            <button className="mt-12 max-sm:mt-6 font-semibold bg-[#F4BD50] px-6 py-4 border-b-[#E67D4B] border-r-0 border-t-0 border-l-0 border-4">
              {data.btntext1}
            </button>
          </div>

          <div className="flex flex-col items-center">
            <Image src={data.img2} alt="hello1" className="w-[100px] max-sm:w-[80px]" />
            <button className="mt-12 max-sm:mt-6  font-semibold bg-[#F4BD50] px-6 py-4 border-b-[#E67D4B] border-r-0 border-t-0 border-l-0 border-4">
              {data.btntext2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArDownload
