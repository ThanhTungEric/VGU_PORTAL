import { useAuth } from "./AuthProvider";
import { Navigate, Outlet } from "react-router";
import React from "react";

function ProtectedRoute() {
    const user = useAuth();
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
