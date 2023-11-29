import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUserRole = () => {
    const {user, isUserLoading} = useAuth();
    const axiosSucure = useAxiosSecure();
    const {data:userRole, isLoading:isUserRoleLoading} = useQuery({
        queryKey: ["userRole", user?.email],
        enabled: !isUserLoading,
        queryFn: async() => {
            // console.log("called");
            const res = await axiosSucure.get(`/users/role/${user.email}`);
            console.log("user role inside use user role", res.data);
            return res.data.role;
        }
    });
    return {userRole, isUserRoleLoading};
};

export default useUserRole;