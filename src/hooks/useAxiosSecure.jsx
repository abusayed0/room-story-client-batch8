import axios from "axios";

const axiosSucure = axios.create({
    baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {

    axiosSucure.interceptors.request.use( (config) => {
        // Do something before request is sent
        const token = localStorage.getItem("access-token");
        console.log("request stopped by interceptors token :", token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }, (error)  => {
        // Do something with request error
        return Promise.reject(error);
      });

    return axiosSucure;
};

export default useAxiosSecure;