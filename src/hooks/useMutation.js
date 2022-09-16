import { useMutation } from "react-query";
import axios from "axios";

const postData = (gameObject) => {
  return axios.post("http://localhost:4000/games", gameObject);
};

export const useMutationPostData = () => {
  return useMutation(postData);
};
