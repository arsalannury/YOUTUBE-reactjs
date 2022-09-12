import { Button, LinearProgress } from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, memo, useRef,useState } from "react";
// import useGames from "../custumHooks/useGames";
import GameCardPage from "./GameCard.page";
import "./games.css";

const fetchGames = (pageNum) => {
  return axios.get(`http://localhost:4000/actionGames?_limit=2&_page=${pageNum}`);
}

const GamesPage = () => {
  const mainRef = useRef(undefined);

  const [pageNumber,setPageNumber] = useState(1);
  const { isLoading, isError, error, data, isFetching } = useQuery(["games-keys",pageNumber],()=>fetchGames(pageNumber),{
      keepPreviousData:true
  })

  // const { isLoading, isError, error, data } = useGames();

  useEffect(() => {
    setTimeout(() => {mainRef.current.style.animationPlayState = "running"},1000)
  }, []);

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return (
      <>
        <LinearProgress />
        {<p>{error.message}</p>}
      </>
    );
  }

  return (
    <>
      <div className="main-game-page" ref={mainRef}>
        {data?.data.map((game, index) => (
          <GameCardPage
            name={game.name}
            age={game.age}
            company={game.company}
            numberOfTeam={game.numberOfTeam}
            id={game.id}
            key={game.id}
          />
        ))}
        <div className="background-move"></div>
        <Button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 4}>next</Button>
        <Button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>prev</Button>
        {isFetching && <LinearProgress />}
      </div>
    </>
  );
};

export default memo(GamesPage);
