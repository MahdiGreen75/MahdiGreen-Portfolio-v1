import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layouts/Root/Root";
import Skills from "../pages/Skills/Skills";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true, 
                element: <Home/>
            },
            {
                path: "skills",
                element: <Skills></Skills>
            }
        ]
    },
]);

export default router;