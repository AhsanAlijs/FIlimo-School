"use client"
import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import coursesIcon from '@/assets/dashboard/navbar/direct-inbox.svg'
import folder from '@/assets/dashboard/navbar/folder-open.svg'
import task from '@/assets/dashboard/navbar/task.svg'
import people from '@/assets/dashboard/navbar/people.svg'
import wallet from '@/assets/dashboard/navbar/wallet.svg'
import home from '@/assets/dashboard/navbar/home.svg'
import logout from '@/assets/dashboard/navbar/logout.svg'
import progress from '@/assets/dashboard/navbar/progress.svg'
import monitor from '@/assets/dashboard/navbar/monitor.svg'
import lesson from '@/assets/dashboard/navbar/lesson.svg'
import notifications from "../../../assets/dashboard/navbar/notification.png"
import logo from '@/assets/dashboard/logo.png'
import exam from '@/assets/dashboard/navbar/exam.png'
import teacher from '@/assets/dashboard/navbar/teacher.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Navbar from "./Navbar"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useUserAuth } from '@/context/AuthContext'
export function Sidebar(props) {
  const pathname = usePathname()
  // const { user,  loading } = useUserAuth();
  // console.log(user)
  // if (loading) {
  //   return <div>fetching your data...</div>;
  // }

  const { user, signout } = useUserAuth();
  console.log(user);
  

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block sticky top-0 h-screen">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold ">
              <span className=""><Image src={logo} width={194} height={26} /></span>
            </Link>
            {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <div className="flex-1">
            {
              user?.body?.user?.role === "admin" ?
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                  {/* <Link
                href="/dashboard"
                className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${pathname === "/dashboard" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
              >
                 <Image src={home} height={21} width={21} alt="img"/>
                Dashboard
              </Link> */}

                  <Link
                    href="/dashboard/courses"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/courses" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image src={coursesIcon} height={21} width={21} alt="img" />
                    Grade Courses
                  </Link>
                  <Link
                    href="/dashboard/summer-courses"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/summer-courses" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image src={coursesIcon} height={21} width={21} alt="img" />
                    Skill courses
                  </Link>
                  <Link
                    href="/dashboard/session-exam"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${pathname === "/dashboard/session-exam" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image src={exam} height={21} width={21} alt="img" />
                    Session Exam
                  </Link>
                  

                  <Link
                    href="/dashboard/teachers"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${pathname === "/dashboard/teachers" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image src={teacher} height={21} width={21} alt="img" />
                    Teachers
                  </Link>
                  <Link
                    href="/dashboard/payment"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/payment" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image alt="img" src={wallet} height={21} width={21} />
                    Payment
                  </Link>
             
                  {/* <Link
                    href="/dashboard/assignments"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/assignments" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image alt="img" src={folder} height={21} width={21} />
                    Assignments
                  </Link> */}
                  {/* <Link
                    href="/dashboard/quizes"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/quizes" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image alt="img" src={task} height={21} width={21} />
                    Quizzes
                  </Link> */}
                  {/* <Link
                    href="/dashboard/liveSession"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/liveSession" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image alt="img" src={people} height={21} width={21} />
                    Live Session
                  </Link> */}
                  {/* <Link
                    href="/dashboard/lesson"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/lesson" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image src={lesson} height={21} width={21} alt="img" />
                    lesson
                  </Link> */}
                  {/* <Link
                    href="/dashboard/payment"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/payment" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image alt="img" src={wallet} height={21} width={21} />
                    Payment
                  </Link> */}
                </nav>
                :
                user?.body?.user?.role === "teacher" ?
                  <nav className="grid items-start px-2 text-sm font-medium lg:px-4">

                    <Link
                      href="/dashboard/teacher-book"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/teacher-book" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                    >
                      <Image src={coursesIcon} height={21} width={21} alt="img" />
                      Courses
                    </Link>

                    <Link
                      href="/dashboard/session-exam"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${pathname === "/dashboard/session-exam" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                    >
                      <Image src={exam} height={21} width={21} alt="img" />
                      Session Exam
                    </Link>
                    <Link
                      href="/dashboard/liveSession"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/liveSession" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                    >
                      <Image alt="img" src={people} height={21} width={21} />
                      Live Session
                    </Link>
                    <Link
                    href="/dashboard/payment"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/payment" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                  >
                    <Image alt="img" src={wallet} height={21} width={21} />
                    Payment
                  </Link>
                    {/* <Link
                      href="/dashboard/activitymonitor"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${pathname === "/dashboard/activitymonitor" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                    >
                      <Image src={monitor} height={21} width={21} alt="img" />
                      Activity Monitor
                    </Link> */}


                    {/* <Link
                      href="/dashboard/quizes"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/quizes" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                    >
                      <Image alt="img" src={task} height={21} width={21} />
                      Quizzes
                    </Link> */}
                      {/* <Link
                        href="/dashboard/notifications"
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/notifications" ? "text-[#E67D4B] hover:text-[#c0673d]" : "text-muted-foreground"}`}
                      >
                        <Image src={notifications} height={21} width={21} alt="img" />
                        Notifications
                      </Link> */}
                  </nav>
                  :
                  <nav></nav>
                  
            }





            {/* Child Progress End */}



          </div>
          <div className="mt-auto p-4">
            <button
              onClick={signout}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#F13E3E] transition-all hover:text-[#d43939]"
            >
              <Image alt="img" src={logout} height={21} width={21} />
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden absolute top-2 left-2"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
            {
              user?.body?.user?.role === "admin" ?
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 mt-8">
                
                <SheetClose asChild>
                  <Link
                    href="/dashboard/courses"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/courses" ? "bg-gray-100" : "bg-transparent"}`}
                  >
                    <Image src={coursesIcon} height={21} width={21} alt="img" />
                    Grade Courses
                  </Link>
                  </SheetClose>
                  <SheetClose asChild>
                  <Link
                    href="/dashboard/summer-courses"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/summer-courses" ? "bg-gray-100" : "bg-transparent"}`}
                  >
                    <Image src={coursesIcon} height={21} width={21} alt="img" />
                    Skill courses
                  </Link>
                  </SheetClose>
                  <SheetClose asChild>
                  <Link
                    href="/dashboard/session-exam"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${pathname === "/dashboard/session-exam" ? "bg-gray-100" : "bg-transparent"}`}
                  >
                    <Image src={exam} height={21} width={21} alt="img" />
                    Session Exam
                  </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                  <Link
                    href="/dashboard/teachers"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${pathname === "/dashboard/teachers" ? "bg-gray-100" : "bg-transparent"}`}
                  >
                    <Image src={teacher} height={21} width={21} alt="img" />
                    Teachers
                  </Link>
                  </SheetClose>
                  <SheetClose asChild>
                  <Link
                    href="/dashboard/payment"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/payment" ? "bg-gray-100" : "bg-transparent"}`}
                  >
                    <Image alt="img" src={wallet} height={21} width={21} />
                    Payment
                  </Link>
                  </SheetClose>
             
                
                </nav>
                :
                user?.body?.user?.role === "teacher" ?
                  <nav className="grid items-start px-2 text-sm font-medium lg:px-4 mt-8">

                    <SheetClose asChild>
                    <Link
                      href="/dashboard/teacher-book"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/teacher-book" ? "bg-gray-100" : "bg-transparent"}`}
                    >
                      <Image src={coursesIcon} height={21} width={21} alt="img" />
                      Courses
                    </Link>
                    </SheetClose>

                    <SheetClose asChild>
                    <Link
                      href="/dashboard/session-exam"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary ${pathname === "/dashboard/session-exam" ? "bg-gray-100" : "bg-transparent"}`}
                    >
                      <Image src={exam} height={21} width={21} alt="img" />
                      Session Exam
                    </Link>
                    </SheetClose>

                    <SheetClose asChild>
                    <Link
                      href="/dashboard/liveSession"
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/liveSession" ? "bg-gray-100" : "bg-transparent"}`}
                    >
                      <Image alt="img" src={people} height={21} width={21} />
                      Live Session
                    </Link>
                    </SheetClose>
                    <SheetClose asChild>
                    <Link
                    href="/dashboard/payment"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${pathname === "/dashboard/payment" ? "bg-gray-100" : "bg-transparent"}`}
                  >
                    <Image alt="img" src={wallet} height={21} width={21} />
                    Payment
                  </Link>
                  </SheetClose>
            
                  </nav>
                  :
                  <nav></nav>
            }
              {/* <nav className="grid gap-2 text-lg font-medium">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold mb-8"
                  >
                    <span className=""><Image alt="img" src={logo} width={194} height={26} /></span>
                  </Link>
                </SheetClose>


                <SheetClose asChild>
                  <Link
                    href="/dashboard/teacher-book"
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground  ${pathname === "/dashboard/courses" ? "bg-gray-100" : "bg-transparent"}`}
                  >
                    <Image alt="img" src={coursesIcon} height={21} width={21} />
                    Courses
                  </Link>
                </SheetClose>


              </nav> */}
              <div className="mt-auto">

                <button
                  onClick={signout}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-[#F13E3E] transition-all hover:text-[#d43939]"
                >
                  <Image alt="img" src={logout} height={21} width={21} />
                  Logout
                </button>
              </div>
            </SheetContent>
          </Sheet>


        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-[#f5f5f5]">
          {/* <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div> */}
          {
            pathname === "/dashboard"
              ? null
              : <Navbar />
          }

          {props.children}
        </main>
      </div>
    </div>
  )
}