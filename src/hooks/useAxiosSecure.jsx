import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSucure = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://room-story-server.vercel.app",

});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut} = useAuth();
  axiosSucure.interceptors.request.use((config) => {
    // Do something before request is sent
    const token = localStorage.getItem("access-token");
    console.log("request stopped by interceptors token :", token);
    config.headers.authorization = `Bearer ${token}`;
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

  axiosSucure.interceptors.response.use(response => {
    return response;
  }, async (error) => {
    const status = error.response.status;
    console.log("response status erro", error.response.status);
    if (status === 401 || status === 403) {
      await logOut()
      navigate("/log-in");
    }
    return Promise.reject();
  });



  return axiosSucure;
};

export default useAxiosSecure;