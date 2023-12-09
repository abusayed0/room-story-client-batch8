import { Outlet} from "react-router-dom";
// import DashboardNavigationBar from "../../shared-components/dashboard-navigation-bar/DashboardNavigationBar";
import Footer from "../../shared-components/footer/Footer";
import DrawerNavbar from "../../shared-components/drawer-navbar/DrawerNavbar";
import NavigaionBar from "../../shared-components/navigation-bar/NavigationBar";


const DashboardLayout = () => {

    // TODO: could navigate user depend on his role 
    // DONE: load user role from backend /* 
       /*  const {userRole} = useUserRole();
        // console.log({userRole});
        const navigate = useNavigate();
        const location = useLocation();
        useEffect(() => {
            // console.log("runned");
            // console.log(userRole, isUserRoleLoading);
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
    
        }, [navigate, location.pathname, userRole]); */ 
    return (
        <div>
            <NavigaionBar />
            <div className="max-w-[1320px] mx-auto px-4 md:px-8">
                <DrawerNavbar />
                <h3 className="text-center text-3xl font-semibold">Wellcome to dashboard !!!</h3>
                <Outlet />
            </div>
            <Footer />
        </div >
    );
};

export default DashboardLayout;