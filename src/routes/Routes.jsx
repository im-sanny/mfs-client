import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Default from "../pages/Default";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <Default></Default>,
      },
      
    ],
  },
]);

export default router;
