"use client";

import React, { useEffect, useState } from "react";
import PaymentBox from "../components/PaymentBox";

import PaymentCard from "../components/PaymentCard";
import PaymentTable from "../components/PaymentTable";
import Component from "../components/Paymentchart";
import PaymentClient from "../components/PaymentClient";
import { GrAddCircle } from "react-icons/gr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PaymentMaster from "../components/PaymentMaster";
import { TbMoneybag } from "react-icons/tb";
import { FaFileInvoiceDollar, FaHandHoldingUsd, FaPiggyBank } from "react-icons/fa";
import { useUserAuth } from "@/context/AuthContext";

const page = () => {
  const { user, token } = useUserAuth()

  const [subStu, setSubStu] = useState();
  const fetchCourses = async () => {
    try {
      const response = await fetch(

        user?.body?.user?.role === "admin" ? `${process.env.NEXT_PUBLIC_BASE_URL}/subscriptions` : `${process.env.NEXT_PUBLIC_BASE_URL}/users/teacher/students`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );

      if (response.ok) {
        const result = await response.json();
        setSubStu(user?.body?.user?.role === "admin" ? result?.body?.subscriptions : result?.body?.students);
      } else {
        console.error("Failed to fetch courses");
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };



  useEffect(() => {
    fetchCourses()
  }, [])

  console.log(subStu);
  

  return (
    <section>

      <div className="grid grid-cols-1 max-xl:grid-cols-1 mt-4 gap-6">
        <div className="bg-white">
          <div className="py-6 px-4 ">
            <h1 className="font-medium text-[24px]">Student MemberShip History</h1>
          </div>
          <div className=" h-[400px] overflow-y-auto">
            <PaymentTable subStu={subStu} />
          </div>
        </div>
      </div>


    </section>
  );
};

export default page;