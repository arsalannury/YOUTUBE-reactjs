import { Grid } from "@mui/material";
import useUsersDetail from "../../Hooks/UsersDetail";
import UsersPage from "../Users/Users.page";

const MainPage = () => {
  const { isError, error, isLoading, data, isFetching } = useUsersDetail();

  if (isLoading) {
    return <h3>users loading ...</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }

  console.log(data.data);
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"space-evenly"}
      width={"100%"}
      gap={10}
    >
      {data?.data.data.map((user) => (
        <UsersPage
          key={user.id}
          id={user.id}
          firstname={user.first_name}
          lastname={user.last_name}
          avatar={user.avatar}
          email={user.email}
        />
      ))}
    </Grid>
  );
};

export default MainPage;