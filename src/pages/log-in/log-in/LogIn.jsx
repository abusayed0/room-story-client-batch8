import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
const LogIn = () => {
    const {loginUser} = useAuth();
    const location = useLocation();
    // console.log("inside log in page", location);
    const from = location.state?.from || "/";
    // console.log(from);
    const navigate = useNavigate();
    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        // login user 
        loginUser(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log("logged user :", user);
            toast.success("Login successfull!");
            navigate(from, {replace: true});
        })
        .catch(error => {
            const errorMessage = error.message;
            console.error("login error :", errorMessage);
            toast.error(errorMessage);
        })
    };
    
    return (
        <Card color="transparent" shadow={false} className="my-24 w-full md:w-1/3 mx-auto">
            <Typography variant="h4" color="blue-gray">
                Please Log In
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Wellcome Back!
            </Typography>
            <form onSubmit={handleLogIn} className="mt-8 mb-2">
                <div className="mb-1 grid grid-cols-1 gap-6">
                    
                    <Input
                        name="email"
                        type="email"
                        label="Your Email"
                        size="lg"
                        required

                    />

                    <Input
                        name="password"
                        type="password"
                        label="Password"
                        size="lg"
                        required

                    />

                   
                </div>
               
                <Button  type="submit" className="mt-6" fullWidth>
                    log in
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Do not have an account?{" "}
                    <Link to="/sign-up" className="font-medium text-gray-900">
                        Sign Up
                    </Link>
                </Typography>
            </form>
        </Card>
    );
};

export default LogIn;