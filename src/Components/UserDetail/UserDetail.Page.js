import useUser from "../../Hooks/getUserHook";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const UserDetailPage = () => {
    const {userId} = useParams();
  const { isLoading, data, isError, error } = useUser(userId);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1>{data?.data.name.firstname}</h1>
    </>
  );
};

export default UserDetailPage;
