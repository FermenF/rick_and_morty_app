import { createBrowserRouter } from "react-router-dom";
import { characters } from '../api/character';

import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Index from "../pages/Index";

const routes = createBrowserRouter([
    {
        path: '',
        element: <Index />,
        // errorElement: <></>,
    },
    {
        path: '/characters',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: characters,
            }
        ]
    }
]);

export default routes;