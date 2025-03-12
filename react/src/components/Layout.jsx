import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <p>Questo è un footer</p>
        </>
    )
}

export default Layout