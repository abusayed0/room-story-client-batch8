import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [isTermConAccepted, setIsTermConAccepted] = useState(false);
    const handleSignUp = e => {
        e.preventDefault();
        console.log("abu please do it");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoData = form.photo.files[0];
        const password = form.password.value;
        const designation = form.designation.value;
        const account = form.account.value;
        const salary = form.salary.value;
        const userInfo = {
            name,
            email,
            photoData,
            password,
            designation,
            account,
            salary
        }
        console.log(userInfo);

    };
    console.log(isTermConAccepted);
    return (
        <Card color="transparent" shadow={false} className="my-24 w-full md:w-2/3 mx-auto">
            <Typography variant="h4" color="blue-gray">
                Please Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
            </Typography>
            <form onSubmit={handleSignUp} className="mt-8 mb-2">
                <div className="mb-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        name="name"
                        type="text"
                        label="Your Name"
                        size="lg"
                        required

                    />
                    <Input
                        name="email"
                        type="email"
                        label="Your Email"
                        size="lg"
                        required

                    />

                    <Input
                        name="photo"
                        type="file"
                        label="Your Photo"
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

                    <select
                        defaultValue=""
                        required
                        name="role"
                        id="role"
                        className="border rounded-md !border-blue-gray-200 focus:!border-gray-900 p-3"


                    >
                        <option disabled value="">Role *</option>
                        <option value="employee">Employee</option>
                        <option value="hr">HR</option>
                    </select>


                    <Input
                        name="designation"
                        type="text"
                        label="Designation"
                        size="lg"
                        required

                    />
                    <Input
                        name="account"
                        type="text"
                        label="Bank Account No"
                        size="lg"
                        required

                    />
                    <Input
                        name="salary"
                        type="text"
                        label="Salary"
                        size="lg"
                        required

                    />

                </div>
                <Checkbox
                    onClick={() => setIsTermConAccepted(!isTermConAccepted)}
                    label={
                        <Typography
                            variant="small"
                            color="gray"
                            className="flex items-center font-normal"
                        >
                            I agree the
                            <Link
                                to=""
                                className="font-medium transition-colors hover:text-gray-900"
                            >
                                &nbsp;Terms and Conditions
                            </Link>
                        </Typography>
                    }
                    containerProps={{ className: "-ml-2.5" }}
                />
                <Button disabled={!isTermConAccepted} type="submit" className="mt-6" fullWidth>
                    sign up
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" "}
                    <Link to="/log-in" className="font-medium text-gray-900">
                        Log In
                    </Link>
                </Typography>
            </form>
        </Card>
    )


};

export default SignUp;