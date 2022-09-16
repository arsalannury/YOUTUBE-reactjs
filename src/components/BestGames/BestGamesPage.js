import { CircularProgress, LinearProgress } from "@mui/material";
import { useBestGames } from "../../hooks/BestGames";

const BestGamesPage = ({ ids }) => {
  const [first, second, third] = useBestGames(ids);

  if (first.isLoading || second.isLoading || third.isLoading) {
    return <LinearProgress />;
  }

  if (first.isError || second.isError || third.isError) {
    return (
      <>
        <h2>{first.error.message}</h2>
        <CircularProgress />
      </>
    );
  }

  return (
    <>
      <p>{first.data?.data.title}</p>
      <p>{second.data?.data.title}</p>
      <p>{third.data?.data.title}</p>
    </>
  );
};

export default BestGamesPage;
