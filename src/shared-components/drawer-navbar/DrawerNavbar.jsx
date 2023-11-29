import {
    Drawer,
    Button,
    IconButton,
    List,
    ListItem,

} from "@material-tailwind/react";
import { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useUserRole from "../../hooks/useUserRole";

const DrawerNavbar = () => {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    // DONE: load user role from backend 
    const { userRole } = useUserRole();
    const navList = (
        <>
            {
                userRole === "employee"
                &&
                <>
                    <NavLink onClick={closeDrawer} to="/dashboard/work-sheet">
                        <ListItem
                        >
                            Work Sheet
                        </ListItem>
                    </NavLink>

                    <ListItem onClick={closeDrawer}
                    >
                        <NavLink to="/dashboard/payment-history" className="flex items-center">Payment History</NavLink>

                    </ListItem>
                </>
            }
            {
                userRole === "hr"
                &&
                <>
                    <NavLink onClick={closeDrawer} to="/dashboard/employee-list">
                        <ListItem>
                            Employee List
                        </ListItem>
                    </NavLink>


                    <NavLink onClick={closeDrawer} to="/dashboard/progress">
                        <ListItem
                        >
                            Progress
                        </ListItem>
                    </NavLink>

                </>
            }
            {
                userRole === "admin"
                &&
                <>

                    <NavLink onClick={closeDrawer} to="/dashboard/all-employee-list">
                        <ListItem
                        >
                            All Employee List
                        </ListItem>
                    </NavLink>
                </>
            }

        </>
    );
    return (
        <div>
            <Button size="sm" variant="outlined" onClick={openDrawer} className="mt-10"><FaAlignLeft className="text-2xl" /></Button>
            <Drawer open={open} onClose={closeDrawer}>
                <div className="mb-2 flex items-center justify-between p-4">
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <List>
                    {
                        navList
                    }
                </List>
            </Drawer>

        </div>
    );
};

export default DrawerNavbar;