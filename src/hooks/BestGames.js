import axios from "axios";
import { useQueries } from "react-query";

const fetchDatas = (id) => {
  return axios.get(`http://localhost:4000/best-games/${id}`);
};

export const useBestGames = (ids) => {
  return useQueries(
    ids.map((id) => {
      return {
        queryKey: ["best-game", id],
        queryFn: () => fetchDatas(id),
      };
    })
  );
};
