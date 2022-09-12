import axios from "axios";
import { useQuery } from "react-query";

const fetchGames = () => {
    return axios.get("http://localhost:4000/actionGames");
}


const useGames = () => {
    return useQuery("games-keys",fetchGames)
}

export default useGames;