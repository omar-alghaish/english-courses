"use client";
import AnimatedMessages from "@/components/animatedMessages";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import Avatar from "@/components/ui/avatar";

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
// import { AvatarFallback } from "@radix-ui/react-avatar";
import { Bell } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = [
    "Free shipping on orders over $50!",
    "20% off your first purchase!",
    "Shop our new arrivals today!",
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AnimatedMessages
          messages={messages}
          duration={3}
          className="text-sm"
        /><Separator />{" "}
        <div className=" ">
          
        <Header />
          <main className="">{children}</main>
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
