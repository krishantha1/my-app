"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";


const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "forgotPassword", href: "/Forgotp" }

];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [input,setInput] = useState("");
  const pathname = usePathname();

  return (
    <div>
      <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
       </div>
      
        {navLinks.map((link) => {
         const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");

          return(
               <Link className= {isActive ? "font-bold mr-5": "text-green-500 mr-4"} 
                 href={link.href} key={link.name}>
            {link.name}
            </Link>
          );
          
        })} 
        {children}
    </div>
  );
}
