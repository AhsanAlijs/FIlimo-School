import React from "react";
import Image from "next/image";
import sectermbanner from "../../public/Rectangle 199.png";
import Link from "next/link";

const Intro2Banner = ({ specificLesson, bannerData,itemid }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4 pb-6">
      <div className="flex flex-col gap-2">
        {/* <Image
          className="object-cover object-center w-34 h-34 m-auto"
          src={bannerData.Image}
          alt={'asasa'}
          objectFit="cover"
          width={100}
          height={100}
        /> */}
        <img
          className="object-cover object-center w-[15%] h-[15%] m-auto"
          src={bannerData?.image}
          alt="1"
        />
        <div className="flex items-center justify-center ">
          <h1 className="title-font text-2xl sm:text-3xl md:text-4xl mb-2 font-bold  max-w-screen-lg mx-auto text-orange-500">
            {bannerData?.description}
          </h1>
        </div>
        {/* <div className='h-[10px]  w-[100px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B]'></div> */}
        {/* {para && <p className='text-gray-600 mt-5'>{para}</p> } */}
      </div>
      {/* lg:max-w-lg lg:w-full md:w-1/2 w-5/6 */}
      <div className="">
        {/* <Image
          className="object-cover object-center w-full h-full"
          src={secondaryImageSrc}
          alt={secondaryImageAlt}
          objectFit="cover"
        /> */}
        <Link href={`/startlearning/${specificLesson.id}?itemid=${itemid}`} >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/${specificLesson.thumbnail}`}
            className="object-cover object-center w-[100%] h-[1%] m-auto "
            alt="1"
          />
        </Link>
        <div className="flex items-center justify-center w-full">
          {specificLesson.description && (
            <p className="text-gray-600 mt-5 lg:max-w-lg lg:w-full md:w-1/2 ">
              {specificLesson.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro2Banner;