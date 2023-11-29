import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const SignUp = () => {

    const [isTermConAccepted, setIsTermConAccepted] = useState(false);

    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    // Steps : 
    // 1. create user account 
    // 2. if account created successfully, upload image.
    // 3. if upload successfully update user profie.
    // 4. DONE: if profile update successfully create user entery in the database.
    // 5 at last navigate user to home page 


    // console.log(import.meta.env.VITE_IMGBB_CLIENT_API_KEY, "api");
    const handleSignUp = e => {
        e.preventDefault();
        console.log("abu please do it");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoData = form.photo.files[0];
        const role = form.role.value;
        const password = form.password.value;
        const designation = form.designation.value;
        const account = form.account.value;
        const salary = form.salary.value;


        // 1. create user account 
        createUser(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                console.log("create user", user);


                // 2. if account created successfully, upload image.
                const imageFile = {
                    image: photoData
                }
                axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_CLIENT_API_KEY}`, imageFile, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(res => {
                        if (res.data.success) {
                            // 3. if upload successfully update user profie.
                            console.log("image uploaded successfully.");
                            const imgUrl = res.data.data.display_url;

                            updateUserProfile(name, imgUrl)
                                .then(() => {
                                    console.log("user profile updated successfully!");
                                    const userInfo = {
                                        name,
                                        email,
                                        imgUrl,
                                        role,
                                        designation,
                                        account,
                                        salary,
                                        // isVerified: role === "hr"
                                    };
                                    console.log(userInfo);
                                    // 4. DONE: if profile update successfully create user entery in the database.
                                    useAxiosPublic.post("/users", userInfo)
                                    .then(res => {
                                        console.log("user entry response : ", res.data);
                                        if(res.data.insertedId){
                                            console.log("user created successfull");
                                            toast.success("User created successfully!");
                                            // 5 at last navigate user to home page 
                                            navigate("/");
                                        }
                                    })

                                })
                                .catch(error => {
                                    const errorMessage = error.message;
                                    console.error("user profile update error", errorMessage);
                                })

                        }

                    })

            })
            .catch(error => {
                const errorMessage = error.message;
                console.error("user account creating error", errorMessage);
            })


    };
    // console.log(isTermConAccepted);
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