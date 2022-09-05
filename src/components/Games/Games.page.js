import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const fetchGames = () => {
  return axios.get("http://localhost:4000/actionGames");
};

const GamesPage = () => {
  const { isLoading, error, data,isError } = useQuery("actionGames", fetchGames);

  if (isLoading) {
    return <h1>is Loading ...</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {data?.data.map((game, index) => (
        <div key={index}>
         <Link to={`/games/${game.id}`}>
         <p>{game.name}</p>
         </Link>
        </div>
      ))}
    </>
  );
};

export default GamesPage;
