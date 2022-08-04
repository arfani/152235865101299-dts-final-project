import { Outlet } from "react-router-dom";
import Nav from "./nav"

export default function Layout() {
    return(
        <div className="px-4 md:px-6">
            <Nav />

            <Outlet />
        </div>
    )
}