import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="flex min-h-screen items-center justify-center">
        <Outlet />
      </main>
    </div>
  )
}