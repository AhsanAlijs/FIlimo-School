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
  
  export function CompletedQuiz() {
    return (
      <Table className="rounded-2xl  w-full table-fixed bg-white">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-[#F8F9FD] w-full sticky top-0 ">
            <TableHead className="text-[#000000] text-[18px] w-[100px] max-sm:text-[14px]">Quiz Title</TableHead>
            <TableHead className="text-[#000000] text-[18px] w-[150px] max-sm:text-[14px]">Course Name</TableHead>
            <TableHead className=" text-[#000000] text-[18px] w-[100px] max-sm:text-[14px]">Due Date</TableHead>
            <TableHead className=" text-[#000000] text-[18px] w-[100px] max-sm:text-[14px]"><div className="flex justify-start ml-4">Status</div> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium flex justify-start items-center gap-5 w-[100px]"> {invoice.invoice}</TableCell>
              <TableCell className="w-[150px] ">{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell > <div className="w-[100px] flex justify-center"><div className={`p-1 w-fit px-4 rounded-full font-medium ${ invoice.paymentMethod === "Completed" ? "text-[#419B41] bg-[#DAFFDA]" : invoice.paymentMethod === "Active" ? "text-[#702DFF] bg-[#EDECFE]" : "text-[#FF0000] bg-[#FFE5E5]"}`}> {invoice.paymentMethod}</div> </div> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  