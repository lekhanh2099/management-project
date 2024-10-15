"use client";

import React, { useEffect } from "react";
import AuthProvider from "./authProvider";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
 const isSidebarCollapsed = false;
 const isDarkMode = false;

 useEffect(() => {
  if (isDarkMode) {
   document.documentElement.classList.add("dark");
  } else {
   document.documentElement.classList.remove("dark");
  }
 });

 return (
  <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
   <Sidebar />
   <main
    className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${
     isSidebarCollapsed ? "" : "md:pl-64"
    }`}
   >
    <Navbar />
    {children}
   </main>
  </div>
 );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
 return (
  <AuthProvider>
   <DashboardLayout>{children}</DashboardLayout>
  </AuthProvider>
 );
};

export default DashboardWrapper;
