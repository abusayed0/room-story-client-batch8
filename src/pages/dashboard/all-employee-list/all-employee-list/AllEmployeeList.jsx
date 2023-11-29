import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaCheck } from "react-icons/fa6";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";




const AllEmployeeList = () => {
   
    const axiosSucure = useAxiosSecure();
    const [layout, setLayout] = useState("table");
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

            <select onChange={(e) => setLayout(e.target.value)} value={layout} className="mb-6 mx-auto block p-3 border-2 w-48" id="view" name="view" >
                <option value="table">Table</option>
                <option value="grid">Grid</option>
            </select>

            {
                layout === "table"
                    ?
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
                                                    {role === "hr" ? "Already hr" : <Button onClick={() => handleMakeHr(_id)} size="sm" color="green"><FaCheck /></Button>
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
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allEmployee.map(singleEmployee => <Card key={singleEmployee._id} className="mt-6 w-96">
                            <CardBody>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    Name : {singleEmployee.name}
                                </Typography>
                                <Typography className="mb-1">
                                    Designation : {singleEmployee.designation}
                                </Typography>
                                <Typography className="mb-1">
                                    Make Hr : {singleEmployee.role === "hr" ? "Already hr" : <Button onClick={() => handleMakeHr(singleEmployee._id)} size="sm" color="green"><FaCheck /></Button>}
                                </Typography>
                                <Typography className="mb-1">
                                    Fire : {singleEmployee.isFired
                                        ?
                                        "Fired"
                                        :
                                        < Button onClick={() => handleFired(singleEmployee._id)} size="sm" color="red"><FaCheck /></Button >}
                                </Typography>
                            </CardBody>
                        </Card>)}
                    </div>
            }
        </div>
    );
};

export default AllEmployeeList;

