import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layouts/Root/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true, 
                element: <Home/>
            }
        ]
    },
]);

export default router;