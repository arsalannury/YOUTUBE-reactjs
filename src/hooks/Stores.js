import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
    return axios.get("http://localhost:4000/stores")
}

export const useStores = () => {
    return useQuery("stores",fetchData);
}

