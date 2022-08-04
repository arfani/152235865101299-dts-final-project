import { Outlet } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth} from "../../config/firebase"
import Nav from "./nav"

export default function() {
    const [user, isLoading] = useAuthState(auth)
    
    return(
        <div className="px-4 md:px-6">
            <Nav />
            Welcome {user?.email}...

            <Outlet />
        </div>
    )
}