import React from 'react'
import { Navigate, useLocation } from "react-router-dom"
function ProtectedRoutes({ isAuthentication, user, children }) {
    //user cant acces appointment related pages 
    const location = useLocation()


    if (!isAuthentication && (location.pathname.includes("/myappointment") ||
        location.pathname.includes("/profile") || location.pathname.includes("/bookappointment"))) {
        return <Navigate to="/login" />
    }
    //login user cant access auth related pages

    if (isAuthentication && (location.pathname.includes("/login") || location.pathname.includes("/register"))) {
        if (user.role === "admin" || user?.role === 'clinicadmin') {
            return <Navigate to="/admin-dashboard" replace  />

        }

        else {
            return <Navigate to="/" />

        }
    }
    if (isAuthentication && user.role !== "admin" && user.role !=="clinicadmin" && location.pathname.includes("/admin-dashboard")) {
        return <Navigate to="/unauthorized" replace />
    }

    return children;
}

export default ProtectedRoutes