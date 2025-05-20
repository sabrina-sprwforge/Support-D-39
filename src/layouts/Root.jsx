
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";


const Root = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <Outlet className="min-h-screen "/>
            <Footer/>
        </div>
    );
};

export default Root;