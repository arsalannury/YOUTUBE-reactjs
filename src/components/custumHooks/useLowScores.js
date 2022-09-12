import axios from "axios";
import { useQueries } from "react-query";


const fetchLowScores = (id) => {
    
    return axios.get(`http://localhost:4000/actionGames/${id}`)
}


export const useLowScores = (ids) => {
    return useQueries(
        ids.map((id) => {
            return {
                queryKey: ['lows',id],
                queryFn: () => fetchLowScores(id)
            }
        })
    )
}