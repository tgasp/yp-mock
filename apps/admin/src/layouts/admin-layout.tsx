import { Outlet } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@ui/components/sidebar";

export function AdminLayout() {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex h-screen bg-slate-50 dark:bg-slate-950">
        <Sidebar>
          <SidebarHeader className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Admin Portal</span>
            </div>
            <SidebarTrigger />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  Users
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  Settings
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <Outlet />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
