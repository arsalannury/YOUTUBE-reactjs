import { LinearProgress } from "@mui/material";
import { useEffect, memo, useRef } from "react";
import useGames from "../custumHooks/useGames";
import GameCardPage from "./GameCard.page";
import "./games.css";

const GamesPage = () => {
  const mainRef = useRef(undefined);

  const { isLoading, isError, error, data } = useGames();

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
      </div>
    </>
  );
};

export default memo(GamesPage);
