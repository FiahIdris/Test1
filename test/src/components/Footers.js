import React from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


function Footers() {


  return (
    <div className="container-fluid" style={ { backgroundColor: "#3598DC", height: "70px", textAlign: "center", marginTop: "50px" } }>


      <Typography variant="body2" color="textSecondary" component="p" style={ { textAlign: "center", marginTop: "20px" } }>
        2020 © Yayasan Bina Antarbudaya
        </Typography>
    </div>
  )
}

export default Footers;