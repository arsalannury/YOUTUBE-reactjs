import axios from "axios";

export const UsersInstance = axios.create({
    baseURL : "https://fakestoreapi.com"
})

