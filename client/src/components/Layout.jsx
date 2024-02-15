import Header from "./Header";
import Nav from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {

    return (
        <div>
            <Header />
            <Nav />
            <Outlet />
        </div>
    )
}
