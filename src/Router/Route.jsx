import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import Detail from "../Pages/Detail/Detail";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/detail/:id",
                element:<Detail></Detail> ,
                loader:()=>fetch('/public/donation.json')
            }
        ]
    }
])

export default myCreatedRoute;