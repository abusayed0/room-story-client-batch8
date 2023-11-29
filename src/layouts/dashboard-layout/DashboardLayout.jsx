import { Outlet } from "react-router-dom";
import DashboardNavigationBar from "../../shared-components/dashboard-navigation-bar/DashboardNavigationBar";
import Footer from "../../shared-components/footer/Footer";

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNavigationBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default DashboardLayout;