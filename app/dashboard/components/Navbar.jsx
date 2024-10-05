"use client";
import React from "react";
import coursesIcon from "@/assets/dashboard/navbar/direct-inbox.svg";
import folder from "@/assets/dashboard/navbar/folder-open.svg";
import task from "@/assets/dashboard/navbar/task.svg";
import people from "@/assets/dashboard/navbar/people.svg";
import wallet from "@/assets/dashboard/navbar/wallet.svg";
import progress from "@/assets/dashboard/navbar/progress.svg";
import home from "@/assets/dashboard/navbar/home.svg";
import monitor from "@/assets/dashboard/navbar/monitor.svg";
import lesson from "@/assets/dashboard/navbar/lesson.svg";
import notification from "@/assets/dashboard/navbar/notification.png";
import profile from "@/assets/dashboard/navbar/profile.png";
import exam from '@/assets/dashboard/navbar/exam.png'
import teacher from '@/assets/dashboard/navbar/teacher.png'
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem, 
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserAuth } from "@/context/AuthContext";

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUserAuth();
  return (
    <>
      <div className="flex items-center justify-between max-sm:gap-4 max-sm:flex-col-reverse max-md:ml-12 max-sm:ml-0  ">
        <div className="flex items-center gap-4">
          <Image
            alt="image"
            className="max-md:w-[40px]"
            src={
              pathname === "/dashboard/courses"
                ? coursesIcon
                : pathname === "/dashboard/assignments"
                ? folder
                : pathname === "/dashboard/liveSession"
                ? people
                : pathname === "/dashboard/quizes"
                ? task
                : pathname === "/dashboard/payment"
                ? wallet
                : pathname === "/dashboard/childprogress"
                ? progress
                : pathname === "/dashboard/activitymonitor"
                ? monitor
                : pathname === "/dashboard/notifications"
                ? notification
                : pathname === "/dashboard/studentcourse"
                ? coursesIcon
                : pathname === "/dashboard/quizzes"
                ? task
                : pathname === "/dashboard/studentlivesession"
                ? people
                : pathname === "/dashboard/lesson"
                ? lesson
                : pathname === "/dashboard/teachers"
                ? teacher
                : home
            }
            width={57}
            height={57}
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-[32px] font-extrabold capitalize max-md:text-lg">
              {pathname.slice(11)}
            </h2>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  {pathname === "/dashboard" ? (
                    <BreadcrumbPage className="max-md:text-xs">
                      Dashboard
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {pathname !== "/dashboard" ? (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className="max-md:text-sm">
                      <BreadcrumbPage className="capitalize">
                        {pathname.slice(11)}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ) : (
                  ""
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* <Image
            alt="img"
            className="max-md:w-[50px]"
            src={profile}
            width={60}
            height={60}
          /> */}
          <h2 className="text-[21px] font-medium max-md:text-sm">
            {user?.body?.user.fullName}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
