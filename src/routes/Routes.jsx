import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Default from "../pages/Default";
import Login from "../pages/Login";

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
        path: '/login',
        element: <Login></Login>
      }
    ],
  },
]);

export default router;
