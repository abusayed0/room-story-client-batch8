import PropTypes from 'prop-types';
import useUserRole from '../../hooks/useUserRole';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {userRole, isUserRoleLoading} = useUserRole();
    // console.log("inside admin route role loading",isUserRoleLoading);
    if(isUserRoleLoading){
        return <p>Loading</p>
    }
    if(userRole !== "admin"){
        return <Navigate to="/" replace={true}/>
    }
    return children;
};
AdminRoute.propTypes = {
    children: PropTypes.element.isRequired
};
export default AdminRoute;