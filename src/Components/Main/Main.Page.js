import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Button variant={"contained"}>
        <Link style={{ all: "unset" }} to={"/users"}>
          See Users
        </Link>
      </Button>
      <Button variant={"contained"}>
        <Link style={{ all: "unset" }} to={"/paraller"}>
          Paraller
        </Link>
      </Button>
    </>
  );
};

export default MainPage;
