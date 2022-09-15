import React from "react";
import PropTypes from "prop-types";
import HeaderPage from "../Header/HeaderPage";
import { Container } from "@mui/material";

const HomePage = (props) => {
  return (
    <>
      <Container maxWidth="xxl" sx={{display:"flex",alignItems:"flex-start",flexDirection:"column",height:"100%"}}>
        <HeaderPage />
      </Container>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
