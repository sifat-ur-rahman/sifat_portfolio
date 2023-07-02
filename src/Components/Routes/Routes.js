import { createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";

import Blogs from "../Pages/Blogs/Blogs";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Freemium from "../Pages/ProjectDetails/Freemium";
import Phone from "../Pages/ProjectDetails/Phone";
import Course from "../Pages/ProjectDetails/Course";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Freemium_Articles",
        element: <Freemium />,
        
      },
      {
        path: "/Phone_Reseller",
        element: <Phone />,
        
      },
      {
        path: "/Crash_Course",
        element: <Course />,
        
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
