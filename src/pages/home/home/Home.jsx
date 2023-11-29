import ReactDatePicker from "react-datepicker";
import Slider from "../slider/Slider";
import { useState } from "react";

const Home = () => {
    const [startDate, setStartDate] = useState();

    return (
        <div>
            <Slider />
            <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
            />
        </div>
    );
};

export default Home;