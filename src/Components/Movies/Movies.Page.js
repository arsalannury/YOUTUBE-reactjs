import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMoviesData from "../hooks/MoviesData";
import CircularProgress from "@mui/material/CircularProgress";
import Rating from "@mui/material/Rating";

const MoviesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useMoviesData();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <Grid
        container
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        width={"100%"}
        flexWrap={"wrap"}
        rowGap={4}
        rowColumn={4}
      >
        {data?.data.map((movie) => (
          <>
            <Card sx={{ maxWidth: 545, minWidth: 345 }}>
              <CardMedia
                component="img"
                height="250"
                image={movie.image}
                sx={{ width: "100%", objectFit: "fill" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.name}
                </Typography>
                {movie.score}{" "}
                <Rating name="read-only" value={movie.score} readOnly />
              </CardContent>
              <CardActions>
                <Button size="small">See More</Button>
              </CardActions>
            </Card>
          </>
        ))}
      </Grid>
    </>
  );
};

export default MoviesPage;
