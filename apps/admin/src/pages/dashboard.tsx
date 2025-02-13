import {
  Users,
  Activity,
  DollarSign,
  Boxes,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function DashboardPage() {
  return (
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
  );
}