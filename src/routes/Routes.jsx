import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Default from "../pages/Default";
import Login from "../pages/authnication/Login";
import Registration from "../pages/authnication/Registration";

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
