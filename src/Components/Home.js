import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Button sx={{ textDecoration: "none", color: "#1976d2" }} variant={"outlined"}>
      <Link style={{textDecoration: "none", color: "#1976d2"}} to={"/countries"}>Countries</Link>
    </Button>
  );
};

export default Home;
