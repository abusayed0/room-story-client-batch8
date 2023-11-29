import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Label,  } from 'recharts';
import {
  Card,
  CardHeader,
  CardBody,
 
  Typography,

} from "@material-tailwind/react";

const EmployeeDetail = () => {
  const { id } = useParams();
  const axiosSucure = useAxiosSecure();

  const [employeeInfo, setEmployeeInfo] = useState({});
  const [paymentData, setPaymentData] = useState([]);


  useEffect(() => {
    axiosSucure.get(`/users/${id}`)
      .then(res => {
        setEmployeeInfo(res.data);
      })
  }, [axiosSucure, id]);

  useEffect(() => {
    axiosSucure.get(`payments/${id}`)
      .then(res => {
        setPaymentData(res.data);
      })
  }, [axiosSucure, id]);

  console.log(employeeInfo, paymentData);
  const data1 = paymentData.map(payment => {
    return {
      month: payment.paymentFor,
      amount: parseFloat(payment.paidAmount)
    };
  });


  return (
    <div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10">

      <div>
        <Card>
          <CardHeader floated={false} >
            <img className="w-full h-[250px]" src={employeeInfo.imgUrl} alt="profile-picture" />

          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {employeeInfo.name}
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
              {employeeInfo.email}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {employeeInfo.designation}
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="w-full h-[400px]">

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data1}
            margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />


            <YAxis>
              <Label position="insideLeft" angle={-90}>Payment $</Label>
            </YAxis>
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>


  );
};

export default EmployeeDetail;