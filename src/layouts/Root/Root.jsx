import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Home/Navbar/Navbar";

const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div>Footer</div>
        </div>
    );
};

export default Root;