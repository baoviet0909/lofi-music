const { createBrowserRouter } = require("react-router-dom");
const { default: MainPage } = require("./Pages/MainPage");

const router = createBrowserRouter([ 
    {
        path: '/',
        element: <MainPage/>
    }
])