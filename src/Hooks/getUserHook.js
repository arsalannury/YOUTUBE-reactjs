import { useQuery } from "react-query";
import { UsersInstance } from "../axios/UsersInstance";

const getUser = ({queryKey}) => {
    const userId = queryKey[1];
    return UsersInstance.get(`/users/${userId}`)
}

export default function useUser (userId) {
    return useQuery(["user-key",userId],getUser)
}