import { Button } from "@material-tailwind/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import PropTypes from "prop-types"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";


const CheckoutForm = ({ userInfoWithDate, handleOpenModal }) => {
    const { user } = useAuth();
    const [error, setError] = useState("");
    // console.log(userInfoWithDate);
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSucure = useAxiosSecure();
    const { salary } = userInfoWithDate;
    console.log("salary", salary);
    useEffect(() => {
        axiosSucure.post("/create-payment-intent", { salary: salary })
            .then(res => {
                console.log("create intent res",res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })

    }, [axiosSucure, salary]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('error', error);
            setError(error.message);
          
        } else {
            setError("");
            console.log('PaymentMethod', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user.email
                }
            }
        });
        if (confirmError) {
            console.log(confirmError);
            setError(confirmError.message);
          
        }
        if (paymentIntent) {
            setError("");
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("payment success");
               
                handleOpenModal();
                toast.success("Payment successfull!")
                // now save payment data in database 
                const paymentData = {
                    userEmail: userInfoWithDate.email,
                    userId: userInfoWithDate._id,
                    userAccount: userInfoWithDate.account,
                    transactionId: paymentIntent.id,
                    paidAmount: userInfoWithDate.salary,
                    paymentFor: userInfoWithDate.paymentFor,
                    paidBy: user.email
                };
                const paymentRes = await axiosSucure.post("/payments", paymentData);
                console.log("payment response :", paymentRes.data);

            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <Button
                type="submit"
                variant="gradient"
                color="green"
                className="mt-6"
                disabled={!stripe || !clientSecret}
            >
                <span>Confirm</span>
            </Button >
            {error.length > 0 && <p className="mt-2 text-red-500">{error}</p>}
        </form>
    );
};
CheckoutForm.propTypes = {
    userInfoWithDate: PropTypes.object.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
};
export default CheckoutForm;