import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layouts/Root/Root";
import Skills from "../pages/Skills/Skills";
import Contacts from "../pages/Contacts/Contacts";
import About from "../pages/About/About";


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
            },
            {
                path: "contacts",
                element: <Contacts></Contacts>
            },
            {
                path: "about",
                element: <About></About>
            }
        ]
    },
]);

export default router;