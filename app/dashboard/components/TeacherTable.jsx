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
import { IoEyeSharp } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

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
  
  export function TeacherTable() {
    return (
      <Table className="rounded-2xl w-full table-fixed">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="bg-[#F8F9FD]  sticky top-0">
            <TableHead className="text-[#000000] text-[18px] w-[200px]">Name</TableHead>
            <TableHead className="text-[#000000] text-[18px] w-[250px] ">Date Of Submission</TableHead>
            <TableHead className="text-center text-[#000000] text-[18px] w-[200px]">Status</TableHead>
            <TableHead className="text-right text-[#000000] text-[18px] w-[150px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell><div className="font-medium flex justify-start items-center gap-5 w-[200px]"><Image alt="img" src={invoice.img} height={40} width={40}/> {invoice.invoice}</div></TableCell>
              <TableCell className="w-[250px] ">{invoice.paymentStatus}</TableCell>
              <TableCell > <div className="w-[200px] flex justify-center"><div className={`p-1 w-fit px-4 rounded-full font-medium ${ invoice.paymentMethod === "Completed" ? "text-[#419B41] bg-[#DAFFDA]" : invoice.paymentMethod === "Active" ? "text-[#702DFF] bg-[#EDECFE]" : "text-[#FF0000] bg-[#FFE5E5]"}`}> {invoice.paymentMethod}</div> </div> </TableCell>
              <TableCell className="flex w-[150px] justify-center items-center text-[25px] gap-5"><LuDownload className="text-[#419B41]" /><IoEyeSharp className="text-[#808080]" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  