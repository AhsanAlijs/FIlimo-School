"use client";
import React, { useEffect } from "react";
import logo from "../assets/navbar/logo.png";
import Image from "next/image";
import { FaApple, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigLeftIcon } from "lucide-react";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);

  const matchingRoutes = ["/blogs"];

  // Check if pathname matches any route
  const shouldShowDiv = matchingRoutes.some((route) => {
    // Debugging: Log route and pathname comparison
    console.log(`Checking if '${pathname}' includes '${route}'`);
    return pathname.match(route);
  });

  // Debugging: Log the result of matching
  useEffect(() => {
    console.log("Does pathname match any route?", shouldShowDiv);
  }, [shouldShowDiv]);

  return (
    <>
      {!shouldShowDiv ? (
        <footer className="section-width flex gap-6 bg-[#f6f6f6] text-[#666666] justify-between max-xl:flex-wrap max-xl:justify-start px-4 max-md:flex-col max-sm:flex-col-reverse flex-row-reverse max-w-screen-2xl mx-auto  max-md:px-14 max-sm:px-5 py-14">
          <div className="max-sm:pb-20">
            <div dir="rtl" className=" max-sm:flex max-sm:justify-end max-sm:items-end">
              <Image
                src={logo}
                alt="logo"
                className="w-[220px] "
                width={261}
                height={36}
              />
            </div>

            <div dir="rtl">
              <h3 className="text-[16px] mt-8 max-sm:text-end">
                Film school? More than school!
              </h3>
              <p className="text-[16px] w-[300px]  max-md:w-full max-sm:text-end">
                It is important for us to make studying enjoyable. Now the
                delicious educational content from the first grade to the ninth
                grade is in front of you; Wherever you want and on any device
                you connect to the Internet.
              </p>
            </div>
            <div className="flex gap-4 text-3xl justify-end items-end mt-8">
              <FaInstagram color="#999999" />
              <FaXTwitter color="#999999" />
              <FaTelegramPlane color="#999999" />
            </div>
          </div>

          <div dir="rtl">
            <h2 className="text-[20px] font-normal text-[#343534]">Link</h2>
            {/* <div className="bg-[#F4BD50] h-2 w-44 border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div> */}
            <ul className="capitalize list-disc list-outside ml-6 marker:text-[#E67D4B] marker:text-2xl flex flex-col gap-2 p-2">
              <li>
                <Link href="/signup" className="text-sm">
                  Buy a subscription
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-sm">
                  Rules
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/ardownload" className="text-sm">
                  Download the application
                </Link>
              </li>
              <li>
                {" "}
                <Link href="/blogs" className="text-sm">
                  Weblog
                </Link>
              </li>
            </ul>
          </div>

          <div dir="rtl">
            <h2 className="text-[20px] font-normal text-[#343534]" dir="rtl">
              Educational bases
            </h2>
            {/* <div className="bg-[#F4BD50] h-2 w-44 border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div> */}
            <ul className="capitalize list-disc list-outside ml-6 marker:text-[#E67D4B] marker:text-2xl flex flex-col h-[280px] gap-x-8 flex-wrap gap-2 text-wrap p-2">
              <li>
                <Link href="/preschool" className="text-sm">
                  Preschool
                </Link>
              </li>
              <li>
                <Link href="/preschool/#first" className="text-sm">
                  The first base
                </Link>
              </li>
              <li>
                <Link href="/preschool/#second" className="text-sm">
                  Second base
                </Link>
              </li>
              <li>
                <Link href="/preschool/#third" className="text-sm">
                  Third grade
                </Link>
              </li>
              <li>
                <Link href="/preschool/#fourth" className="text-sm">
                  Fourth grade
                </Link>
              </li>
              <li>
                <Link href="/preschool/#fifth" className="text-sm">
                  Fifth grade
                </Link>
              </li>
              <li>
                <Link href="/preschool/#sixth" className="text-sm">
                  Sixth grade
                </Link>
              </li>
              <li>
                <Link href="/preschool/#seven" className="text-sm">
                  Seventh grade
                </Link>
              </li>
              <li>
                <Link href="/preschool/#eight" className="text-sm">
                  Eighth grade
                </Link>
              </li>
              <li>
                <Link href="/preschool/#ninth" className="text-sm">
                  Ninth grade
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm">
                  Tenth grade
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm">
                  Eleventh grade
                </Link>
              </li>
              <li>
                <Link href="/" className="text-sm">
                  Twelfth grade
                </Link>
              </li>
            </ul>
          </div>

          <div dir="rtl" className="pb-4">
            <h2 className="text-[20px] font-normal text-[#343534]">
              Download the application
            </h2>
            {/* <div className="bg-[#F4BD50] h-2 w-40 border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0"></div> */}
            <p className="text-[#666666] font-normal  mt-2" dir="rtl">
              Version 2.16.8
            </p>
            <div className="w-[280px]" dir="rtl">
              <button className="bg-transparent w-full flex gap-6 hover:gap-10 hover:transition-all hover:duration-75 hover:ease-linear  items-center py-4 px-4 border-2 border-[#F8C146] rounded-md mt-2">
                <span className="flex items-center gap-2 text-[#343534] font-semibold">
                  <DiAndroid color="#A5CF4C" className="text-2xl" />
                  Direct download
                </span>
                <span className="text-[#F8C146] text-xl font-bold mr-2">
                  <MdArrowBackIos fontWeight={30} size={30} />{" "}
                </span>
              </button>

              <button className="bg-transparent w-full flex  hover:gap-1 hover:transition-all hover:duration-75 hover:ease-linear  items-center py-4 px-4 border-2 border-[#F8C146] rounded-md mt-8">
                <span className="flex items-center gap-2 text-[#343534] font-semibold">
                  <FaApple color="#cccccc" className="text-2xl" />
                  Filmo school web app
                </span>
                <span className="text-[#F8C146] text-xl font-bold mr-2">
                  <MdArrowBackIos fontWeight={30} size={30} />
                </span>
              </button>
            </div>
          </div>
        </footer>
      ) : (
        <div>
          {/* Your custom footer */}
          <div className="flex flex-wrap gap-14 justify-evenly mt-10 sm:mt-20">
            <div>
              <Image
                className="object-cover object-center w-72"
                src={logo}
                alt="blog"
              />
            </div>
            <div className="text-gray-600 uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1">
              <h1>CONTACT US</h1>
              <div className="bg-[#F4BD50] h-2 max-md:w-[40%]  border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
              <p className="text-sm">0334573908764</p>
            </div>
            <div className="text-gray-600 uppercase text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-2xl font-bold mb-1">
              <h1>Filmo school social media</h1>
              <div className="bg-[#F4BD50] h-2 max-md:w-[40%] w-[60%]  border-b-[#E67D4B] border-2 border-r-0 border-t-0 border-l-0 mb-3"></div>
              <div className="flex gap-7 mt- justify-center">
                {/* Social Media Icons */}
                <FaInstagram className="w-10 h-10" />
                <FaXTwitter className="w-10 h-10" />
                <FaTelegramPlane className="w-10 h-10" />
              </div>
            </div>
          </div>

          <div className="bg-gray-100 mt-14">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row text-center">
              <p className="text-gray-600 mx-auto">
                All rights belong to{" "}
                <span className="text-orange-600">Filmo Madrasa</span> and its
                reproduction is allowed only by mentioning the name and link to
                the source.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
