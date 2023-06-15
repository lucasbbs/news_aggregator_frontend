
import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Routes from ".";

const ProtectedRoute = () => {
    const { user } = useAuth();

    return user ?  <Outlet /> : <Navigate to={Routes.LoginPath.path} />;
          
}
export default ProtectedRoute;