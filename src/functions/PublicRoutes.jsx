import { Outlet, Navigate } from "react-router-dom";

const PublicRoutes = () => {
  let token = localStorage.getItem("token");

  return token ? <Navigate to="/"/> :  <Outlet />;
};
export default PublicRoutes;