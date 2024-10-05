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
   
  ]
  
  export function ActivityMonitoring() {
    return (
      <Table className="rounded-2xl w-full table-fixed bg-white">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-[#F8F9FD] sticky top-0">
            <TableHead className="text-[#000000] text-[18px] w-[200px]">Date</TableHead>
            <TableHead className="text-[#000000] text-[18px] w-[250px] ">Time</TableHead>
            <TableHead className=" text-[#000000] text-[18px] w-[200px]"><div className="flex justify-start ml-16">Activity Type</div> </TableHead>
            <TableHead className="text-right text-[#000000] text-[18px] w-[150px]">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium flex justify-start items-center gap-5 w-[200px]"> {invoice.invoice}</TableCell>
              <TableCell className="w-[250px] ">{invoice.paymentStatus}</TableCell>
              <TableCell > <div className="w-[200px] flex justify-center"><div className={`p-1 w-fit px-4 rounded-full font-medium ${ invoice.paymentMethod === "Completed" ? "text-[#419B41] bg-[#DAFFDA]" : invoice.paymentMethod === "Active" ? "text-[#702DFF] bg-[#EDECFE]" : "text-[#FF0000] bg-[#FFE5E5]"}`}> {invoice.paymentMethod}</div> </div> </TableCell>
              <TableCell>    <div className='flex items-center  gap-5 justify-end'>
                   {invoice.totalAmount}
                </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  