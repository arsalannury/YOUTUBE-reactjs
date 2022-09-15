import React from "react";
import PropTypes from "prop-types";
import HeaderPage from "../Header/HeaderPage";
import { Container } from "@mui/material";
import TopBannerPage from "../Banneres/TopBannerPage";

const HomePage = (props) => {
  return (
    <>
      <Container maxWidth="xxl" sx={{display:"flex",alignItems:"flex-start",flexDirection:"column",height:"100%",position:"relative"}}>
        <HeaderPage />
        <TopBannerPage />
      </Container>
    </>
  );
};

HomePage.propTypes = {};

export default HomePage;
