"use client"

import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "../navbar/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noHeaderRoutes = ["/connexion", "/compte", "/instructor/courses/create" ];

  const shouldShowHeader = !noHeaderRoutes.includes(pathname);

  return (
    <>
        {shouldShowHeader && <Navbar/>} 
        {children}
    </>
  );
}
