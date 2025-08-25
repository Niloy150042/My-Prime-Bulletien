import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryPages from "../components/CategoryPages";


const Route = createBrowserRouter([{
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <p> you put the mistake route</p>,
    children: [{
        path: '/',
        element: <Navigate to='/category/01'></Navigate>
    },
    {
        path:'/category/:id',
        element: <CategoryPages></CategoryPages>,
        loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

    }]
},
{
    path: '/news',
    element: <p>this is news</p>
}
])

export default Route;