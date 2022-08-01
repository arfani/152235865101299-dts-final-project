import { Outlet } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "../../config/firebase"
import {MainPage} from "../"

export default function() {
    const [user, isLoading] = useAuthState(auth)
    
    return(
        <>
            <div>Welcome {user?.email}...</div>
            <MainPage />
            <Outlet />
        </>
    )
}