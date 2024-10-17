import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "37a0e470b36f474a9daa03abf9f42c85"
    }
})