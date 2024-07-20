import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Default from "../pages/Default";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Default></Default>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
