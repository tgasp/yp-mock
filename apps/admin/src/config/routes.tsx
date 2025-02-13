import { Navigate } from "react-router-dom";
import { Settings, Users, Layout, Home } from "lucide-react";

// Page imports
import { LoginPage } from "../pages/login";
import { DashboardPage } from "../pages/dashboard";
import { UsersPage } from "../pages/users";
import { ContentPage } from "../pages/content";
import { SettingsPage } from "../pages/settings";

// Layout and protection
import { AdminLayout } from "../components/layout/admin-layout";

export interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  icon?: React.ComponentType;
  label?: string;
  showInNav?: boolean;
  protected?: boolean;
  children?: RouteConfig[];
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    protected: false,
  },
  {
    path: "/",
    element: <AdminLayout />,
    protected: true,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
        icon: Home,
        label: "Dashboard",
        showInNav: true,
      },
      {
        path: "users",
        element: <UsersPage />,
        icon: Users,
        label: "Users",
        showInNav: true,
      },
      {
        path: "content",
        element: <ContentPage />,
        icon: Layout,
        label: "Content",
        showInNav: true,
      },
      {
        path: "settings",
        element: <SettingsPage />,
        icon: Settings,
        label: "Settings",
        showInNav: true,
      },
      {
        path: "*",
        element: <Navigate to="/dashboard" replace />,
      },
    ],
  },
];

// Helper to get navigation items from routes
export const getNavigationItems = () =>
  routes
    .flatMap((route) => route.children || [])
    .filter((route) => route.showInNav)
    .map(({ path, icon, label }) => ({
      path: `/${path}`,
      icon,
      label,
    }));
