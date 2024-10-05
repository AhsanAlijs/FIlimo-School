"use clint";
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
import ChildProgressLineChart from "../components/ChildProgressLineChart";
import BarChartChild from "../components/BarChartChild";

const ChildProgress = () => {
  const tableArr = [
    {
      subjects: "Reading",
      assignment: "Block Report",
      dueDate: "May 20",
      status: "submitted",
      grade: "A",
      teacher: "200",
      tGrade: "A",
    },
    {
      subjects: "Maths",
      assignment: "Problem Set",
      dueDate: "May 20",
      status: "Not submitted",
      grade: "",
      teacher: "200",
      tGrade: "B",
    },
    {
      subjects: "Science",
      assignment: "Research Paper",
      dueDate: "May 20",
      status: "submitted",
      grade: "B",
      teacher: "200",
      tGrade: "B",
    },
    {
      subjects: "History",
      assignment: "Presentation",
      dueDate: "May 20",
      status: "Not submitted",
      grade: "",
      teacher: "200",
      tGrade: "C",
    },
    {
      subjects: "Arts",
      assignment: "Quiz",
      dueDate: "May 20",
      status: "submitted",
      grade: "B",
      teacher: "200",
      tGrade: "A",
    },
    {
      subjects: "Geography",
      assignment: "Research Paper",
      dueDate: "May 20",
      status: "submitted",
      grade: "A",
      teacher: "200",
      tGrade: "A",
    },
    {
      subjects: "Biology",
      assignment: "Presentation",
      dueDate: "May 20",
      status: "Not submitted",
      grade: "",
      teacher: "200",
      tGrade: "B",
    },
    {
      subjects: "Biology",
      assignment: "Presentation",
      dueDate: "May 20",
      status: "Not submitted",
      grade: "",
      teacher: "200",
      tGrade: "B",
    },
    {
      subjects: "Biology",
      assignment: "Presentation",
      dueDate: "May 20",
      status: "Not submitted",
      grade: "",
      teacher: "200",
      tGrade: "B",
    },
    {
      subjects: "Biology",
      assignment: "Presentation",
      dueDate: "May 20",
      status: "Not submitted",
      grade: "",
      teacher: "200",
      tGrade: "B",
    },
    {
      subjects: "Biology",
      assignment: "Presentation",
      dueDate: "May 20",
      status: "Not submitted",
      grade: "",
      teacher: "200",
      tGrade: "B",
    },
  ];

  const quizData = [
    {
      subject: "Reading",
      quiz: "Vocabulary",
      date: "May 10",
      score: "95",
      status: "Complete",
    },
    {
      subject: "Maths",
      quiz: "Multiplication",
      date: "May 15",
      score: "85",
      status: "Complete",
    },
    {
      subject: "Science",
      quiz: "Solar System",
      date: "May 12",
      score: "90",
      status: "Complete",
    },
    {
      subject: "History",
      quiz: "Revolutionary War",
      date: "May 20",
      score: "80",
      status: "Complete",
    },
    {
      subject: "History",
      quiz: "Revolutionary War",
      date: "May 20",
      score: "80",
      status: "Complete",
    },
    {
      subject: "History",
      quiz: "Revolutionary War",
      date: "May 20",
      score: "80",
      status: "Complete",
    },
    {
      subject: "History",
      quiz: "Revolutionary War",
      date: "May 20",
      score: "80",
      status: "Complete",
    },
    {
      subject: "History",
      quiz: "Revolutionary War",
      date: "May 20",
      score: "80",
      status: "Complete",
    },
  ];

  return (
    <section className="mb-4">
      <div className="flex items-center lg:flex-row  md:flex-col flex-col justify-between gap-10 p-6  ">
        {/* Assignments Table */}
        <div className="lg:w-[90%]  rounded-2xl">
          <p className="font-bold text-2xl mb-4 p-5">Assignments</p>
          <div className="h-[500px]  grid grid-cols-1 rounded-2xl shadow-lg bg-white overflow-y-auto ">
            <Table className="rounded-2xl w-full table-fixed">
              <TableHeader className="bg-[#ececec] sticky top-0">
                <TableRow className="bg-[#ececec] hover:bg-[#ececec] font-medium">
                  <TableHead className="px-4 py-4 text-black sticky top-0 z-10 bg-[#ececec]">
                    Subjects
                  </TableHead>
                  <TableHead className="text-center text-black sticky top-0 z-10 bg-[#ececec]">
                    Assignment
                  </TableHead>
                  <TableHead className="text-center text-black sticky top-0 z-10 bg-[#ececec]">
                    Due Date
                  </TableHead>
                  <TableHead className="text-center text-black sticky top-0 z-10 bg-[#ececec]">
                    Grade
                  </TableHead>
                  <TableHead className="text-center text-black sticky top-0 z-10 bg-[#ececec]">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableArr.map((item) => (
                  <TableRow key={item.subjects}>
                    <TableCell className="font-medium px-4 py-4 text-[#838799]">
                      {item.subjects}
                    </TableCell>
                    <TableCell className="text-center text-[#838799]">
                      {item.assignment}
                    </TableCell>
                    <TableCell className="text-center text-[#838799]">
                      {item.dueDate}
                    </TableCell>
                    <TableCell className="text-center text-[#838799]">
                      {item.grade ? item.grade : "-"}
                    </TableCell>
                    <TableCell className="flex items-center justify-center shrink-0">
                      <div
                        className={`p-1 px-4 rounded-full text-center w-fit font-medium ${
                          item.status === "submitted"
                            ? "text-[#419B41] bg-[#DAFFDA]"
                            : "text-[#E67D4B] bg-[#FFEEDA]"
                        }`}
                      >
                        {item.status}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Grades Overview Table */}
        <div className="lg:w-[50%] w-full rounded-2xl ">
          <p className="font-bold text-2xl p-5 mb-4">Grades Overview</p>
          <div className="h-[500px]  grid grid-cols-1 rounded-2xl shadow-lg bg-white overflow-y-auto">
            <Table className="rounded-2xl table-fixed">
              <TableHeader>
                <TableRow className="bg-[#ececec] sticky top-0  font-medium">
                  <TableHead className="px-4 py-4 text-black">
                    Subjects
                  </TableHead>
                  <TableHead className="text-center  text-black">
                    Teacher
                  </TableHead>
                  <TableHead className="text-center  text-black">
                    Grades
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableArr.map((item) => (
                  <TableRow key={item.teacher}>
                    <TableCell className="font-medium px-4 py-4 text-[#838799]">
                      {item.subjects}
                    </TableCell>
                    <TableCell className="text-center  text-[#838799]">
                      {item.teacher}
                    </TableCell>
                    <TableCell className="flex items-center justify-center ">
                      <div
                        className={`p-1 px-4 rounded-full text-center w-fit font-medium ${
                          item.tGrade === "A"
                            ? "text-[#419B41] bg-[#DAFFDA]"
                            : item.tGrade === "B"
                            ? "text-[#E67D4B] bg-[#FFEEDA]"
                            : "text-[#702DFF] bg-[#EDECFE]"
                        }`}
                      >
                        {item.tGrade}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      {/* Quiz Table */}
      <div className="flex w-full items-center justify-center p-6 ">
        <div className=" w-full  rounded-xl ">
          <p className="font-bold text-2xl mb-4 p-5">Quizzes</p>
          <div className=" h-[500px]  grid grid-cols-1 rounded-2xl shadow-lg bg-white overflow-y-auto">
            <Table className="rounded-2xl w-full table-fixed">
              <TableHeader>
                <TableRow className=" bg-[#ececec] hover:bg[#ececec] sticky top-0 font-medium">
                  <TableHead className="px-4 py-2 text-black">
                    Subjects
                  </TableHead>
                  <TableHead className="text-center px-4 py-6 text-black">
                    Quiz
                  </TableHead>
                  <TableHead className="text-center  text-black">
                    Date
                  </TableHead>
                  <TableHead className="text-center  text-black">
                    Score
                  </TableHead>
                  <TableHead className="text-center  text-black">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {quizData.map((item) => (
                  <TableRow key={item.subject}>
                    <TableCell className="font-medium px-4 py-6 text-[#838799]">
                      {item.subject}
                    </TableCell>
                    <TableCell className="text-center  text-[#838799]">
                      {item.quiz}
                    </TableCell>
                    <TableCell className="text-center  text-[#838799]">
                      {item.date}
                    </TableCell>
                    <TableCell className="text-center  text-[#838799]">
                      {item.score}%
                    </TableCell>
                    <TableCell className="flex items-center justify-center  shrink-0">
                      <div
                        className={`p-1 px-4 rounded-full text-center w-fit font-medium text-[#419B41] bg-[#DAFFDA]`}
                      >
                        {item.status}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="">
          <p className="font-bold text-2xl mb-4">Performance Trends</p>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-center gap-6   w-full">
          <div className="rounded-xl shadow-xl w-full">
            <ChildProgressLineChart />
          </div>
          <div className="rounded-xl shadow-xl w-full">
            <BarChartChild />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildProgress;
