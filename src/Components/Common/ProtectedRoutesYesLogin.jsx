// 렌더링하는 영역을 구현하는 Directive
import { Outlet } from "react-router-dom";
import Home from '../../Pages/Home'

const useAuth = () =>{
    const token = localStorage.getItem("Authorization")
    return token;
}

const ProtectedRoutesNoLogin = () =>{
    const isAuth = useAuth();
    return isAuth !== null ? <Home /> : <Outlet />
}

export default ProtectedRoutesNoLogin;