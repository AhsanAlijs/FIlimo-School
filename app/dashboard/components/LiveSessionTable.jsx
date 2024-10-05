import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import tableProfile from '@/assets/dashboard/table-profile.png'
import profile from '@/assets/dashboard/navbar/profile.png'
import Image from 'next/image'
import { IoEyeSharp } from 'react-icons/io5'
import { FaPen } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

  
  const tableArr = [
    {
      courseImage: tableProfile,
      session: "Geometry Basics",
      course: "Math 102",
      dueDate: "August 12, 2024, 3:00 PM",
      status: "Open"
    },
    {
      courseImage: profile,
      session: "Geometry Basics",
      course: "Math 103",
      dueDate: "August 12, 2024, 3:00 PM",
      status: "Open"
    },
    {
      courseImage: tableProfile,
      session: "Geometry Basics",
      course: "Math 104",
      dueDate: "August 12, 2024, 3:00 PM",
      status: "Open"
    },
    {
      courseImage: profile,
      session: "Geometry Basics",
      course: "Math 101",
      dueDate: "August 12, 2024, 3:00 PM",
      status: "Open"
    },
    {
      courseImage: profile,
      session: "Geometry Basics",
      course: "Math 101",
      dueDate: "August 12, 2024, 3:00 PM",
      status: "Open"
    },
    {
      courseImage: profile,
      session: "Geometry Basics",
      course: "Math 101",
      dueDate: "August 12, 2024, 3:00 PM",
      status: "Open"
    },
    {
      courseImage: profile,
      session: "Geometry Basics",
      course: "Math 101",
      dueDate: "August 12, 2024, 3:00 PM",
      status: "Open"
    },
  ]


  export function LiveSessionTable() {
    return (
      <Table className="rounded-2xl table-fixed w-full">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader >
             <TableRow className="bg-[#ececec] text-black font-medium sticky top-0">
                  <TableHead className="w-[200px]">Session</TableHead>
                  <TableHead className="text-center  w-[300px]">Date and Time</TableHead>
                  <TableHead className="w-[100px]" >Course</TableHead>
                  <TableHead  className="text-center w-[200px]" >Actions</TableHead>
                </TableRow>
        </TableHeader>
        <TableBody>
          {tableArr.map((item) => (
            <TableRow>
                <TableCell className="font-medium w-[200px]">{item.session}</TableCell>
                <TableCell className="text-center ">{item.dueDate}</TableCell>
                <TableCell className=" ">{item.course}</TableCell>
                <TableCell className="text-right ">
                <div className='flex items-center text-[16px] font-medium gap-3 justify-end flex-wrap'>
                    <button className="bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] text-white p-1 px-6 rounded-full">Start</button>
                    <button className="border border-[#E67D4B] text-[#E67D4B] p-1 px-6 rounded-full">Reschedule</button>
                    <button className="bg-[#E2E2E2] p-1 px-6 rounded-full text-[#808080]">Cancel</button>
                </div>
                </TableCell>
          </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }


  