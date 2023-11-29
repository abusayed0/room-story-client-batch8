import { useContext } from "react";
import { AuthContext } from "../providers/auth-provider/AuthProvider";

const useAuth = () => {
    const {user} = useContext(AuthContext);
    return user;
};

export default useAuth;