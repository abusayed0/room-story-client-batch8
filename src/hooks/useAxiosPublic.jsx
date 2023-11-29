import axios from "axios";

const useAxiosPublic = axios.create({
    baseURL: "http://localhost:5000",
})

export default useAxiosPublic;