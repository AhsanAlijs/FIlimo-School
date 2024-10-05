'use client'
import React from 'react'
import Image from 'next/image';
import auntii from "../../public/kidsreadybannerimg.png";
import farsibook from "../../public/farsi-book.png";
import WhenCard from "../../components/preschool/WhenCard";
import ArDiv2 from "@/components/arcomponent/ArDiv2";
// import kidsReadyBanner from "../../public/kidsReadyBanner.png";
import kidsReadyBanner from "../../public/kidsreadybannerimg.png";
import IntroBanner from "@/components/introbanner/IntroBanner";
const bannerContent = [
  {
    primaryImageSrc: farsibook,
    secondaryImageSrc: kidsReadyBanner,
    title: "Kids, ready for school",
    para: "In this part, we learn the second version of the Persian book, which includes teaching personal items such as toothbrushes, towels, glasses, and napkins. We also talk about the manners of how to go to school and what we should and can't bring to school. Next, using word cards, we read pictures and practice writing the first pages of the book. You can find the topic of this section on pages 5 and 6 of the textbook.",
  },
];
const page = () => {
  return (
    <>
      {bannerContent &&
        bannerContent.map((data, index) => {
          return <IntroBanner bannerContent={data} key={index} />;
        })}

      <WhenCard />

      <ArDiv2 />
    </>
  );
};

export default page;
