import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Card = ({ cardDatas }) => {
  const getRandomColor = () => {
    const colors = [
      // Light colors
      '#FEE2E2', // Light red
      '#BFDBFE', // Light blue
      '#D1FAE5', // Light green
      '#FDE68A', // Light yellow
      '#E9D5FF', // Light purple
      '#FBCFE8', // Light pink
    
      // Medium and dark colors
      '#1F2937', // Dark gray
      '#4B5563', // Medium gray
      '#374151', // Dark gray
      '#6B7280', // Medium-dark gray
      '#111827', // Very dark gray
      '#1C1917', // Blackish
      '#3F3D56', // Muted purple
      '#2D3748', // Dark blue-gray
      '#2F855A', // Medium green
      '#2C7A7B', // Teal
    
      // Gradient colors
      '#FF9A8B', // Gradient light red to orange
      '#FEC163', // Gradient light orange to yellow
      '#F8C8DC', // Gradient pink to lavender
      '#D3B8AE', // Gradient beige to pink
      '#B9D9EB', // Gradient light blue to white
      '#A2D9CE', // Gradient light green to white
    
      // Additional vibrant colors
      '#FF5E57', // Coral red
      '#FFBE53', // Sunflower yellow
      '#6B5B95', // Deep purple
      '#FEBB55', // Apricot
      '#2A9D8F', // Sea green
      '#F6C6C6', // Pale pink
      '#FF7F50', // Coral
      '#FFD700', // Gold
      '#6A5ACD', // Slate blue
      '#FF6347', // Tomato
      '#90EE90', // Light green
      '#FF69B4', // Hot pink
      '#00CED1', // Dark turquoise
      '#F0E68C', // Khaki
      '#FF4500', // Orange red
      '#B22222', // Firebrick
      '#DAA520', // Goldenrod
      '#7FFF00', // Chartreuse
      '#D2691E', // Chocolate
      '#8A2BE2', // Blue violet
      '#5F9EA0', // Cadet blue
      '#FF1493', // Deep pink
      '#FF8C00', // Dark orange
      '#DDA0DD', // Plum
      '#F4A460', // Sandy brown
      '#98FB98', // Pale green
      '#FF00FF', // Magenta
      '#B0E0E6', // Powder blue
      '#F5DEB3', // Wheat
      '#C71585', // Medium violet red
      '#6A5ACD', // Slate blue
      '#8B4513', // Saddle brown
      '#D3D3D3', // Light gray
      '#F08080', // Light coral
      '#D2B48C', // Tan
      '#32CD32', // Lime green
      '#FFB6C1', // Light pink
      '#A52A2A', // Brown
      '#F5F5DC', // Beige
      '#8FBC8F', // Dark sea green
      '#20B2AA', // Light sea green
      '#C0C0C0', // Silver
      '#4682B4', // Steel blue
      '#FF6347', // Tomato
      '#E9967A', // Dark salmon
      '#D8BFD8', // Thistle
      '#D3D3D3', // Light gray
      '#F5F5F5', // White smoke
      '#FFE4E1', // Misty rose
      '#F0FFF0', // Honeydew
      '#E0FFFF', // Light cyan
      '#F0F8FF', // Alice blue
      '#FAEBD7', // Antique white
      '#F0FFFF', // Azure
      '#F5F5F5', // White smoke
      '#DCDCDC', // Gainsboro
      '#E6E6FA', // Lavender
      '#FFF0F5', // Lavender blush
      '#FAFAD2', // Light goldenrod yellow
      '#FFDAB9', // Peach puff
      '#FFEFD5', // Papaya whip
      '#FDF5E6', // Old lace
      '#F5FFFA', // Mint cream
      '#F0F8FF', // Alice blue
      '#D3D3D3', // Light gray
    ];
    
    
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className='max-xl:w-full'>
      <div className='flex shadow-lg  group rounded-2xl flex-col max-md:h-full max-xl:w-full w-[200px] text-center '>
        <div className=' p-6 max-md:p-4 rounded-t-2xl '
         style={{ backgroundColor: getRandomColor() }}>

        {cardDatas.image ? <Image
          className='w-[150px] h-[200px] max-md:h-[150px] rounded-lg shrink-0 object-cover object-top custom-after'
          src={cardDatas?.image?.startsWith("http") ? cardDatas.image : `${process.env.NEXT_PUBLIC_BASE_URL}/${cardDatas.image}`}
          height={200}
          width={360}
          alt="img"
        /> : ""}
        </div>
        <div className="py-2">
          <p className="text-gray-700 p-1 text-[15px] max-md:justify-center line-clamp-1 flex flex-row-reverse items-center justify-evenly  font-semibold mt-[12px]">
            {cardDatas.title.length > 10 ? `${cardDatas.title}` : cardDatas.title}
            <span className='text-[#FEC23B] max-md:hidden font-extraboldbold text-xl group-hover:-translate-x-3 transition-all'>
                <IoIosArrowBack />
            </span>
          </p>
          <p className="text-[13px] md:text-[15px] mt-[12px] font-semibold">
            {cardDatas.secText || ""}
          </p>
        </div>

      </div>
    </div>
  )
}

export default Card