import { Settings, Users, Layout, Home } from 'lucide-react'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background">
        <div className="flex h-16 items-center border-b px-6">
          <span className="text-lg font-semibold">Admin Dashboard</span>
        </div>
        <nav className="space-y-1 px-3 py-4">
          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Users
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Layout className="mr-2 h-4 w-4" />
            Content
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </aside>

      {/* Main content */}
      <main className="pl-64">
        <header className="flex h-16 items-center border-b px-6">
          <h1 className="text-lg font-semibold">Dashboard Overview</h1>
        </header>
        <div className="p-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Dashboard cards */}
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <h3 className="text-2xl font-semibold">1,234</h3>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center gap-4">
                <Layout className="h-8 w-8 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Total Posts</p>
                  <h3 className="text-2xl font-semibold">567</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <h4 className="text-lg font-semibold">Recent Activity</h4>
                <p className="text-sm text-muted-foreground">
                  Your latest admin activities will appear here
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
