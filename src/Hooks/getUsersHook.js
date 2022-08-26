import { useQuery } from "react-query";
import {UsersInstance} from "../axios/UsersInstance";

const getUsers = ({queryKey}) => {
    const userId = queryKey[1];
    return UsersInstance.get("/users");
}

export default function useUsers (userId) {
    return useQuery("user-key",getUsers,{
        refetchOnWindowFocus: false
    })
}