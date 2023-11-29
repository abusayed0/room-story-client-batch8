import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,

} from "@material-tailwind/react";
import moment from "moment/moment";
import PropTypes from "prop-types"
import { useState } from "react";


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Payment from "../payment/Payment";

const PaymentModal = ({ openModal, handleOpenModal, userInfo }) => {
    const { _id, email, account, salary } = userInfo;
    const [month, setMonth] = useState(new Date());
    const [year, setYear] = useState(new Date());
    
    const userInfoWithDate = {
        ...userInfo,
        paymentFor: `${moment(month).format("MMM")}, ${moment(year).format("yyy")}`
    };
    
        
        // handleOpenModal();
   
    return (
        <div>
            <Dialog
                size="xs"
                open={openModal}
                handler={handleOpenModal}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem] overflow-y-auto">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h5" color="blue-gray">
                            Employee email - {email}
                        </Typography>
                        <Typography variant="h6" color="blue-gray">
                            Salary per month - {salary}
                        </Typography>

                        <DatePicker
                            selected={month}
                            onChange={(date) => setMonth(date)}
                            dateFormat="MM"
                            showMonthYearPicker
                            onChangeRaw={(e) => e.preventDefault()}
                            customInput={<Input label="Month" size="lg" />}
                            renderCustomHeader={() => (
                                ""
                            )}
                        />

                        <DatePicker
                            selected={year}
                            onChange={(date) => setYear(date)}
                            showYearPicker
                            dateFormat="yyyy"
                            onChangeRaw={(e) => e.preventDefault()}
                            customInput={<Input label="year" size="lg" />}
                        />  
                        
                        <Payment userInfoWithDate={userInfoWithDate} handleOpenModal={handleOpenModal}/>

                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpenModal}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>

        </div>
    );
};
PaymentModal.propTypes = {
    openModal: PropTypes.bool.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
    userInfo: PropTypes.object.isRequired
};
export default PaymentModal;

