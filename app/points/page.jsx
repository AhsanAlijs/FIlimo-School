'use client'
import React, { useEffect, useState } from 'react'
import { FaRegCirclePlay, FaUserPlus } from 'react-icons/fa6'
import star4 from '@/assets/points/star4.png'
import giftbox from '@/assets/points/giftbox.svg'
import { AiOutlineMessage } from "react-icons/ai";
import Image from 'next/image'
import { PiBookOpenText } from 'react-icons/pi';
import { TfiReload } from "react-icons/tfi";
import { GoStarFill } from 'react-icons/go';
import { IoGiftSharp, IoCheckmarkCircle  } from "react-icons/io5";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog'
import Link from 'next/link'

const page = () => {
  const [currentStep, setCurrentStep] = useState(0); 
  const [point1, setPoint1] = useState(0); 
  const [point2, setPoint2] = useState(5); 
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState('Get A Prize'); 
  const [timer, setTimer] = useState(null); 
  
  const handleReceiveAward = () => {
    // Update current step and points
    setCurrentStep(1);
    setPoint1(2); 
  
    // Disable the button and update text
    setIsButtonDisabled(true);
    const currentTime = new Date().toLocaleTimeString();
    setButtonText(`${currentTime}`);
  
    // Calculate remaining time until midnight
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const remainingTime = midnight.getTime() - now.getTime();
  
    // Re-enable button and update text after midnight
    setTimeout(() => {
      setIsButtonDisabled(false);
      setButtonText('Get A Prize');
      setTimer(null);
    }, 1000);
  
    // Update button text with countdown
    setTimer(setInterval(() => {
      setButtonText('wait');
    }, 0));
  };



  return (
    <>
      <section className='text-[#343534] pb-12 px-4 max-w-screen-2xl mx-auto max-2xl:px-24 max-md:px-14 max-sm:px-5'>
    

        {/* heading div */}

        <div className='flex justify-center mt-8 max-sm:mt-0'>
          <div className=" pt-10 ">
            <h1 className="text-[#E67D4B] text-[34px] max-xl:text-[30px]  max-md:text-[20px]  max-lg:text-[26px] font-bold  ">
               How to collect points?
            </h1>
            <div className="bg-[#F4BD50] h-2 w-[20%] border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div>
          </div>
        </div>

        {/* sections start */}

        <div className='max-w-[1010px] mx-auto mt-10  max-md:mt-8'>
            {/* section 1 */}

            <div className='bg-[#FFD7C5] w-[80%] mx-auto p-14 sm:p-20 rounded-[30px] max-lg:p-14 max-sm:p-6 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.10)]'>
              <p className='text-[16px] text-center max-md:text-lg max-sm:text-sm'>Remember that every week, you participate in the competition with the points you collected that week, and the points and prizes of each educational level are counted separately.</p>
            </div>

            {/* section 2 */}

            <div className='bg-white w-full rounded-[30px] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.10)] mt-8'>
              <div className='p-14 pb-4 max-md:p-8 max-sm:p-6'>
                <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center'>
                  <h2 className='text-[25px] font-semibold max-sm:text-lg capitalize'>By inviting friends</h2>
                  <Link href= "/loginstep">
                  <button className='bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white text-[16px] max-sm:text-sm max-sm:p-3 font-semibold p-4 rounded-full'>How do I invite?</button>
                  </Link>
                </div>
                <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center'>
                  <h2 className='text-[16px] font-semibold flex items-center gap-2 max-md:mt-6 max-md:items-start max-sm:text-sm '><FaUserPlus className='text-2xl text-[#818181]'/> Every successful invitation you make</h2>
                  <p className='flex items-center gap-2 text-[16px] p-4 max-md:p-0 font-semibold  rounded-full text-[#343534]'>30+ points <Image src={star4} width={30} alt="img"/></p>
                </div>
              </div>
              <hr className='border-[#EFEFEF] border-2'/>
              <div className='px-14 py-6 max-md:p-8 max-sm:p-6'>
                <p className='text-[#818181] max-md:text-center'>You haven't invited anyone yet.</p>
              </div>
            </div>


            {/* section 3 */}
            {/* stepper section */}

            <div className='bg-white w-full rounded-[30px] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.10)] mt-12'>
            <div className='p-14  max-md:p-8 max-sm:p-6'>
                <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center'>
                  <h2 className='text-[25px] font-semibold max-sm:text-lg capitalize'>Get your Prize Today</h2>


                  <Dialog className="w-full">
                    <DialogTrigger className={`bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white text-[20px] max-sm:text-sm max-sm:p-3 font-semibold p-4 rounded-full ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isButtonDisabled}> {buttonText}</DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogDescription className="w-[1010px] mx-4 max-xl:w-[90vw]  bg-white rounded-[50px] p-8 pb-12">
                            <div className='relative'>
                              <div className='flex justify-center'>
                                <div className='border-[12px] max-md:border-[6px] max-md:-top-24 max-sm:-top-20 absolute -top-40  border-white bg-[#F4BD50] h-[250px] max-md:w-[150px] max-md:h-[150px] w-[250px] max-sm:w-[100px] max-sm:h-[100px] rounded-full flex justify-center items-center drop-shadow-[0px_0px_20px_rgba(0,0,0,0.25)]'>
                                    <Image className='max-md:w-[90px] max-sm:w-[50px]' src={giftbox} alt="img"/>
                                </div>
                              </div>

                              <h2 className='text-[40px] font-bold text-[#F4BD50] text-center mt-32 max-md:mt-20 max-md:text-xl max-sm:mt-12'>Today’s Prize </h2>
                              <p className='text-[#E67D4B] flex items-center gap-4 justify-center text-[100px] font-bold mt-8 max-md:text-4xl'>2 <span className='bg-[#E67D4B] text-white w-[74px] max-md:h-10 max-md:w-10 h-[74px] flex justify-center items-center rounded-full'><GoStarFill className='text-[52px] max-md:text-2xl'/></span> </p>

                              <p className='text-[30px] max-md:text-lg font-medium text-center leading-10 mt-6 text-[#343534]'>Do you want to win A Prize again? Visit tomorrow.</p>

                              <div className='flex justify-center mt-6'>
                              <DialogClose><button onClick={handleReceiveAward} className='p-4 px-6 text-[30px] max-md:text-xl max-sm:text-lg font-bold text-white bg-[#E67D4B] rounded-[20px] drop-shadow-[0px_4px_20px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_0px_5px_rgba(0,0,0,0.40)] transition-all'>Receive An Award</button>  </DialogClose>
                              </div>
                            </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                 
                </div>
                <ol className="flex items-center w-full justify-between mt-8">
                    {/* Step 1 */}
                    <div className="w-full">
                      <p className="text-[20px] font-semibold mb-6 max-lg:text-lg max-md:text-sm flex items-center gap-1">
                        {currentStep >= 1 ? (
                          <>
                            {point1}
                            <Image src={star4} width={20} alt="Star" />
                          </>
                        ) : 'Today'}
                      </p>
                      <li className={`flex items-center justify-start text-[#F4BD50] dark:text-[#F4BD50] after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${currentStep >= 1 ? 'dark:after:border-[#F4BD50] after:border-[#F4BD50]' : 'dark:after:border-[#D9D9D9] after:border-[#D9D9D9]'}`}>
                        <span className={`flex items-center justify-center w-10 h-10 border-2 border-white rounded-full lg:h-12 lg:w-12 dark:bg-[#F4BD50] shrink-0 ${currentStep >= 1 ? 'bg-green-500' : 'bg-[#F4BD50]'}`}>
                          {currentStep >= 1 ? (
                            <IoCheckmarkCircle className='text-white text-3xl max-md:text-xl' />
                          ) : (
                            <GoStarFill className='text-white text-3xl max-md:text-xl' />
                          )}
                        </span>
                      </li>
                    </div>

                    {/* Step 2 */}
                    <div className="w-full">
                      <p className="text-[20px] font-semibold mb-6 max-lg:text-lg max-md:text-sm">
                        {currentStep >= 2 ? (
                          <>
                            {point2}
                            <Image src={star4} width={20} alt="Star" />
                          </>
                        ) : currentStep >= 1 ? 'Tomorrow' : 'Day 2'}
                      </p>
                      <li className={`flex items-center justify-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${currentStep >= 2 ? 'dark:after:border-[#F4BD50] after:border-[#F4BD50]' : 'dark:after:border-[#D9D9D9] after:border-[#D9D9D9]'}`}>
                        <span className={`flex items-center justify-center w-10 h-10 border-2 border-white rounded-full lg:h-12 lg:w-12 dark:bg-[#D9D9D9] shrink-0 ${currentStep >= 2 ? 'bg-[#F4BD50]' : 'bg-[#D9D9D9]'}`}>
                          <GoStarFill className="text-white text-2xl max-md:text-xl" />
                        </span>
                      </li>
                    </div>

                    {/* Step 3 */}
                    <div className="w-full">
                      <p className="text-[20px] font-semibold mb-6 max-lg:text-lg max-md:text-sm">
                        {currentStep >= 3 ? (
                          <>
                            {point3}
                            <Image src={star4} width={20} alt="Star" />
                          </>
                        ) : currentStep >= 2 ? 'Day 3' : 'Day 3'}
                      </p>
                      <li className={`flex items-center justify-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${currentStep >= 3 ? 'dark:after:border-[#F4BD50] after:border-[#F4BD50]' : 'dark:after:border-[#D9D9D9] after:border-[#D9D9D9]'}`}>
                        <span className={`flex items-center justify-center w-10 h-10 border-2 border-white rounded-full lg:h-12 lg:w-12 dark:bg-[#D9D9D9] shrink-0 ${currentStep >= 3 ? 'bg-[#F4BD50]' : 'bg-[#D9D9D9]'}`}>
                          <GoStarFill className="text-white text-2xl max-md:text-xl" />
                        </span>
                      </li>
                    </div>

                    {/* Step 4 */}
                    <div className="w-full">
                      <p className="text-[20px] font-semibold mb-6 max-lg:text-lg max-md:text-sm">
                        {currentStep >= 4 ? (
                          <>
                            {point4}
                            <Image src={star4} width={20} alt="Star" />
                          </>
                        ) : currentStep >= 3 ? 'Day 4' : 'Day 4'}
                      </p>
                      <li className={`flex items-center justify-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ${currentStep >= 4 ? 'dark:after:border-[#F4BD50] after:border-[#F4BD50]' : 'dark:after:border-[#D9D9D9] after:border-[#D9D9D9]'}`}>
                        <span className={`flex items-center justify-center w-10 h-10 border-2 border-white rounded-full lg:h-12 lg:w-12 dark:bg-[#D9D9D9] shrink-0 ${currentStep >= 4 ? 'bg-[#F4BD50]' : 'bg-[#D9D9D9]'}`}>
                          <GoStarFill className="text-white text-2xl max-md:text-xl" />
                        </span>
                      </li>
                    </div>

                    {/* Step 5 */}
                    <div className="w-[250px] max-md:w-[200px]">
                      <p className="text-[20px] font-semibold mb-6 max-lg:text-lg max-md:text-sm">
                        {currentStep >= 5 ? (
                          <>
                            {point5}
                            <Image src={star4} width={20} alt="Star" />
                          </>
                        ) : currentStep >= 4 ? 'Day 5' : 'Day 5'}
                      </p>
                      <li className="flex items-center">
                        <span className="flex items-center justify-center w-10 h-10 border-4 border-[#F4BD50] bg-white rounded-full lg:h-12 lg:w-12 dark:bg-white shrink-0">
                          <IoGiftSharp className="text-[#F4BD50] text-2xl max-md:text-xl" />
                        </span>
                      </li>
                    </div>
                  </ol>


                </div>
            </div>


            {/* section 4 */}

            <div className='bg-white w-full rounded-[30px] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.10)] mt-12'>
              <div className='p-14 pb-0 max-md:p-8 max-sm:p-6'>
                <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center'>
                  <h2 className='text-[25px] font-semibold max-sm:text-lg capitalize'>by studying</h2>
                  <Link href="/textbook/#text">
                  <button className='bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white text-[20px] max-sm:text-sm max-sm:p-3 font-semibold p-4 rounded-full'>my books</button>
                  </Link>
                
                </div>

                <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center mt-2'>
                  <h2 className='text-[16px] font-semibold flex items-center gap-2 max-md:mt-6 max-md:items-start max-sm:text-sm '><FaRegCirclePlay className='text-2xl text-[#818181]'/> Watch the training video</h2>
                  <p className='flex items-center gap-2 text-[16px] p-4 max-md:p-0 font-semibold  rounded-full text-[#343534]'>5+ points <Image src={star4} width={30} alt="img"/></p>
                </div>
              </div>

              <hr className='border-[#EFEFEF] border-2'/>

              <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center px-14 max-md:pb-6'>
                  <h2 className='text-[16px] font-semibold flex items-center gap-2 max-md:mt-6 max-md:items-start max-sm:text-sm '><AiOutlineMessage className='text-2xl text-[#818181]'/> Answer a question correctly</h2>
                  <p className='flex items-center gap-2 text-[16px] p-4 max-md:p-0 font-semibold  rounded-full text-[#343534]'>1+ points <Image src={star4} width={30} alt="img"/></p>
              </div>
              <hr className='border-[#EFEFEF] border-2'/>

              <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center px-14 pb-8'>
                  <h2 className='text-[16px] font-semibold flex items-center gap-2 max-md:mt-6 max-md:items-start max-sm:text-sm '><PiBookOpenText className='text-2xl text-[#818181]'/> Read the summary of the lessons</h2>
                  <p className='flex items-center gap-2 text-[16px] p-4 max-md:p-0 font-semibold  rounded-full text-[#343534]'>1+ points <Image src={star4} width={30} alt="img"/></p>
              </div>
       

            </div>

            {/* section 5 */}

            <div className='bg-white w-full rounded-[30px] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.10)] mt-12'>
              <div className='p-14  max-md:p-8 max-sm:p-6'>
                <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center'>
                  <h2 className='text-[30px] font-semibold max-sm:text-lg capitalize'>By reviewing the lessons</h2>
                  <Link href="/textbook/#text">
                  <button className='bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white text-[16px] max-sm:text-sm max-sm:p-3 font-semibold p-4 rounded-full'>How my books</button>
                  </Link>
                </div>
                <div className='flex justify-between items-center max-md:flex-col max-md:gap-4 max-md:text-center mt-4'>
                  <h2 className='text-[16px] font-semibold flex items-center gap-2 max-md:mt-6 max-md:items-start max-sm:text-sm w-[432px] max-sm:w-full'><TfiReload className='text-2xl  w-[100px] text-[#818181]'/>Every day you review a lesson, you earn double all its points! (Be aware that you can get double points for browsing once a day.)</h2>
                  <p className='flex items-center gap-2 text-[16px] p-4 max-md:p-0 font-semibold  rounded-full text-[#343534]'>30+ points <Image src={star4} width={30}/></p>
                </div>
              </div>
            </div>

              <div className='flex justify-center mt-6  '>
              <Link href="/shedule">
              <button className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white px-8 py-2 max-sm:px-4 max-sm:text-[14px] rounded-full font-semibold text-[20px]">
              Start learning
        </button>
        </Link>
              </div>

        </div>
      </section>
    </>
  )
}

export default page