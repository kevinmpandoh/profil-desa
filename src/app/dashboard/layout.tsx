"use client";

import Navbar from "@/components/layout/Navbar";
import AppSidebar from "@/components/layout/Sidebar";

// import AppHeader from "@/layout/AppHeader";

// import Backdrop from "@/layout/Backdrop";
import React from "react";
import { useSidebarStore } from "../stores/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebarStore();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      {/* <Backdrop /> */}
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <Navbar />
        {/* Page Content */}
        <main className="mx-auto max-w-[1246px] md:p-10 flex-1 p-6 overflow-y-auto ">
          {children}
        </main>
      </div>
    </div>
  );
}
