"use client";

import * as React from "react";
import { Bot, Settings, SquareTerminal } from "lucide-react";

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
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Teacher",
      url: "/",
      icon: Bot,
      items: [
        {
          title: "Manage Products",
          url: "",
        },
        {
          title: "Manage Categories",
          url: "",
        },
        {
          title: "Manage Brands",
          url: "",
        },
      ],
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
                    width={170}
                    height={50}
                    className="object-cover"
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
