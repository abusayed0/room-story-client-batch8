import { useEffect, useState } from 'react';
import {
    Navbar,
    // MobileNav,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { NavLink, useNavigate } from 'react-router-dom';

const NavigaionBar = () => {
    const [openNav, setOpenNav] = useState(false);
    const userRole = "user";
    const user = {name: "josim"};
    const navigate = useNavigate();
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 768 && setOpenNav(false),
        );
    }, []);
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/" className="flex items-center">Home</NavLink>
            </Typography>
           { 
           user &&
           <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                {   
                    userRole === "user"
                    &&
                    <NavLink to="/dashboard/work-sheet" className="flex items-center">Dashboard</NavLink>
                }
                {   
                    userRole === "hr"
                    &&
                    <NavLink to="/dashboard/employee-list" className="flex items-center">Dashboard</NavLink>
                }
                {   
                    userRole === "admin"
                    &&
                    <NavLink to="/dashboard/all-employee-list" className="flex items-center">Dashboard</NavLink>
                }

            </Typography>
            }
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/contact-us" className="flex items-center">Contact Us</NavLink>

            </Typography>
        </ul>
    );
    return (
        <>
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 md:px-8 md:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium text-xl"
                >
                    Material Tailwind
                </Typography>

                {/* tablet and desktop nav item  */}
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden md:block">
                        {navList}
                    </div>
                    <div className="flex items-center gap-x-1">
                        <Button
                            onClick={() => navigate("/log-in")}
                            variant="gradient"
                            size="sm"
                            className="hidden md:inline-block"
                        >
                            <span>Log In</span>
                        </Button>
                        <Button
                            onClick={() => navigate("/sign-up")}
                            variant="gradient"
                            size="sm"
                            className="hidden md:inline-block"
                        >
                            <span>Sign Up</span>
                        </Button>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            {/* mobile nav item  */}
            <Collapse open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                    <Button  onClick={() => navigate("/log-in")} fullWidth variant="gradient" size="sm" className="">
                        <span>Log In</span>
                    </Button>
                    <Button  onClick={() => navigate("/sign-up")} fullWidth variant="gradient" size="sm" className="">
                        <span>Sign in</span>
                    </Button>
                </div>
            </Collapse>
        </Navbar>
        </>
    );
};

export default NavigaionBar;