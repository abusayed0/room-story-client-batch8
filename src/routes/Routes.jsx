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
import AuthRequired from "../protected-routes/auth-requrired/AuthRequired";
import EmployeeRoute from "../protected-routes/employee-route/EmployeeRoute";
import AdminRoute from "../protected-routes/admin-route/AdminRoute";
import HrRoute from "../protected-routes/hr-route/HrRoute";
const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            },
            {
                path: "/log-in",
                element: <LogIn />
            },
        ],

    },
    {
        path: "/dashboard",
        element: <AuthRequired><DashboardLayout /></AuthRequired>,
        children: [
            // Solved: why children is array thought passing element
            // user dashboard 
            {
                path: "/dashboard/payment-history",
                element: <EmployeeRoute><PaymentHistory /></EmployeeRoute>
            },
            {
                path: "/dashboard/work-sheet",
                element: <EmployeeRoute><WorkSheet /></EmployeeRoute>
                // element: <WorkSheet/>
            },

            // HR dashboard 
            {
                path: "/dashboard/employee-list",
                element: <HrRoute><EmployeeList /></HrRoute>
            },
            {
                path: "/dashboard/progress",
                element: <HrRoute><Progress /></HrRoute>
            },
            {
                path: "/dashboard/users/:email",
                element: <HrRoute><UserDetails /></HrRoute>
            },
            // admin dashboard
            {
                path: "/dashboard/all-employee-list",
                element: <AdminRoute><AllEmployeeList /></AdminRoute>
            },
        ]
    }
]);

export default Routes;