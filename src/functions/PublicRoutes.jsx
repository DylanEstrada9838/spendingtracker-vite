import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
  let token = localStorage.getItem("token");

  return token ? <Navigate to="/home"/> :  <Outlet />;
};
export default PublicRoutes;