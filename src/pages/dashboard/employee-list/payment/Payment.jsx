import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../checkout-form/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import PropTypes from "prop-types"
// TODO: add pk 
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
const Payment = ({ userInfoWithDate, handleOpenModal }) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm
                userInfoWithDate={userInfoWithDate}
                handleOpenModal={handleOpenModal}
            />
        </Elements>
    );
};
Payment.propTypes = {
    userInfoWithDate: PropTypes.object.isRequired,
    handleOpenModal: PropTypes.func.isRequired,
};

export default Payment;