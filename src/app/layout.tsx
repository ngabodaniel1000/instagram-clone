import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Nav from "../components/Nav";

export default function Layout({children}:{children:React.ReactNode}){
  return(
<html>
  <body className="flex">
    <nav className="bg-[#F8F9FA ] w-[15%] min-h-screen border-r-2 border-gray pr-10">
      <Nav />
    </nav>
    <div className="bg-white w-[60%] min-h-screen">
  {children}
    </div>
  </body>
</html>
  )
}