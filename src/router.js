
import LinkLayout from "./layout/LinkLayout";
import AboutPage from "./pages/AboutPage";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage"
import ParamPage from "./pages/ParamPage";
import ErrorPage from "./pages/ErrorPage";
const router=[
    {
        element:<LinkLayout/>,
        path:'/',
        children:[
            {
                element:<HomePage/>,
                index:true
            },
        {
            element:<MainPage/>,
            path:'main'
        },
        {
            element:<AboutPage/>,
            path:'about'
        }
    ]},
    {
        element:<ParamPage/>,
        path:'/users/:id',
    },
    {
        element:<ErrorPage/>,
        path:'*'
    }

]

export default router;
