import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import DashboardNavigationBar from "../../shared-components/dashboard-navigation-bar/DashboardNavigationBar";
import Footer from "../../shared-components/footer/Footer";
import DrawerNavbar from "../../shared-components/drawer-navbar/DrawerNavbar";
import NavigaionBar from "../../shared-components/navigation-bar/NavigationBar";
import { useEffect } from "react";

const DashboardLayout = () => {
    const userRole = "hr";
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {

        if (location.pathname === "/dashboard") {
            if (userRole === "employee") {

                return navigate("/dashboard/work-sheet");
            }
            if (userRole === "hr") {
                return navigate("/dashboard/employee-list");
            }

            if (userRole === "admin") {
                return navigate("/dashboard/all-employee-list");
            }
        }

    }, [navigate, location.pathname]);
    return (
        <div>
            <NavigaionBar />
            <div className="max-w-[1320px] mx-auto px-4 md:px-8">
                <DrawerNavbar />
                <Outlet />
            </div>
            <Footer />
        </div >
    );
};

export default DashboardLayout;