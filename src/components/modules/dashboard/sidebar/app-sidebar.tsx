"use client";
import * as React from "react";
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
import Logo from "../../../../../public/assets/logo.png";
import Image from "next/image";
import { data } from "./nev-item";
import { IUser } from "@/types";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: IUser;
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  // filter items by role
  const filteredNav = data.navMain.filter(
    (item) => !item.roles || item.roles.includes(user.role)
  );

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
        <NavMain items={filteredNav} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
