import { useQueries } from "react-query";
import axios from "axios";

const fetchGroupTwoDatas = (ids) => {
  return axios.get(`https://reqres.in/api/users/${ids}`);
};

export const useGroupTwoDatas = (groupTwoIds) => {
  return useQueries(
    groupTwoIds.map((id) => {
      return {
        queryKey: id,
        queryFn: () => fetchGroupTwoDatas(id),
      };
    })
  );
};
