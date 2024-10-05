"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import { usePathname } from "next/navigation";
import { UserAuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CardContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Define a regex pattern for dynamic routes including /dashboard/quizes/[id]
  const isDynamicPath =
    /\/language\/\d+|\/lesson\/\d+|\/questionanswer|\/dashboard\/quizes\/[^\/]+|\/dashboard\/courses|\/startlearning/;

  // Define paths that should render Navbar2
  const pathnameFilter =
    [
      "/profile",
      "/degree",
      "/editstudent",
      "/editprofile",
      "/parents",
      "/home2",
      "/points",
      "/textbook",
      "/award",
      "/educationbase",
      "/change",
      "/profilepassword",
      "/passwordchangev",
      "/passwordchange2",
      "/avatar",
      "/schedule",
      "/learning",
      "/firsttextbook",
      "/questionanswer",
      "/newstudent",
      "/buysubscription",
      "/lesson",
      "language",
      "startlearning",
    ].includes(pathname) || isDynamicPath.test(pathname);

  // Check if the current pathname matches any special path where navbar and footer should not be displayed
  const isSpecialPath =
    pathname.startsWith("/dashboard") &&
    ([
      "/dashboard",
      "/dashboard/quizes",
      "/dashboard/courses",
      "/dashboard/assignments",
      "/dashboard/liveSession",
      "/dashboard/payment",
      "/dashboard/activitymonitor",
      "/dashboard/studentcourse",
      "/dashboard/notifications",
      "/dashboard/childprogress",
      "/dashboard/quizzes",
      "/dashboard/studentlivesession",
      "/dashboard/summer-courses",
      "/dashboard/teachers",
      "/dashboard/teacher-book",
      "/dashboard/session-exam",
    ].includes(pathname) ||
      isDynamicPath.test(pathname));

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserAuthProvider>
          <CartProvider>
            {/* Conditionally render Navbar based on pathname */}
            {isSpecialPath ? null : pathnameFilter ? (
              <Navbar2 />
            ) : pathname === "/signin" ? (
              ""
            ) : (
              <Navbar />
            )}

            {children}

            {/* Conditionally render Footer based on pathname */}
            {isSpecialPath ? null : pathnameFilter ? null : pathname ===
              "/signin" ? (
              ""
            ) : (
              <Footer />
            )}
          </CartProvider>
        </UserAuthProvider>
      </body>
    </html>
  );
}
