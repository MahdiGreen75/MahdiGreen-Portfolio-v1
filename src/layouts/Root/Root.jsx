import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="">
            <div>Navbar</div>
            <Outlet></Outlet>
            <div>Footer</div>
        </div>
    );
};

export default Root;