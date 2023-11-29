import { Button, Card, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaCheck } from "react-icons/fa6";
import toast from "react-hot-toast";
import Swal from "sweetalert2";



const AllEmployeeList = () => {
    const axiosSucure = useAxiosSecure();
    const { data: allEmployee = [], refetch } = useQuery({
        queryKey: ["allEmployee"],
        queryFn: async () => {
            const res = await axiosSucure.get("all-employee-list");
            return res.data;
        }
    });

    const handleFired = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSucure.patch(`/users/fired/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch();
                            toast.success("Fired sucessfull !");
                        }
                    })
            }
        });


    };

    const handleMakeHr = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, do!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSucure.patch(`/users/make-hr/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.modifiedCount) {
                            refetch();
                            toast.success("Make Hr successfully!")
                        }
                    })
            }
        });
    };


    const TABLE_HEAD = ["Name", "Designation", "Make Hr", "Fire"];
    const TABLE_ROWS = allEmployee;
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
                        {TABLE_ROWS.map(({ _id, name, designation, role, isFired }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={_id}>
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
                                            {designation}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {role === "hr" ? "Alread hr" : <Button onClick={() => handleMakeHr(_id)} size="sm" color="green"><FaCheck /></Button>
                                            }
                                        </Typography>
                                    </td>
                                    <td className={classes}>

                                        {
                                            isFired
                                                ?
                                                "Fired"
                                                :
                                                < Button onClick={() => handleFired(_id)} size="sm" color="red"><FaCheck /></Button >
                                        }
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default AllEmployeeList;

