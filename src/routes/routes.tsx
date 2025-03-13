import { createBrowserRouter } from "react-router";
import Home from "../pages/home/home";
import Detail from "../pages/detail/detail";
import Layout from "../components/layout/Layout";
import Login from "../pages/login/login";
import ProtectedRoutes from "./protectedRoutes";
import Admin from "../pages/admin/admin";
import Trending from "../pages/trending/trending";
import NowPlaying from "../pages/nowPlaying/nowPlaying";

export const router = createBrowserRouter([
    
    {
        element: <ProtectedRoutes />,
        children: [
            {
                element: <Admin />,
                path:"/admin"
            },
            {
                element: <Login />,
                path:"/login"
            }
        ]
    },
    
    {
        element: <Login />,
        path: "/login"
    },
    
    {
        element: <Layout />,
        path:"/",
        children:[
            {
                element: <Home />,
                path:"/",
                index:true
            },
            {
                element: <Trending />,
                path:"/trending",
                
            },
            {
                element: <NowPlaying />,
                path:"/now_playing",
                
            },    
            // {
            //     element: <Detail data={} />,
            //     path: "/detail"
            // },
        ]
    }
]); 