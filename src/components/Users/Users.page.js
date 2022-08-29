import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const UsersPage = ({ firstname, lastname, avatar, email, id }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={avatar}
        sx={{ objectFit: "contain" }}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firstname} {lastname}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/user/${id}`}>More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default UsersPage;
