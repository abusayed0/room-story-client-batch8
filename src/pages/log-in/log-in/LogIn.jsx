import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const LogIn = () => {
    const handleLogIn = e => {
        e.preventDefault();
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