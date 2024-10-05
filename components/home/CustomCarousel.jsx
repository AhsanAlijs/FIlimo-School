import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel'; // Adjust the path if necessary
import VideoCardHome2 from './VideoCardHome2'; // Adjust the path if necessary
import Spinner from '../Spinner/Spinner';

const CustomCarousel = ({ videoData }) => {
  return (
    <div className="relative">
      <Carousel className="relative">
        <CarouselContent className="flex overflow-hidden">
          {videoData.length > 0 ? (
            videoData.map((lesson, index) => (
              <CarouselItem className="flex-shrink-0 w-full max-w-xs p-2" key={index}>
                <VideoCardHome2 videoData={lesson?.body.lesson.thumbnail} />
              </CarouselItem>
            ))
          ) : (
            <Spinner />
          )}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg cursor-pointer">
          <span className="text-xl">‹</span>
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg cursor-pointer">
          <span className="text-xl">›</span>
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;