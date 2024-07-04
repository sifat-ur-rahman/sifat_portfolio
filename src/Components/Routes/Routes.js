import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllProjects from "../Pages/ProjectDetails/AllProject";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import BlogDetails from "../Pages/Blogs/BlogDetails/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/project/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://sifat-portfolio-server.vercel.app/api/project/${params.id}`
          ),
      },
      {
        path: "/all-project",
        element: <AllProjects />,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(
            `https://sifat-portfolio-server.vercel.app/api/blog/${params.id}`
          ),
      },

      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
