import axios from 'axios';
import {useQuery,useQueryClient} from 'react-query';


const fetchGame = ({queryKey}) => {
    const id = queryKey[1];
    return axios.get(`http://localhost:4000/actionGames/${id}`)
}


export const useGame = (id) => {
    const queryClient = useQueryClient();
    return useQuery(['game',id],fetchGame,{
        initialData : () => {
            const game = queryClient.getQueryData("games-keys").data.find(game => game.id === id)
            if(game) {
                return {data:game}
            }else {
                return undefined 
            }
        }
    })
}