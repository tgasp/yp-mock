import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./lib/auth";
import { routes, RouteConfig } from "./config/routes";
import { ProtectedRoute } from "./components/protected-route";

function App() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  // Helper function to handle authentication-based redirects
  const renderRouteElement = (route: RouteConfig) => {
    if (route.path === "/login" && isAuthenticated) {
      return <Navigate to="/dashboard" replace />;
    }
    if (route.path === "/" && !isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return route.element;
  };

  // Recursive function to render routes
  const renderRoutes = (routes: RouteConfig[]) => {
    return routes.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        element={route.protected ? <ProtectedRoute>{renderRouteElement(route)}</ProtectedRoute> : renderRouteElement(route)}
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    ));
  };

  return (
    <BrowserRouter>
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
