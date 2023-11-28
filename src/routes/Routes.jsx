import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout/MainLayout";
import Home from "../pages/home/home/Home";
import ContactUs from "../pages/contact-us/contact-us/ContactUs";
import EmployeeList from "../pages/dashboard/employee-list/employee-list/EmployeeList";
import UserDetails from "../pages/dashboard/user-details/user-details/UserDetails";
import SignUp from "../pages/sign-up/sign-up/SignUp";
import LogIn from '../pages/log-in/log-in/LogIn';
import AllEmployeeList from "../pages/dashboard/all-employee-list/all-employee-list/AllEmployeeList";
import WorkSheet from "../pages/dashboard/work-sheet/work-sheet/WorkSheet";
import DashboardLayout from "../layouts/dashboard-layout/DashboardLayout";
import PaymentHistory from "../pages/dashboard/payment-history/payment-history/PaymentHistory";
import Progress from '../pages/dashboard/progress/progress/Progress';
const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/contact-us",
                element: <ContactUs/>
            },
            {
                path: "/sign-up",
                element: <SignUp/>
            },
            {
                path: "/log-in",
                element: <LogIn/>
            }, 
        ],
        
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
             // user dashboard 
             {
                path: "/dashboard/payment-history",
                element: <PaymentHistory/>
            },
            {
                path: "/dashboard/work-sheet",
                element: <WorkSheet/>
            },
            
            // HR dashboard 
            {
                path: "/dashboard/employee-list",
                element: <EmployeeList/>
            },
            {
                path: "/dashboard/progress",
                element: <Progress/>
            },
            {
                path: "/dashboard/users/:email",
                element: <UserDetails/>
            },
            // admin dashboard
            {
                path: "/dashboard/all-employee-list",
                element: <AllEmployeeList/>
            },
        ]
    }
]);

export default Routes;