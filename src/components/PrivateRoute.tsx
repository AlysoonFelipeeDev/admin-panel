import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";

export function PrivateRoute(){
    const {user, loading} = useUser()

    if(loading) {
        return <div>Carregando...</div>
    }

    return user ? <Outlet /> : <Navigate to="/login" />
}