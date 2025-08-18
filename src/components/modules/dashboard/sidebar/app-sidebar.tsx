"use client";

import * as React from "react";
import {
  Book,
  GraduationCap,
  House,
  Pen,
  Settings,
  SquareTerminal,
  User,
  UserRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-menu";
import { NavUser } from "./nav-user";
import Link from "next/link";
// import Logo from "./public/assets/logo.png"
import Logo from "../../../../../public/assets/logo.png";
import Image from "next/image";
// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "User",
      url: "/admin/user",
      icon: User,
    },
    {
      title: "Class",
      url: "/admin/class",
      icon: House,
    },
    {
      title: "Subject",
      url: "/admin/subject",
      icon: Book,
    },
    {
      title: "Student",
      url: "/admin/student",
      icon: GraduationCap,
    },
    {
      title: "Teacher",
      url: "/admin/teacher",
      icon: UserRound,
    },
    {
      title: "Create-Result",
      url: "/admin/result",
      icon: Pen,
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "Profile",
          url: "/profile",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={""}>
                <div className="flex items-start justify-center">
                  <Image
                    src={Logo}
                    width={180}
                    height={50}
                    className="object-cover "
                    alt="logo"
                  />
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
