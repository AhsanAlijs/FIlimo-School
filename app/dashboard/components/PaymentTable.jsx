import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdMoreHoriz } from "react-icons/md";

import tableProfile from "@/assets/dashboard/table-profile.png";
import profile from "@/assets/dashboard/navbar/profile.png";
import { useUserAuth } from "@/context/AuthContext";

const tableArr = [
  {
    courseImage: tableProfile,
    assignmentName: "21 Sep, 2021 at 2:14 AM",
    course: "Mastercards",
    dueDate: "American Express",
    status: "Pending",
  },
  {
    courseImage: profile,
    assignmentName: "21 Sep, 2021 at 2:14 AM",
    course: "Visa",
    dueDate: "American Express",
    status: "Completed",
  },
  {
    courseImage: tableProfile,
    assignmentName: "21 Sep, 2021 at 2:14 AM",
    course: "Mastercards",
    dueDate: "American Express",
    status: "Canceled",
  },
  {
    courseImage: profile,
    assignmentName: "21 Sep, 2021 at 2:14 AM",
    course: "Visa",
    dueDate: "American Express",
    status: "Completed",
  },
  {
    courseImage: profile,
    assignmentName: "21 Sep, 2021 at 2:14 AM",
    course: "Mastercards",
    dueDate: "American Express",
    status: "Pending",
  }, {
    courseImage: profile,
    assignmentName: "21 Sep, 2021 at 2:14 AM",
    course: "Mastercards",
    dueDate: "American Express",
    status: "Pending",
  }, {
    courseImage: profile,
    assignmentName: "21 Sep, 2021 at 2:14 AM",
    course: "Mastercards",
    dueDate: "American Express",
    status: "Pending",
  }, {
    courseImage: profile,
    assignmentName: "21 Sep, 2021 at 2:14 AM",
    course: "Mastercards",
    dueDate: "American Express",
    status: "Pending",
  }, {
    courseImage: profile,
    assignmentName: "21 Sep, 2021 at 2:14 AM",
    course: "Mastercards",
    dueDate: "American Express",
    status: "Pending",
  },
];

function PaymentTable({ subStu }) {
  const { user, token } = useUserAuth();
  console.log(subStu);

  return (

    <Table className="rounded-2xl">

      {
        user?.body?.user?.role === "admin" ?
          <>
            <TableHeader>
              <TableRow className="bg-[#ececec] text-black  font-medium">
                <TableHead className="w-[600px]">Date</TableHead>
                <TableHead className="text-center">PaymentId</TableHead>
                <TableHead className="text-center ">Amount</TableHead>
                <TableHead className="w-[600px]">Courses Name</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subStu?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium flex items-center gap-2 w-[200px]">
                    {new Date(item.createdAt).toLocaleDateString() ? new Date(item.createdAt).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell className="">{item.paymentId ? item.paymentId : "-"}</TableCell>
                  <TableCell className="text-center">{item.amount ? item.amount : "-"}</TableCell>
                  <TableCell className="text-center">{item.courses.map((items) => items.title ? items.title : "-")}</TableCell>
                  <TableCell>
                    <div className="flex justify-center w-full">
                      <div
                        className={`p-1 px-4 rounded-full text-center w-fit font-medium ${item.isPaid
                          ? "text-[#419B41]"
                          : "text-[#FD8E1F]"
                          }`}
                      >
                        {item.isPaid ? 'Completed' : 'Pending'}
                      </div>
                    </div>

                  </TableCell>
                  {/* <TableCell className="text-right">
                    {item.user?.phoneNumber ? item.user?.phoneNumber : "-"}
                  </TableCell> */}

                </TableRow>
              ))}
            </TableBody>
          </>
          :
          <>
            <TableHeader>
              <TableRow className="bg-[#ececec] text-black  font-medium">
                <TableHead className="text-center">Date</TableHead>
                <TableHead className="text-center">Student Name</TableHead>
                <TableHead className="text-center ">Grade</TableHead>
                <TableHead className="text-center">Student Id</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subStu?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-center">
                    {new Date(item.createdAt).toLocaleDateString() ? new Date(item.createdAt).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell className="text-center">{item.fullName ? item.fullName : "-"}</TableCell>
                  <TableCell className="text-center">{item.grade ? item.grade : "-"}</TableCell>
                  <TableCell className="text-center">{item.id ? item.id : "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
      }
      {/* <div className='text-2xl gap-5 justify-start'>
                <MdMoreHoriz />
              </div> */}
    </Table>
  );
}
export default PaymentTable;