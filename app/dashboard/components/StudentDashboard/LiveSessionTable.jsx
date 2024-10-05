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
import Image from "next/image"
import profileimg from "@/assets/dashboard/tableprofile1.svg"
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

  const invoices = [
    {
      invoice: "Haseeb",
      paymentStatus: "July 18, 2024",
      totalAmount: "$250.00",
      paymentMethod: "Active",
      img:profileimg,
    },
    {
      invoice: "Hairs",
      paymentStatus: "July 18, 2024",
      totalAmount: "$150.00",
      paymentMethod: "Opened",
      img:profileimg,
    },
    {
      invoice: "Ahsan",
      paymentStatus: "July 18, 2024",
      totalAmount: "$350.00",
      paymentMethod: "Completed",
      img:profileimg,
    },
    {
      invoice: "Tayyab",
      paymentStatus: "July 18, 2024",
      totalAmount: "$450.00",
      paymentMethod: "Active",
      img:profileimg,
    },
    {
        invoice: "Haseeb",
        paymentStatus: "July 18, 2024",
        totalAmount: "$250.00",
        paymentMethod: "Active",
        img:profileimg,
      },
      {
        invoice: "Hairs",
        paymentStatus: "July 18, 2024",
        totalAmount: "$150.00",
        paymentMethod: "Opened",
        img:profileimg,
      },
      {
        invoice: "Ahsan",
        paymentStatus: "July 18, 2024",
        totalAmount: "$350.00",
        paymentMethod: "Completed",
        img:profileimg,
      },
      {
        invoice: "Tayyab",
        paymentStatus: "July 18, 2024",
        totalAmount: "$450.00",
        paymentMethod: "Active",
        img:profileimg,
      },
      {
        invoice: "Hairs",
        paymentStatus: "July 18, 2024",
        totalAmount: "$150.00",
        paymentMethod: "Opened",
        img:profileimg,
      },
      {
        invoice: "Ahsan",
        paymentStatus: "July 18, 2024",
        totalAmount: "$350.00",
        paymentMethod: "Completed",
        img:profileimg,
      },
      {
        invoice: "Tayyab",
        paymentStatus: "July 18, 2024",
        totalAmount: "$450.00",
        paymentMethod: "Active",
        img:profileimg,
      },
   
  ]
  
  export function LiveSessionTable() {
    return (
      <Table className="rounded-2xl  w-full table-fixed bg-white">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-[#F8F9FD] w-full sticky top-0 ">
            <TableHead className="text-[#000000] text-[18px] w-[100px] max-sm:text-[14px]">Session</TableHead>
            <TableHead className="text-[#000000] text-[18px] w-[150px] max-sm:text-[14px]">Date and Time</TableHead>
            <TableHead className=" text-[#000000] text-[18px] w-[100px] max-sm:text-[14px]">Course</TableHead>
            <TableHead className=" text-[#000000] text-[18px] w-[100px] max-sm:text-[14px]"><div className="flex justify-end ml-2">Actions</div> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium flex justify-start items-center gap-5 w-[100px]"> {invoice.invoice}</TableCell>
              <TableCell className="w-[150px] ">{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell className=" flex justify-end"> <div className="w-[80px] flex justify-center bg-gradient-to-r from-[#E67D4B] to-[#F4BD50] rounded-full text-white py-2">Join </div> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  