import axios from "axios";

export const api = axios.create({
    baseURL: "https://mp4b69126ce48afc8a15.free.beeceptor.com",
    headers: {
        "Content-Type": "application/json"
    }
})