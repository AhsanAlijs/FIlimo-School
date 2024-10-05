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



import { IoEyeSharp } from 'react-icons/io5'
import { FaPen } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
  

  

  const tableArr = [
    {
      courseName: "Math 4 - Multiplication",
      price:"$29.99",
      startDate: "June 1, 2023",
      completeDate: "July 31, 2023"
    },
    {
      courseName: "Science 7 - Elements",
      price: "$39.99",
      startDate: "May 15, 2023",
      completeDate: "July 15, 2023"
    },
    {
      courseName: "Science 7 - Elements",
      price: "$39.99",
      startDate: "May 15, 2023",
      completeDate: "July 15, 2023"
    },
    {
      courseName: "Science 7 - Elements",
      price: "$39.99",
      startDate: "May 15, 2023",
      completeDate: "July 15, 2023"
    },
    {
      courseName: "Science 7 - Elements",
      price: "$39.99",
      startDate: "May 15, 2023",
      completeDate: "July 15, 2023"
    },
    {
      courseName: "Science 7 - Elements",
      price: "$39.99",
      startDate: "May 15, 2023",
      completeDate: "July 15, 2023"
    },
    {
      courseImage: "profile",
      courseName: "Science 7 - Elements",
      price: "$39.99",
      startDate: "May 15, 2023",
      completeDate: "July 15, 2023"
    },
  ]


  export function CoursePurchaseTable() {
    return (
      <Table className="rounded-2xl bg-white table-fixed overflow-x-auto">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
             <TableRow className="bg-[#ececec] text-black font-medium sticky top-0">
                  <TableHead className="w-[200px]">Course</TableHead>
                  <TableHead className="w-[150px]" >Price</TableHead>
                  <TableHead className="text-center w-[150px]">Start date</TableHead>
                  <TableHead className="text-end w-[200px]">Completion date</TableHead>
                </TableRow>
        </TableHeader>
        <TableBody>
          {tableArr.map((item, index) => (
            <TableRow key={index}>
                <TableCell className="font-medium flex items-center gap-2 w-[200px]">{item.courseName}</TableCell>
                <TableCell className="text-[#E67D4B] w-[150px]">{item.price}</TableCell>
                <TableCell className="text-center text-[#E67D4B] w-[150px]">{item.startDate}</TableCell>
                <TableCell className=" text-end text-[#E67D4B] w-[200px]">{item.completeDate}</TableCell>

          </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }