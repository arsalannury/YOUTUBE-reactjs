import { useQueries } from "react-query";
import axios from "axios";

const fetchGroupOneDatas = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`);
};

export const useGroupOneDatas = (groupOneIds) => {
  const resultsQueries =  useQueries(
    groupOneIds.map((id) => {
      return {
        key: ["group-one", id],
        fetcherFunction: fetchGroupOneDatas(id),
      };
    })
  );
  return resultsQueries; 
};
