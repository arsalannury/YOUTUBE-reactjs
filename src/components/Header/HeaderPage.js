import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useQuery } from "react-query";

const fetchAuthor = () => {
  return axios.get("http://localhost:4000/author");
};

const fetchUser = (authorId) => {
  return axios.get(`http://localhost:4000/admindata/${authorId}`);
};

const LiTypography = ({ children }) => {
  return (
    <Typography
      component={"li"}
      sx={{
        listStyleType: "none",
        margin: "0 !important",
        padding: "0 10px",
        cursor: "pointer",
      }}
    >
      {children}
    </Typography>
  );
};

const HeaderPage = () => {
  const { data: author } = useQuery("author", fetchAuthor);
  const authorId = author?.data.idCard;

  const { data, isLoading, isError } = useQuery(
    ["user", authorId],
    () => fetchUser(authorId),
    {
      enabled: !!authorId,
    }
  );

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
        <Box component={"ul"} sx={{ display: "flex", alignItems: "center" }}>
        <LiTypography>
            <Link style={{ all: "unset" }} to={"/add-game"}>
              Add game
            </Link>
          </LiTypography>
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
          <LiTypography>
            {isLoading ? <CircularProgress /> : data?.data.name}
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
