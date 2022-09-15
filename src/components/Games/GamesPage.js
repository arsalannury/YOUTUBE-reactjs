import { Box, Button, CircularProgress } from "@mui/material";
import React, { Fragment } from "react";
import { useGames } from "../../hooks/Games";
import Titles from "../Titles/Titles";
import GamePage from "./GamePage";

const GamesPage = () => {
  const { isLoading, isError, data, isFetching } = useGames();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <h1>data has not been loaded check your internet connection</h1>;
  }

  return (
    <>
    <Titles />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap:"wrap"
        }}
      >
        {data?.data.map((game) => (
          <Fragment key={game.id}>
            <GamePage
            key={game.id}
            title={game.title}
            players={game.players}
            firstSeason={game.firstSeason}
          />
          </Fragment>
        ))}
      </Box>
    </>
  );
};

export default GamesPage;
