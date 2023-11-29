import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUserRole = () => {
    const { user, isUserLoading } = useAuth();
    const axiosSucure = useAxiosSecure();
    const { data: userRole, isLoading: isUserRoleLoading } = useQuery({
        queryKey: ["userRole", user?.email],
        enabled: !isUserLoading && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            console.log("use user role is called, here is user loading :", isUserLoading, ", token :", localStorage.getItem("access-token"));

                const res = await axiosSucure.get(`/users/role/${user.email}`);
                console.log("use user role response", res.data);
                return res.data.role;
           
        }
    });
    return { userRole, isUserRoleLoading };
};

export default useUserRole;