import { Navigate } from "react-router-dom";
import useUserRole from "../../hooks/useUserRole";
import PropTypes from 'prop-types';

const HrRoute = ({children}) => {
    const {userRole, isUserRoleLoading} = useUserRole();
    // console.log("inside hr route role loading",isUserRoleLoading);
    if(isUserRoleLoading){
        return <p>Loading</p>
    }
    if(userRole !== "hr"){
        return <Navigate to="/" replace={true}/>
    }
    return children;
};
HrRoute.propTypes = {
    children: PropTypes.element.isRequired
};
export default HrRoute;