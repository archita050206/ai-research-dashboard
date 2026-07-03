import axios from "axios";

const api= axios.create({
    baseURL: "https://api.openalex.org",
    params:{
        api_key: import.meta.env.VITE_OPENALEX_API_KEY
    },
});
export default api;