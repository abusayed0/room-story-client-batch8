import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Button, Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Progress = () => {
    const [displayTasks, setDisplayTasks] = useState([]);
    const [month, setMonth] = useState();
    // console.log(displayTasks);
    const axiosSucure = useAxiosSecure();
    const { data = [] } = useQuery({
        queryKey: ["allTasks"],
        queryFn: async () => {
            const res = await axiosSucure.get("work-sheets");
            setDisplayTasks(res.data);
            return res.data;
        }
    });

    const uniqueNames = [];
    data.map(singleTask => {
        const name = singleTask.employeName;
        const check = uniqueNames.find(nm => nm === name);
        if (!check) {
            uniqueNames.push(name);
        }
    });



    const TABLE_HEAD = ["Name", "Task", "Worked Hours", "Date"];
    const TABLE_ROWS = displayTasks;

    const handleFilter = (e) => {
        e.preventDefault();
        const clickedName = e.target.names.value;
        const fileredMonthMoment = moment(month).format("MMM");
        if (clickedName && fileredMonthMoment) {
            console.log(clickedName, fileredMonthMoment);
            const forMonthAndName = data.filter(taskInfo => {
                const taskMonth = moment(taskInfo.date, "DD/MM/yyyy").format("MMM");
                return fileredMonthMoment === taskMonth && clickedName === taskInfo.employeName;
            })
            setDisplayTasks(forMonthAndName);
            return;
        }
        const forOnlyMonth = data.filter(taskInfo => {
            const taskMonth = moment(taskInfo.date, "DD/MM/yyyy").format("MMM");
            return fileredMonthMoment === taskMonth;
        })
        setDisplayTasks(forOnlyMonth);

    };

    return (
        <div className="mt-28">
            <form className="w-full md:w-1/2 mx-auto grid grid-cols-3 gap-3" onSubmit={handleFilter}>
                <select defaultValue="" name="names" className="p-2 border-2 w-full">
                    <option value="" disabled>--By name--</option>
                    {
                        uniqueNames.map((name, index) => <option
                            key={index}
                            value={name}

                        >{name}
                        </option>)
                    }
                </select>
                <DatePicker
                    required={true}
                    className="w-full"
                    selected={month}
                    onChange={(date) => setMonth(date)}
                    dateFormat="MM"
                    showMonthYearPicker
                    onChangeRaw={(e) => e.preventDefault()}
                    placeholderText="Month"
                    customInput={<input className="p-2 border-2" />}
                    renderCustomHeader={() => (
                        ""
                    )}
                />
                <Button type="submit" variant="outlined">Filter</Button>
            </form>
            <Card className="mt-6 h-full w-full overflow-scroll">


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
                        {TABLE_ROWS.map(({ _id, employeName, tasks, workedHour, date }, index) => {
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
                                            {employeName}
                                        </Typography>
                                    </td>
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
        </div>
    );
};

export default Progress;