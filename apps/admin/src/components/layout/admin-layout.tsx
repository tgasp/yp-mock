import { useState } from "react";
import { useNavigate, Link, useLocation, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../lib/auth";
import { Button } from "../ui/button";
import { Bell, Search, Sun, Moon, ChevronDown, LucideIcon } from "lucide-react";
import { getNavigationItems } from "../../config/routes";
import { LanguageSwitcher } from "../ui/language-switcher";

export function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);
  const { t } = useTranslation("common");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const isActiveRoute = (path: string) => location.pathname === path;

  const navItems = getNavigationItems();

  return (
    <div
      className={`min-h-screen bg-background transition-colors duration-300 ${
        isDark ? "dark" : ""
      }`}
    >
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center border-b px-6">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            AdminHub
          </span>
        </div>
        <nav className="space-y-1.5 px-3 py-4">
          {navItems.map(({ path, icon: Icon, label }) => {
            const IconComponent = Icon as LucideIcon;
            return (
              <Button
                key={path}
                variant={isActiveRoute(path) ? "secondary" : "ghost"}
                className="w-full justify-start hover:bg-accent/50 transition-all duration-300"
                asChild
              >
                <Link to={path}>
                  {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
                  {t(`navigation.${label.toLowerCase()}`)}
                </Link>
              </Button>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search..."
                className="h-9 w-64 rounded-md border bg-background pl-8 pr-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-destructive" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" className="gap-2" onClick={handleLogout}>
              <img
                alt="Avatar"
                className="h-6 w-6 rounded-full"
                src="https://ui-avatars.com/api/?background=random"
              />
              <span>{user?.firstName || user?.email}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <Outlet />
      </main>
    </div>
  );
}
