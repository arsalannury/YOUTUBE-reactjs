import { LinearProgress } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGame } from "../custumHooks/useGame";

const DetailGamePage = () => {
  const params = useParams().id;
  console.log(params);
  const { isLoading, isError, error, data } = useGame(parseInt(params));

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
      <p>{data?.data.name}</p>
      <p>{data?.data.company}</p>
      <p>{data?.data.numberOfTeam}</p>
    </>
  );
};

export default DetailGamePage;
