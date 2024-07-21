import axios from "axios";

export default axios.create({
    baseURL: `https://api.themoviedb.org/3/movie`,
    headers:{
        Accept: "application/json",
        Authorization: import.meta.env.VITE_ACCESS_TOKEN
    }
})