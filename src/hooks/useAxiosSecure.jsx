import axios from "axios";

const axiosSucure = axios.create({
    baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
    return axiosSucure;
};

export default useAxiosSecure;