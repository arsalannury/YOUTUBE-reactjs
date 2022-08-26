import { useQuery } from "react-query";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const getUsers = () => {
  return axios.get("https://fakestoreapi.com/users/1");
};

const getProducts = () => {
  return axios.get("https://fakestoreapi.com/products/1");
};

const ParallerQuery = () => {
  const { data: userData, isLoading: userLoading } = useQuery(
    "user-key",
    getUsers
  );
  const { data: productData, isLoading: productLoading } = useQuery(
    "product-key",
    getProducts
  );

  if (userLoading || productLoading) {
    return <CircularProgress />;
  }

  return (
    <>
      <p>{userData?.data.usernamw}</p>
      <p>{productData?.data.title}</p>
    </>
  );
};

export default ParallerQuery;
