import axios from "axios";

export const UsersInstance = axios.create({
    baseURL : "https://reqres.in/api/"
})