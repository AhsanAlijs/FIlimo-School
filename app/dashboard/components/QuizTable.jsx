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
import { IoEyeSharp } from 'react-icons/io5'
import { FaPen } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
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
  
  export function QuizTable() {
    return (
      <Table className="rounded-2xl   table-fixed bg-white  ">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="">
          <TableRow className="bg-[#F8F9FD] sticky top-0 ">
            <TableHead className="text-[#000000] text-[18px] w-[200px] ">Quiz Title</TableHead>
            <TableHead className="text-[#000000] text-[18px] w-[250px] text-center ">Course</TableHead>
            <TableHead className=" text-[#000000] text-[18px] w-[200px] text-center ">Total Questions</TableHead>
            <TableHead className=" text-[#000000] text-[18px] w-[200px] "> <div className="flex justify-center">Status</div> </TableHead>
            <TableHead className=" text-[#000000] text-[18px] w-[200px] text-end">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
           

            
          {invoices.map((invoice ,index) => (
            <TableRow key={index} className="w-full">
              <TableCell className=" font-medium  gap-5 w-[200px] ">{invoice.invoice}</TableCell>
              <TableCell className="text-center w-[250px] ">{invoice.paymentStatus}</TableCell>
              <TableCell className="text-center w-[250px] ">{invoice.totalAmount}</TableCell>
              <TableCell > <div className="text-center justify-center w-[200px] flex "><div className={`p-1 w-fit px-4 rounded-full font-medium ${ invoice.paymentMethod === "Completed" ? "text-[#419B41] bg-[#DAFFDA]" : invoice.paymentMethod === "Active" ? "text-[#702DFF] bg-[#EDECFE]" : "text-[#FF0000] bg-[#FFE5E5]"}`}> {invoice.paymentMethod}</div> </div> </TableCell>
              <TableCell>    <div className='flex items-center text-2xl gap-5 justify-end'>
                    <IoEyeSharp className='text-[#E67D4B] cursor-pointer'/>
                    <FaPen className='text-[#419B41] cursor-pointer'/>
                    <RiDeleteBin6Line className='text-[#FF0000] cursor-pointer'/>
                </div></TableCell>
            </TableRow>
          ))}
       
        </TableBody>
      </Table>
    )
  }
  