import { Box, Button, CircularProgress } from "@mui/material";
import { Fragment } from "react";
import { useInfiniteData } from "../../hooks/InfiniteData";

const InfiniteDataPage = () => {
  const { data, hasNextPage, fetchNextPage, isLoading, isError, error } =
    useInfiniteData();

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {data?.pages.map((data, index) => {
          return (
            <Fragment key={index}>
              {data?.data.map((file, index) => (
                <>
                  <div
                    key={index}
                    style={{ padding: "25px", marginTop: "100px" }}
                  >
                    <img
                      src={file.src}
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                </>
              ))}
            </Fragment>
          );
        })}
      </Box>
      { hasNextPage && <div
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Button style={{ textAlign: "center" }} onClick={fetchNextPage}>
          {isLoading ? <CircularProgress /> : "LoadMore"} 
        </Button>
      </div>}
    </>
  );
};

export default InfiniteDataPage;
