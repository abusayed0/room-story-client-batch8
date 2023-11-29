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


const DrawerNavbar = () => {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const userRole = "hr";
    const navList = (
        <>
            {
                userRole === "employee"
                &&
                <>
                    <ListItem onClick={closeDrawer}
                    >
                        <NavLink to="/dashboard/work-sheet" className="flex items-center">Work Sheet</NavLink>

                    </ListItem>
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
                    <ListItem onClick={closeDrawer}>
                        <NavLink to="/dashboard/employee-list" className="flex items-center">Employee List</NavLink>
                    </ListItem>

                    <ListItem onClick={closeDrawer}
                    >
                        <NavLink to="/dashboard/progress" className="flex items-center">Progress</NavLink>

                    </ListItem>
                </>
            }
            {
                userRole === "admin"
                &&
                <>
                    <ListItem onClick={closeDrawer}
                    >
                        <NavLink to="/dashboard/all-employee-list" className="flex items-center">All Employee List</NavLink>

                    </ListItem>
                </>
            }

        </>
    );
    return (
        <div>
            <Button size="sm" variant="outlined" onClick={openDrawer}><FaAlignLeft className="text-2xl" /></Button>
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