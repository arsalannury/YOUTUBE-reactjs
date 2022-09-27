import axios from "axios";
import { useQuery } from "react-query";

const getWiki = () => {
  return axios.get("http://localhost:4000/all");
};

const useWiki = () => {
  return useQuery("all-wiki", getWiki, {
    staleTime: 500000,
    refetchOnWindowFocus: false,
  });
};

export default useWiki;
