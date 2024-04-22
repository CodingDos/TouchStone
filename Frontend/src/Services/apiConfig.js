import axios from "axios";

const api = axios.create({
    baseURL:
        process.env.NODE_ENV === 'production'
        ? "http://127.0.0.1:8000"
        : "http://127.0.0.1:8000",
});

export default api