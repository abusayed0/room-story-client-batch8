import { Button, Card, CardFooter, Typography } from "@material-tailwind/react";

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import moment from "moment";
import { useState } from "react";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSucure = useAxiosSecure();
    const { data: paymentHistory = [] } = useQuery({
        queryKey: ["paymentData", user?.email],
        queryFn: async () => {
            const res = await axiosSucure.get(`payment-history/${user.email}`);
            return res.data;
        }
    })
    // console.log({paymentHistory});
    const TABLE_HEAD = ["Month", "Amount", "Transaction Id", "Paid By"];
    const sortByRecent = paymentHistory.sort((a, b) => {
        const dateString1 = a.paymentFor;
        const dateString2 = b.paymentFor;
        const dateMoment1 = moment(dateString1, "MMM, yyy");
        const dateMoment2 = moment(dateString2, "MMM, yyy");
        // console.log("a", dateMoment1);
        // console.log("b", dateMoment2);
        // console.log(dateMoment2.isBefore(dateMoment1));
        if (dateMoment2.isBefore(dateMoment1)) {
            return -1;
        }
        return 1;
    });
    
    // console.log(sortByRecent);
    const TABLE_ROWS = sortByRecent;
    const totalRows = TABLE_ROWS.length;
    const rowPerPage = 5;
    const totalPage = Math.ceil(totalRows/ rowPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
    };
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
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
                        {TABLE_ROWS.slice(rowPerPage * currentPage, (rowPerPage * currentPage) + rowPerPage).map(({ paymentFor, paidAmount, transactionId, paidBy }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={transactionId}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {paymentFor}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            ${paidAmount}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {transactionId}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {paidBy}
                                        </Typography>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-normal">
                        Page {currentPage + 1} of {totalPage}
                    </Typography>
                    <div className="flex gap-2">
                        <Button disabled={currentPage === 0} onClick={handlePrev} variant="outlined" size="sm">
                            Previous
                        </Button>
                        <Button disabled={currentPage === totalPage -1} onClick={handleNext} variant="outlined" size="sm">
                            Next
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default PaymentHistory;