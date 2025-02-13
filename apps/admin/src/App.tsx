import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/auth'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import GuestLayout from './layouts/guest-layout'
import AuthLayout from './layouts/auth-layout'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return children
}

const GuestRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />
  }

  return children
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuestLayout />}>
          <Route
            path="/login"
            element={
              <GuestRoute>
                <Login />
              </GuestRoute>
            }
          />
        </Route>
        
        <Route element={<AuthLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
