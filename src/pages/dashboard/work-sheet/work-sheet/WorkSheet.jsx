import { Button, Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import  './WorkSheet.css';
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import moment from "moment";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const WorkSheet = () => {
    const {user} = useAuth();
    const [startDate, setStartDate] = useState();
    const axiosSucure = useAxiosSecure();
    const {data: tasks = [], refetch} = useQuery({
        queryKey: ["tasks", user?.email],
        queryFn: async() => {
            const res = await axiosSucure.get(`/work-sheets/${user.email}`);
            const sortByDate = res.data.sort((a, b) => {
                const aDateMoment = moment(a.date, "DD/MM/yyyy");
                const bDateMoment = moment(b.date, "DD/MM/yyyy");
                
                if(bDateMoment.isBefore(aDateMoment)){
                    return -1;
                }
                return 1;
            });
            return sortByDate;
        }
    });
    const handleSubmit = e => {
        e.preventDefault();
        console.log("clicked");
        const form = e.target;
        const tasks = form.tasks.value;
        const workedHour = form.hours.value;
        const date = moment(startDate).format("DD/MM/yyyy");
        // console.log(tasks, workedHour, date);
        const workSheetInfo = {
            tasks,
            workedHour,
            date,
            employeeEmail: user.email,
            employeName: user.displayName,
        };
        axiosSucure.post("/work-sheets", workSheetInfo)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                refetch();
                toast.success("Task submitted successfull!")
            }
        })
    };
    const TABLE_HEAD = ["Task", "Worked Hours", "Date"];

    const TABLE_ROWS = tasks;
    return (
        <div className="mt-28">

            <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-4 gap-2 w-full">
                <select defaultValue="" name="tasks" required className="w-full border-2 block p-1">
                    <option disabled value="">--Tasks--</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Content">Content</option>
                    <option value="Paper-work">Paper-work</option>
                </select>
                <input placeholder="Hours worked" name="hours" required className="w-full border-2 block p-1" type="number" />
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    onChangeRaw={(e) => e.preventDefault()}
                    dateFormat="dd/MM/yyyy"
                    required

                    placeholderText="Date"
                    className="w-full border-2 block p-1"
                />
                <Button type="submit" size="sm" color="green">Submit </Button>
            </form>
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
                        {TABLE_ROWS.map(({_id, tasks, workedHour, date}, index) => {
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
                                            {tasks}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {workedHour}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {date}
                                        </Typography>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>
        </div >
    );
};

export default WorkSheet;