import React from "react";
import { Link } from "react-router-dom";
import { Container, Box, TextField, Button, Typography } from "@mui/material";

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
        <Box component={"ul"}>
          <Typography
            component={"li"}
            sx={{
              listStyleType: "none",
              margin: "0 !important",
            }}
          >
            <Link style={{all:"unset"}} to={"/games"}>Games</Link>
          </Typography>
        </Box>
        <Box>
          <TextField variant="standard" label="Search" />
        </Box>
      </Container>
    </>
  );
};

export default HeaderPage;
