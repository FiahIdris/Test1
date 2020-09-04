import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import picture from "../assets/Ellipse_7.png"

function ChaptersCard({ chapter }) {


  return (
    <div style={ { marginLeft: "25px", marginBottom: "20px", borderRadius: "10px", textAlign: "center" } }>
      <Card style={ { width: "215px", height: "412px" } }>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="not available"
            // width="20"
            image={ picture }
            title="Contemplative Reptile"
            style={ { width: "80px", height: "80px", borderRadius: "1000px", borderStyle: "solid", borderColor: "#3598DC", margin: "auto", marginTop: "30px", marginBottom: "20px" } }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              { chapter.name }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              { chapter.address }
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={ { marginTop: "50px", marginBottom: "20px", color: "#3598DC" } }>
              { chapter.email }
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div style={ { borderColor: "#3598DC", borderStyle: "solid", borderWidth: "1px", borderRadius: "5px", margin: "auto", marginBottom: "0px" } }>
            <Button size="small" style={ { color: "#3598DC", marginBottom: "0px" } }>
              Kontak Chapter
            </Button>
          </div>

        </CardActions>
      </Card>
    </div>
  )
}

export default ChaptersCard;