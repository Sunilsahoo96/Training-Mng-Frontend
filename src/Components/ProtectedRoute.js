import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = () => {
  const [cookies] = useCookies(["authToken"]);

  if (!cookies.authToken) {
    return <Navigate to="/signin" />;
  }

  return <Outlet />; // Allows nested routes
};

export default ProtectedRoute;
