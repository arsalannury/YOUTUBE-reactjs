import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchGameData = ({ queryKey }) => {
  const id = queryKey[1];
  return axios.get(`http://localhost:4000/actionGames/${id}`);
};

export const useGameData = (gameId) => {
  const queryClient = useQueryClient();
  return useQuery(["game-key", gameId], fetchGameData, {
    initialData: () => {
      const data = queryClient
        .getQueryData("actionGames")
        ?.data.find((game) => game.id === gameId);
      if (data) {
        return { data };
      } else {
        return undefined;
      }
    },
  });
};
