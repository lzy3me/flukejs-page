import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/home";
import ErrorPage from "../error-page";
import Page from "../components/page";
import ProjectsPage from "../page/projects";
import ProfilePage from "../page/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    errorElement: <ErrorPage />,
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
    ]
  },
]);

export default router;