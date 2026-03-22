import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";

export function PrivateRoute(){
    const {user} = useUser()

    return user ? <Outlet /> : <Navigate to="/login" />
}