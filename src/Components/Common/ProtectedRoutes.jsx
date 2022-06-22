// 렌더링하는 영역을 구현하는 Directive
import { Outlet } from "react-router-dom";
import Signin from '../../Pages/Signin'

const useAuth = () =>{
    const token = localStorage.getItem("Authorization")
    return token;
}

const ProtectedRoutes = () =>{
    const isAuth = useAuth();
    return isAuth !== null ? <Outlet /> : <Signin />
}

export default ProtectedRoutes;