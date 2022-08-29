import axios from "axios";
import { useQuery } from "react-query";
import { UsersInstance } from "../Axios/UsersInstance";

const userGetter = ({ queryKey }) => {
  const userId = queryKey[0];
  return UsersInstance.get(`users/${userId}`);
};

const useUserDetail = (userId) => {
  return useQuery(["user-detail", userId], userGetter);
};

export default useUserDetail;
