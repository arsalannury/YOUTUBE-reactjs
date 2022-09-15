import axios from "axios";
import { useQuery } from "react-query";

const fetchData = () => {
    return axios.get('http://localhost:4000/games');
}

export const useGames = () => {
    return useQuery("games",fetchData,{staleTime:100000})
}