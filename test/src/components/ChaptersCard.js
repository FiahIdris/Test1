import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import picture from "../assets/Ellipse_7.png"

function ChaptersCard() {


  return (

    <Card style={ { width: "215px", height: "412px" } }>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="not available"
          // height="50"
          width="30"
          image={ picture }
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kantor Nasional
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Jl. Limau No. 22, Kebayoran Baru - Jakarta 12130
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            @binaantarbudaya
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Kontak Chapter
      </Button>
      </CardActions>
    </Card>
  )
}

export default ChaptersCard;