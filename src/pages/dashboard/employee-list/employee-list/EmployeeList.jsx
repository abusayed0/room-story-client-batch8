import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Button, Card, Typography } from "@material-tailwind/react";
import { FaCheck, FaXmark } from "react-icons/fa6";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PaymentModal from "../payment-modal/PaymentModal";

const EmployeeList = () => {
    const { user } = useAuth();
    const axiosSucure = useAxiosSecure();
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal((cur) => !cur);


    const { data: emloyeeList = [], refetch } = useQuery({
        queryKey: ["employeeList", user.email],
        queryFn: async () => {
            const res = await axiosSucure.get("/employee-list");
            return res.data;
        }
    });
    // console.log(emloyeeList);
    const TABLE_HEAD = [
        "Name",
        "Email",
        "Verified",
        "Bank Account",
        "Salary",
        "Pay",
        "Detail"
    ];

    const TABLE_ROWS = emloyeeList;

    const handleToggleIsVerifiled = (userId, currentStatus, email) => {

        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to make ${email} ${!currentStatus ? "verified" : "not verified"}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedStatus = {
                    isVerified: !currentStatus
                };
                axiosSucure.patch(`/users/${userId}`, updatedStatus)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            toast.success(`${email} now ${!currentStatus ? "verified" : "not verified"}!`);
                            refetch();
                        }
                    })
            }
        });

    };
const [modalData, setModalData] = useState({});
    const handlePay = (userInfo) => {
        // console.log(userInfo);
        setModalData(userInfo);
        handleOpenModal();
    };



    return (
        <div className="mt-28">
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ _id, name, email, isVerified, account, salary }, index) => {
                            const userInfo = {
                                _id,
                                email,
                                account,
                                salary
                            }
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {email}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div onClick={() => handleToggleIsVerifiled(_id, isVerified, email)}>
                                            {
                                                isVerified ?
                                                    <Button color="green"><FaCheck />
                                                    </Button>
                                                    :
                                                    <Button color="red"><FaXmark /></Button>
                                            }
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {account}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            ${salary}
                                        </Typography>
                                    </td>
                                    <td className={classes}>

                                        <Button onClick={() => handlePay(userInfo)} disabled={!isVerified}>Pay</Button>
                                    </td>
                                    <td className={classes}>

                                        <Button onClick={() => navigate(`/dashboard/employee-list/${_id}`)}>Details</Button>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
            <PaymentModal openModal={openModal} handleOpenModal={handleOpenModal} userInfo={modalData} />
        </div>
    );
};

export default EmployeeList;