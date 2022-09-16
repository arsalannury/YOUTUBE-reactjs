import React, { Fragment } from "react";
import PropTypes from "prop-types";
import HeaderPage from "../Header/HeaderPage";
import { Box, Container, LinearProgress } from "@mui/material";
import TopBannerPage from "../Banneres/TopBannerPage";
import { useStores } from "../../hooks/Stores";
import StoresPage from "../Stores/StoresPage";
import PaginatedPage from "../Paginated/PaginatedPage";

const HomePage = (props) => {
  const { isLoading, isError, data, isFetching } = useStores();

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <LinearProgress />;
  }

  return (
    <>
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          height: "100%",
          position: "relative",
        }}
      >
        <HeaderPage />
        <TopBannerPage />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "65px",
          }}
        >
          {data?.data.map((store) => (
            <Fragment key={store.id}>
              <StoresPage
              key={store.id}
              id={store.id}
              country={store.country}
              city={store.city}
              zone={store.zone}
            />
            </Fragment>
          ))}
        </Box>
        <PaginatedPage />
      </Container>
    </>
  );
};



export default HomePage;
