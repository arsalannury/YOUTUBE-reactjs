import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const GameCardPage = ({ name, age, company, numberOfTeam,id }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            there are {numberOfTeam} people in their team and company is{" "}
            {company}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/detail-game/${id}`}>
          <Button size="small">
            See More
          </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default GameCardPage;
