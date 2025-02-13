import { useAuthStore } from '../store/auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Users, UserCheck, UserPlus, Activity, ChevronRight } from 'lucide-react'

export default function Dashboard() {
  const user = useAuthStore((state) => state.user)

  return (
    <div className="space-y-8 p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Welcome back, {user?.email}</CardTitle>
          <CardDescription>
            Here's what's happening with your admin dashboard today.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +180 from last month
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">891</div>
            <p className="text-xs text-muted-foreground">
              +20% active rate
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New Users (Today)</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              +12% from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions from users</CardDescription>
          </div>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: 'New user registration',
                description: 'John Doe created a new account',
                time: '2 hours ago',
              },
              {
                title: 'Profile update',
                description: 'Sarah Smith updated their profile information',
                time: '3 hours ago',
              },
              {
                title: 'Password change',
                description: 'Mike Johnson changed their password',
                time: '5 hours ago',
              },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border p-4 transition-all hover:bg-muted/50"
              >
                <div className="space-y-1">
                  <p className="font-medium leading-none">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {activity.time}
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}