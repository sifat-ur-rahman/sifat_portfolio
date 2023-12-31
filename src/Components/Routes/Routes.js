import { createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main";

import Blogs from "../Pages/Blogs/Blogs";

import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Freemium from "../Pages/ProjectDetails/Freemium";
import Phone from "../Pages/ProjectDetails/Phone";
import Course from "../Pages/ProjectDetails/Course";
import RemoteJobs from "../../BlogPage/RemoteJobs";
import BlogNextJs from "../../BlogPage/BlogNextJs";
import BlogJavaScript from "../../BlogPage/BlogJavaScript";
import BlogReactJs from "../../BlogPage/BlogReactJs";
import BlogDOM from "../../BlogPage/BlogDOM";
import BlogRedux from "../../BlogPage/BlogRedux";
// import NextJs from "../../BlogPage/NextJS";



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
        path: "/project/Freemium_Articles",
        element: <Freemium />,
        
      },
      {
        path: "/project/Phone_Reseller",
        element: <Phone />,
        
      },
      {
        path: "/project/Crash_Course",
        element: <Course />,
        
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/next_js",
        element: <BlogNextJs></BlogNextJs>
      },
      {
        path: "/blog/remote_jobs",
        element: <RemoteJobs></RemoteJobs>
      },
      {
        path: "/blog/javaScript",
        element: <BlogJavaScript></BlogJavaScript>
      },
      {
        path: "/blog/react_js",
        element: <BlogReactJs></BlogReactJs>
      },
      {
        path: "/blog/Virtual_DOM",
        element: <BlogDOM />
      },
      {
        path: "/blog/react_redux",
        element: <BlogRedux />
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
