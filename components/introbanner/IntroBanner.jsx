import React from "react";
import Image from "next/image";
import sectermbanner from "../../public/Rectangle 142.png";
import Spinner from "../Spinner/Spinner";

const IntroBanner = ({ bannerContent }) => {
  console.log(bannerContent);
  // if (!bannerContent) return <Spinner/>;
  return (
    <div
      className="max-w-screen-2xl mx-auto flex py-10 flex-col items-center w-full section-width  max-2xl:px-36 max-md:px-14 max-sm:px-5
"
    >
      <div dir="rtl" className="flex items-center justify-center gap-3 max-sm:pr-">
        <Image
          className="object-cover object-center w-20 h-28 pb-3 rounded-lg shadow-lg"
          src={
            bannerContent?.image
              ? `${bannerContent.image}`
              : `${process.env.NEXT_PUBLIC_BASE_URL}/${bannerContent.thumbnail}`
          }
          alt="img"
          objectFit="cover"
          height={200}
          width={150}
        />
        <h2 className="title-font text-lg mb-2 font-bold text-black w-[20rem]">
          {bannerContent.description}
        </h2>
        {/* <div className='h-[10px]  w-[100px] bg-[#F4BD50] border-b-2 border-transparent border-b-[#E67D4B]'></div>
        {bannerContent.description && (
          <p className="text-gray-600 mt-5">{bannerContent.description}</p>
        )} */}
      </div>
      {/* lg:max-w-3xl lg:w-full  */}
      <div className="lg:w-[60%]  max-md:w-full">
        {/* <Image
          className="object-cover object-center w-full h-full"
          src={bannerContent.thumbnail}
          alt="img"
          objectFit="cover"
          width={500}
          height={500}
        /> */}

        <video
          className="object-cover object-center w-full h-full rounded-xl mt-6"
          controls
          width={500}
          height={500}
          src={
            bannerContent.videoUrlShort
              ? `${process.env.NEXT_PUBLIC_BASE_URL}/${bannerContent.videoUrlShort}`
              : `${process.env.NEXT_PUBLIC_BASE_URL}/${bannerContent.demoVideo}`
          }
          type="video/mp4"
          onError={(e) => console.log("Video error:", e.target.error)}
        />
      </div>
    </div>
  );
};

export default IntroBanner;
