
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Sidebar } from "./components/Sidebar";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  return (
    <div>
      <Sidebar children={children} />
    </div>



  );
}
