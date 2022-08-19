import axios from "axios";

export const MoviesInstance = axios.create({
    baseURL : "https://reacttraining-8cad3-default-rtdb.firebaseio.com/"
})

