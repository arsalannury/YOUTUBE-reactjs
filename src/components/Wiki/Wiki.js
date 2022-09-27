import {
    Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";
import useWiki from "../../hooks/useWiki";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

const Wiki = () => {
  const { data, error, isError, isLoading } = useWiki();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <ErrorBoundry />;
  }

  return (
    <>
      <Box sx={{display:"flex" , alignItems:"center" , justifyContent:"space-around" , flexWrap:"wrap"}}>
      {data?.data.map((data, index) => (
        <Card sx={{ width: 375, margin:"10px", }}>
          <CardMedia
            component="img"
            height="150"
            sx={{width:"100%",objectFit:"fill"}}
            image={data.flag}
            alt="logo group"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {data.born} - {data.death}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">See More...</Button>
          </CardActions>
        </Card>
      ))}
      </Box>
    </>
  );
};

export default Wiki;
