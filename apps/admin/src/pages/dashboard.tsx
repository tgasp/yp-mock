import { useAuthStore } from '../store/auth'

export default function Dashboard() {
  const user = useAuthStore((state) => state.user)

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">Welcome, {user?.name}!</h2>
        <p className="mt-2 text-gray-600">This is your admin dashboard.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Stats Cards */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="font-medium text-gray-500">Total Users</h3>
          <p className="mt-2 text-3xl font-bold">1,234</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="font-medium text-gray-500">Active Users</h3>
          <p className="mt-2 text-3xl font-bold">891</p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="font-medium text-gray-500">New Users (Today)</h3>
          <p className="mt-2 text-3xl font-bold">23</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg bg-white p-6 shadow">
        <h3 className="mb-4 text-lg font-semibold">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div>
                <p className="font-medium">User Action {i}</p>
                <p className="text-sm text-gray-500">Action description goes here</p>
              </div>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}