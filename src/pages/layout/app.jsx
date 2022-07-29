import { Outlet } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "../../config/firebase"

export default function() {
    const [user, isLoading] = useAuthState(auth)
    
    return(
        <>
            Welcome {user?.email}...

            <Outlet />
        </>
    )
}