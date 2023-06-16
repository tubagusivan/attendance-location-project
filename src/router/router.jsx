import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Layout from "../layout/Layout";
import Map from "../pages/Map";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Map />,
            }
        ]
    }
])

export default router