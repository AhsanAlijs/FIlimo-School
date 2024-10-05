"use client";

import React, { useState } from "react";
import Image from "next/image";
import Subscriptionimg from "../../public/BuySubscriptionimg.png";
import FAQ from "../faqcomp/FAQ";
import { useUserAuth } from "@/context/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCart } from "@/context/CardContext";
import { RiCloseLine, RiIndeterminateCircleLine } from "react-icons/ri";

const BuySubscriptionComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, removeFromCart } = useCart();
  const { token } = useUserAuth();
  const [paymentData, setPaymentData] = useState(null);

  const createPayment = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/subscriptions/create-payment`,
        {
          method: "POST",
          body: JSON.stringify({ coursesId: cart.map((item) => item.id) }),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result);

        setPaymentData(result.body);
        setIsOpen(true);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="max-w-screen-2xl mx-auto ">
        <div className="max-w-4xl mx-auto">
          {/* Subscription heading */}

          <div className="w-[90%] mx-auto max-md:w-full">
            <Image
              src={Subscriptionimg}
              className="rounded-t-[22px] transition-all object-cover "
              alt="Subscription"
            />
            <div className=" mx-auto bg-gradient-to-r from-[#8E5F99] to-[#6B5DA1] p-6 max-sm:p-2 text-white w-[96%] max-sm:w-[98%] max-sm:h-120 border-4 border-white border-t-0 h-[150px] rounded-b-2xl ">
              <h1 className="text-[30px] font-bold max-lg:text-[20px] max-sm:text-[14px]">
                Subscription of skill courses with degree
              </h1>
              <div className="flex justify-between max-sm:flex-col gap-2  items-center mt-4 max-sm:mt-2">
                <div className="flex gap-4 max-md:gap-2 ">
                  <div className="w-2 max-md:w-1 h-10 max-md:h-6 bg-[#F4BD50]"></div>
                  <h2 className="font-bold text-[30px] max-lg:text-[20px] max-md:text-[16px]">
                    {cart &&
                      cart.reduce((prev, curr) => prev + Number(curr.price), 0)}
                  </h2>
                </div>
                {cart && cart.length > 0 && (
                  <div className="flex justify-center items-center">
                    <button
                      onClick={createPayment}
                      className="bg-[#F4BD50] px-6 py-2 text-lg max-md:text-text-sm max-lg:px-4 max-sm:p-2 font-semibold text-neutral-800 rounded-2xl shadow"
                    >
                      Create checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {cart && cart.length > 0 && (
          <Table className="rounded-2xl mt-8 max-w-4xl mx-auto">
            <TableHeader>
              <TableRow className="bg-[#ececec]">
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Remove</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((item, i) => (
                <TableRow key={i}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.description.slice(0, 15)}...</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <button
                      onClick={(e) => removeFromCart(item.id)}
                      className="text-2xl gap-5 justify-start text-red-600"
                    >
                      <RiIndeterminateCircleLine className="size-6" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-[#ececec]">
                <TableCell colSpan="2" className="font-semibold">
                  Total
                </TableCell>
                <TableCell>
                  {cart.reduce((prev, curr) => prev + Number(curr?.price), 0)}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}

        {paymentData && (
          <Dialog open={isOpen} onOpenChange={setIsOpen} className="">
            <DialogContent className="bg-white rounded max-h-[90vh]  flex flex-col gap-4 p-0">
              <div className="relative overflow-y-auto h-full p-4 flex flex-col gap-4">
                {/* <DialogHeader className="w-full">
              <DialogTitle className="text-center">FIB Payment</DialogTitle>
              <p className="text-xs text-center">{paymentData.paymentId}</p>
            </DialogHeader> */}

                <h2 className="text-center text-xl font-medium">FIB Payment</h2>
                <p className="text-xs text-center">{paymentData.paymentId}</p>

                <p>Scan the following qr code with your FIB app</p>
                <div className="flex justify-center items-center w-full mt-6">
                  <img
                    src={paymentData.qrCode}
                    alt="Qr code"
                    className="max-w-96 w-full"
                  />
                </div>

                <p className="text-center">
                  <span>Or enter the following code:</span>
                  <br />
                  <span className="font-semibold">
                    {paymentData.readableCode}
                  </span>
                </p>
{/* 
                <p className="flex flex-col">
                  <span className="text-center">
                    Or click to open mobile app directly
                  </span>
                  <span className="flex gap-4 justify-center items-center mt-2 text-center">
                    <a
                      href={paymentData.personalAppLink}
                      className="rounded-full border-2 border-emerald-600 p-2 text-sm flex-wrap"
                    >
                      Personal app
                    </a>
                    <a
                      href={paymentData.businessAppLink}
                      className="rounded-full border-2 border-emerald-600 p-2 text-sm flex-wrap"
                    >
                      Business app
                    </a>
                    <a
                      href={paymentData.corporateAppLink}
                      className="rounded-full border-2 border-emerald-600 p-2 text-sm flex-wrap"
                    >
                      Corporate app
                    </a>
                  </span>
                </p> */}

                <p className="text-center text-xs">
                  Valid until{" "}
                  {new Date(paymentData.validUntil).toLocaleString()}
                </p>
                <DialogClose asChild>
                  <button className="absolute top-2 right-2">
                    <RiCloseLine className="size-6" />
                  </button>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* -----Toggle Button----- */}

        {/* <div className="border-gray-400 border-b-2 py-5 flex items-start w-[90%] sm:w-3/4 md:w-2/3 lg:w-2/4 mt-8 mx-auto">
          <button className="mr-3 text-white" onClick={toggleDiv}>
            {isOpen ? (
              <div className="bg-[#F4BD50] p-2 max-sm:p-1 rounded-full   text-2xl">
                <FaMinus />
              </div>
            ) : (
              <div className="bg-[#F4BD50] p-2 max-sm:p-1 rounded-full   text-2xl">
                <FaPlus />
              </div>
            )}
          </button>
          <div onClick={toggleDiv}>
            <h1 className="md:text-2xl lg:text-4xl cursor-pointer font-bold text-gray-700">
              Discount code / gift subscription
            </h1>

            {isOpen && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 pb-3">
                  If you have a discount code, enter it below:
                </p>
                <div className="max-sm:flex">
                  <button className="bg-gradient-to-r rounded-full from-[#E67D4B] text-sm text-white px-6 py-4 max-sm:py-2 max-sm:px-2.5  text-[20px] to-[#F4BD50] font-semibold">
                    Use the discount
                  </button>
                  <button className="border-2 text-sm px-6 py-4 max-sm:py-3 max-sm:px-2.5 rounded-full text-gray-700 font-semibold ml-3 text-[20px]">
                    Discount code
                  </button>
                </div>
              </div>
            )}
          </div>
        </div> */}

        {/* ******** */}

        {/* <div className="mx-auto py-10 max-sm:py-4 w-[90%] sm:w-3/4 md:w-2/3 lg:w-2/4">
          <ul className="space-y-4 text-gray-600 py-5">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-3xl text-emerald-500" />
              Weekly prize for the most active users of Filmomdarse
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-3xl text-emerald-500" />
              Access to all course content for review or pre-reading
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-3xl text-emerald-500" />
              Weekly prize for the most active users of Filmomdarse
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-3xl text-emerald-500" />
              Access to all course content for review or pre-reading
            </li>
          </ul>
        </div> */}

        {/* <div className="px-4 max-w-screen-xl mx-auto max-2xl:px-24 max-md:px-14 max-sm:px-5">
          <CarouselCard2 />
        </div> */}

        <div className="mx-auto w-3/3 md:w-2/3">
          <FAQ />
        </div>
      </section>
    </>
  );
};

export default BuySubscriptionComp;
