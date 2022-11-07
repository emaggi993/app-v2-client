import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/ContextUser";

export const ProtectedRoute = ({ children, redirectTo = "/"}) => {
    const {user}= useContext(UserContext)
    if(!user){
        
        return <Navigate to={redirectTo} />
    }
    return  <Outlet/>;
}