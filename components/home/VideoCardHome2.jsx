import React, { useState } from "react";
import playIcon from "@/assets/home/school/playIcon.svg";
import playBtn from '@/assets/home2/playBtn.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { videoData } from "@/utils/arrays/Home";

const VideoCardHome2 = (props) => {

  return (
    <>
   
            <div className="w-full">

                <div className='w-full'>
                    <div className='relative'>
                    <Image className='max-md:w-full h-[220px] max-sm:h-[180px] object-cover rounded-2xl'  src={props.videoData?.startsWith("http") ? props.videoData : `${process.env.NEXT_PUBLIC_BASE_URL}/${props.videoData}`} width={490} height={250}/>
                        <Image className='absolute inset-0 m-auto cursor-pointer' src={playBtn} width={40} height={40}/>
                    </div>
                </div>
            </div>

      
     
    </>
  );
};

export default VideoCardHome2;