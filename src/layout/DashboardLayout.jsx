import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="font-lato">
      <div className="relative min-h-screen md:flex ">
        {/* Sidebar */}
        <Sidebar />
        
        {/* <div className=" md:ml-64"></div> */}
        <div className="flex-1 w-full ">
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
