import React from "react";
import InstanseCountries from "../axios/CountriesInstanse";
import { useQuery } from "react-query";
import { Box, CircularProgress, Typography } from "@mui/material";

const getDataFromFirebase = () => {
  return InstanseCountries.get("/countries.json");
};

function Countries() {
  const COUNTRIES_KEY = "countries";

  const { isError, error, isLoading, data, isFetching } = useQuery(
    COUNTRIES_KEY,
    getDataFromFirebase
  );

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return (
      <>
        <h3>Fetching data is feild</h3>
      </>
    );
  }

  return (
    <>
      {data?.data.map((country) => (
        <>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"column"}
          >
            <Box>
              <Typography>{country.name}</Typography>
            </Box>
            <Box>
              <Typography>{country.relogion}</Typography>
            </Box>
            <Box>
              <Typography>{country.code}</Typography>
            </Box>
          </Box>
        </>
      ))}
    </>
  );
}

export default Countries;
