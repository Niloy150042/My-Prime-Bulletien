import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryPages from "../components/CategoryPages";
import Errorpage from "../Error/Errorpage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import SingleNews from '../components/SignleNews'



const router = createBrowserRouter([{
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [{
        path: '/',
        element: <Navigate to='/category/01'></Navigate>
    },
    {
        path: '/category/:id',
        element: <CategoryPages></CategoryPages>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

    }]
},
{
    path: '/news/:id',
    element:<SingleNews></SingleNews>,
    loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
},
{
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [{
        path: '/auth/log-in',
        element: <Login></Login>
    },
    {
        path: '/auth/register',
        element: <Register />

    }]
}
])

export default router;