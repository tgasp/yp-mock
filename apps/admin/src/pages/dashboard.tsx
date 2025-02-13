import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth";
import { Button } from "../components/ui/button";
import {
  Settings,
  Users,
  Layout,
  Home,
  Bell,
  Search,
  Sun,
  Moon,
  ChevronDown,
  Activity,
  DollarSign,
  Boxes,
} from "lucide-react";

export function DashboardPage() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  
  // Memoize selectors to prevent infinite updates
  const user = useAuth(useCallback((state) => state.user, []));
  const logout = useAuth(useCallback((state) => state.logout, []));

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`min-h-screen bg-background transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center border-b px-6">
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            AdminHub
          </span>
        </div>
        <nav className="space-y-1.5 px-3 py-4">
          <Button variant="ghost" className="w-full justify-start hover:bg-accent/50 transition-all duration-300">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-accent/50 transition-all duration-300">
            <Users className="mr-2 h-4 w-4" />
            Users
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-accent/50 transition-all duration-300">
            <Layout className="mr-2 h-4 w-4" />
            Content
          </Button>
          <Button variant="ghost" className="w-full justify-start hover:bg-accent/50 transition-all duration-300">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
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

        {/* Content */}
        <div className="p-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Dashboard cards */}
            <div className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <h3 className="text-2xl font-semibold">1,234</h3>
                  <p className="text-xs text-primary mt-1">+12% from last month</p>
                </div>
              </div>
            </div>

            <div className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Now</p>
                  <h3 className="text-2xl font-semibold">573</h3>
                  <p className="text-xs text-primary mt-1">+5% from last hour</p>
                </div>
              </div>
            </div>

            <div className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <h3 className="text-2xl font-semibold">$12,345</h3>
                  <p className="text-xs text-primary mt-1">+23% from last month</p>
                </div>
              </div>
            </div>

            <div className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <Boxes className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Products</p>
                  <h3 className="text-2xl font-semibold">892</h3>
                  <p className="text-xs text-primary mt-1">+8% from last week</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Recent Activity */}
            <div className="rounded-lg border bg-card">
              <div className="flex items-center justify-between border-b p-6">
                <div>
                  <h4 className="text-lg font-semibold">Recent Activity</h4>
                  <p className="text-sm text-muted-foreground">Latest user actions</p>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="p-6">
                {/* Activity items */}
                {[1, 2, 3].map((i) => (
                  <div key={i} className="mb-4 flex items-center gap-4 rounded-lg bg-accent/50 p-4 last:mb-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New user registered</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-lg border bg-card">
              <div className="flex items-center justify-between border-b p-6">
                <div>
                  <h4 className="text-lg font-semibold">Quick Stats</h4>
                  <p className="text-sm text-muted-foreground">Platform analytics</p>
                </div>
                <Button variant="outline" size="sm">Download</Button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {/* Stat items */}
                  {[
                    { label: "Page Views", value: "45.1K", increase: "+4.3%" },
                    { label: "Conversion Rate", value: "0.9%", increase: "+1.2%" },
                    { label: "Active Sessions", value: "3.2K", increase: "+2.4%" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-accent/50 p-4">
                      <div>
                        <p className="text-sm font-medium">{stat.label}</p>
                        <p className="text-2xl font-semibold">{stat.value}</p>
                      </div>
                      <span className="text-xs text-primary">{stat.increase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}