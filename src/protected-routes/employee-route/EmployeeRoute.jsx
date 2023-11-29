import { Navigate } from "react-router-dom";
import useUserRole from "../../hooks/useUserRole";
import PropTypes from 'prop-types';

const EmployeeRoute = ({children}) => {
    // console.log({children});
    const {userRole, isUserRoleLoading} = useUserRole();
    console.log("inside employee route role loading",isUserRoleLoading);
    if(isUserRoleLoading){
        return <p>Loading</p>
    }
    if(userRole !== "employee"){
        return <Navigate to="/" replace={true}/>
    }
    return children;
    
};

EmployeeRoute.propTypes = {
    children: PropTypes.element.isRequired
};
export default EmployeeRoute;