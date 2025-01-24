import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import Link from "next/link";

const generalItems = [
  {
    title: "Home",
    url: "/home",
    icon: Home,
  },
  {
    title: "Discover",
    url: "/discover",
    icon: Inbox,
  },
  {
    title: "My courses",
    url: "/my-courses",
    icon: Calendar,
  },
  {
    title: "Certificates",
    url: "/certificates",
    icon: Search,
  },
  {
    title: "Quizzs",
    url: "/quizz",
    icon: Settings,
  },
];

const otherItems = [
  {
    title: "Support",
    url: "/support",
    icon: Home,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-center w-full text-xl">English</div> <SidebarTrigger className="block absolute top-2 right-2 md:hidden" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-md text-sidebar-foreground/90 justify-between">
            General
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {generalItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="h-[45px] rounded-xl" asChild>
                    <Link
                      href={item.url}
                      className="pl-6 text-[16px] text-sidebar-foreground/80"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* <SidebarGroup>
          <SidebarGroupLabel className="text-md text-sidebar-foreground/90">
            Courses
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {coursesItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="pl-6 text-[16px] text-sidebar-foreground/80"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}

        <SidebarGroup>
          <SidebarGroupLabel className="text-md text-sidebar-foreground/90">
            Other
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {otherItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="h-[45px] rounded-xl" asChild>
                    <Link
                      href={item.url}
                      className="pl-6 text-[16px] text-sidebar-foreground/80"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="w-[90%] mx-auto h-[180px] bg-primary p-4 gap-4  rounded-3xl flex flex-col items-center justify-center text-primary-foreground text-center ">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur.
          <Button className="bg-popover w-full text-primary">click</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
