import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "../layouts/MainLayout"
import Home from "../page/Home"
import About from "../page/About"


const router = createBrowserRouter([
    {
       path: "/",
       element: <MainLayout />,
       children: [
        {
            path: "",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
    ]
    }
])

export const AppRouter = () => {
    return <RouterProvider router={router} />
}