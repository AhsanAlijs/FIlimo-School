import React, { useState } from "react";
import playIcon from "@/assets/home/school/playIcon.svg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "../ui/carousel";
import Image from "next/image";
// import { videoData } from "@/utils/arrays/Home";

const VideoCard = ({ videoData }) => {
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    setPlayingIndex(index);
  };

  return (
    <>
      <Carousel className="relative grid gap-y-6 grid-cols-[max-content_1fr_max-content] max-sm:grid-cols-1 justify-between items-center">
      <CarouselPrevious className=" max-sm:h-9 max-sm:w-9 disabled:opacity-0 max-sm:hidden " />

        <CarouselContent className="w-full">
          {videoData.map((item, index) => (
            <CarouselItem
              className="basis-1/3 max-md:basis-1/2 max-sm:basis-full p-2"
              key={index}
            >
              <div
                className={`relative ${
                  playingIndex !== null && playingIndex !== index
                    ? "cursor-pointer"
                    : ""
                }`}
                onClick={() => handlePlay(index)}
              >
                {playingIndex !== index ? (
                  <>
                    <Image
                      className="rounded-lg h-[200px] w-full object-cover"
                      src={item.image}
                      width={300}
                      height={200}
                      alt="Video Thumbnail"
                    />
                    <div className="absolute inset-0 flex p-3">
                      <div className="bg-white w-[100px] h-[40px] rounded-full flex items-center justify-center cursor-pointer drop-shadow-md">
                        <p className="text-lg flex items-center gap-2">
                          video
                          <Image
                            className="cursor-pointer"
                            src={playIcon}
                            width={20}
                            height={22}
                            alt="Play Icon"
                          />
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <video
                    className="rounded-lg h-[200px] w-full object-cover"
                    width={300}
                    height={200}
                    controls
                    autoPlay
                    src={item.video}
                    type="video/mp4"
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className=" max-sm:h-9 max-sm:w-9 disabled:opacity-0 max-sm:hidden" />

        <CarouselDots className="col-span-full" />
      </Carousel>
    </>
  );
};

export default VideoCard;

