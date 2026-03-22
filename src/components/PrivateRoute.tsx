import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/AuthContext";

interface PrivateRouteProps {
    allowedRoles?: string[]
}

export function PrivateRoute({ allowedRoles }: PrivateRouteProps ){
    const {user, loading} = useUser()

    if(loading) {
        return <div>Carregando...</div>
    }

    if(!user ) {
        return <Navigate to="/login" />
    }

    if(allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to='/' />
    }

    return <Outlet />
}