import { Box, Button, ButtonGroup } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";

const PaginatedPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const fetchData = (pageNumber) => {
    return axios.get(
      `http://localhost:4000/customers?_limit=2&_page=${pageNumber}`
    );
  };

  const { data, isLoading, isError, isFetching } = useQuery(
    ["paginated", pageNumber],
    () => fetchData(pageNumber),
    { keepPreviousData: true }
  );

  const handleNextPage = () => {
    setPageNumber(() => pageNumber + 1);
  };

  const handlePrevPage = () => {
    setPageNumber(() => pageNumber - 1);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "25px",
          border: "1px solid #222",
          margin: "25px",
        }}
      >
        {data?.data.map((data) => (
          <>
            <Box
              key={data.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexDirection: "column",
                minWidth: "345px",
              }}
            >
              <p>{data.name}</p>
              <p>{data.lastbuy}</p>
            </Box>
          </>
        ))}
        <ButtonGroup>
          <Button onClick={handleNextPage}>next</Button>
          <Button onClick={handlePrevPage}>prev</Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default PaginatedPage;
