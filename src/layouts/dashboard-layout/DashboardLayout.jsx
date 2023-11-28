import { Outlet } from "react-router-dom";
import DashboardNavigationBar from "../../shared-components/dashboard-navigation-bar/DashboardNavigationBar";

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNavigationBar />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;