import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types';
const AuthRequired = ({ children }) => {
    const { user, isUserLoading } = useAuth();
    const location = useLocation();
    // console.log("inside auth requred",location);
    if (isUserLoading) {
        return <p>Loading</p>
    }
    if (!user) {
        return <Navigate replace={true} state={{from: location.pathname}} to="/log-in" />
    }
    return children;
};

AuthRequired.propTypes = {
    children: PropTypes.element.isRequired
};

export default AuthRequired;