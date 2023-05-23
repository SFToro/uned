import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ text, title, poster }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 330, width: 220 }}
        image={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster}`}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" color="text.secondary"> */}
        {/*   {text} */}
        {/* </Typography> */}
      </CardContent>
      <CardActions >
        <Button size="small">Ver más</Button>
      </CardActions>
    </Card>
  );
}
