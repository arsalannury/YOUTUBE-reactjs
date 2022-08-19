import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Button variant="standard">
        <Link to={"/movies"}>movies</Link>
      </Button>
    </>
  );
};

export default HomePage;
