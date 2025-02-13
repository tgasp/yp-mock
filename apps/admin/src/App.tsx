import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { DashboardPage } from "./pages/dashboard";
import { UsersPage } from "./pages/users";
import { ContentPage } from "./pages/content";
import { SettingsPage } from "./pages/settings";
import { ProtectedRoute } from "./components/protected-route";
import { AdminLayout } from "./components/layout/admin-layout";
import { useAuth } from "./lib/auth";

function App() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LoginPage />
            )
          }
        />

        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Nested routes will render inside AdminLayout */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* Catch all redirect to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
