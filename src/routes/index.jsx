import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts"

export default function ProtectedRoute({ redirectTo }) {
  const auth = useAuth();
  const user = auth.user

  return user ? <Outlet /> : <Navigate to={redirectTo} />
}
