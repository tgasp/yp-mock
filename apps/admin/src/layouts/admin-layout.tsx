import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'

export function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="flex-1 overflow-auto bg-muted/10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}