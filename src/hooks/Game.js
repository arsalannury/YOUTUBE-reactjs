import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchData = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/games/${id}`);
};

export const useGame = (id) => {
  const queryClient = useQueryClient();
  return useQuery(["game", id], fetchData, {
    initialData: () => {
      const data = queryClient
        .getQueryData('games')
        ?.data.find((game) => game.id === id);
      if (data) {
        return {
          data
        }
      } else {
        return undefined;
      }
    },
  });
};
