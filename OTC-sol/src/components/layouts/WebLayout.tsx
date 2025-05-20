import Navbar from "@/components/header/navbar";
import { Outlet } from "react-router-dom";



export default function WebLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}