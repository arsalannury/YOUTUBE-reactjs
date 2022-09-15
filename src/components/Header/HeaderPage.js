import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, TextField, Button, Typography } from "@mui/material";

const LiTypography = ({ children }) => {
  return (
    <Typography
      component={"li"}
      sx={{
        listStyleType: "none",
        margin: "0 !important",
        padding:"0 10px",
        cursor:"pointer"
      }}
    >
      {children}
    </Typography>
  );
};

const HeaderPage = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box component={"ul"} sx={{display:"flex",alignItems:"center"}}>
          <LiTypography>
            <Link style={{ all: "unset" }} to={"/games"}>
              Games
            </Link>
          </LiTypography>
          <LiTypography>
            <Link style={{ all: "unset" }} to={"/about-us"}>
              About us
            </Link>
          </LiTypography>
          <LiTypography>
            <Link style={{ all: "unset" }} to={"/best-games"}>
              Best games
            </Link>
          </LiTypography>
        </Box>
        <Box>
          <TextField variant="standard" label="Search" />
        </Box>
      </Container>
    </>
  );
};

export default HeaderPage;
