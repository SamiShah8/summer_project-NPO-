import axios from "axios";

const http = axios.create({
    baseURL: "https://rc-epay.esewa.com.np/api/epay/main/v2/form",
    headers: {
     
        'Content-Type': 'multipart/form-data',
    }
})

export default http;