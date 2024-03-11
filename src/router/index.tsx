import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import ErrorPage from "../error-page";
import Page, { blogLoader } from "../components/page";
import ProjectsPage from "../page/projects";
import ProfilePage from "../page/profile";
import BlogPage from "../page/blogs";
import BlogContent from "../page/blogs/content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
    loader: blogLoader,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blog/:lang/:name",
        element: <BlogContent />
      }
    ]
  },
]);

export default router;