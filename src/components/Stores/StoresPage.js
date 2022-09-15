 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const StoresPage = ({country,city,zone}) => {
  return (
    <>
    <Card sx={{ maxWidth: 345,margin:"45px" }}>
      <CardActionArea>
        <CardMedia
          component="img" 
          height="140"
          image="image-game.jpg"
          alt="image-game"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {country}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {city} {zone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See
        </Button>
      </CardActions>
    </Card>
    </>
  )
}

export default StoresPage