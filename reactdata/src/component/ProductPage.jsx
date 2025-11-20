// ProductPage.jsx

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


export default function ProductPage( { children}){
    const { user , loading } = useAuth();
    
    if( loading ){ // 기본화면 제공  하므로  null값 반환
        return null;
    }
    if( !user ){
        //user가 값이 없으면  로그인이 안되었음
        // user가 값을 가지고 있으면 if문은 false  - 로그인한상태
        return <Navigate to="/signIn" replace />
        // Navigate - 리다이렉트를 위한 컴포넌트  
        // 리다이렉트란  직접 주소를 변경하여 해당 페이지로 보내는것
        // replace는 현재 페이지를 변경 되는 주소 페이지로 대체 하는것
    }

    return children;
}