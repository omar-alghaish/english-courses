"use client";
import AnimatedMessages from "@/components/animatedMessages";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { AppSidebar } from "@/components/sidebar/AppSidebar";
import { ThemeLoader } from "@/components/themeLoder";

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
} from "@/components/ui/sidebar";
// import { AvatarFallback } from "@radix-ui/react-avatar";

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
        /><Separator />
        <div className=" ">
          <ThemeLoader />
        <Header  />
          <main className="">{children}</main>
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
