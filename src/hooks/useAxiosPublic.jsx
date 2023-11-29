import axios from "axios";

const useAxiosPublic = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://room-story-server.vercel.app",
// 
})

export default useAxiosPublic;