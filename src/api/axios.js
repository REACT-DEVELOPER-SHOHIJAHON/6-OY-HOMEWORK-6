import axios from "axios";

const apiInstance = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/",
    timeout: 100000,
    headers: {
        "Content-Type": "application/json",
    },
});

apiInstance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("token");
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiInstance;
