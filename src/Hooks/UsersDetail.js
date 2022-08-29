import { useQuery } from "react-query";
import { UsersInstance } from "../Axios/UsersInstance";

const usersGetter = () => {
  return UsersInstance.get("users");
};

const useUsersDetail = (onSuccess, onError) => {
  return useQuery("users-key-dynamic", usersGetter, {
    onSuccess,
    onError,
  });
};

export default useUsersDetail;