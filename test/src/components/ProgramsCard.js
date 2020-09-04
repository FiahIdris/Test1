import React from "react"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import yes_logo1 from "../assets/yes_logo1.svg"
import yes_logo2 from "../assets/AFS_LOGO1.svg"
import yes_logo3 from "../assets/kakehasi_logo1.svg"


function ProgramsCard() {

  return (
    <div style={ { display: "flex", justifyContent: "space-between" } }>
      <Grid
        container
        direction="column"
        item xs={ 3 }
      >
        <Avatar variant="square" alt="not available" src={ yes_logo1 } style={ { width: "100px", height: "100px" } } />
        <Button style={ { marginTop: "30px" } } variant="contained">Pilih Program</Button>
      </Grid>

      <Grid
        container
        direction="column"
        item xs={ 3 }
      >
        <Avatar variant="square" alt="not available" src={ yes_logo2 } style={ { width: "100px", height: "100px" } } />
        <Button style={ { marginTop: "30px" } } variant="contained">Pilih Program</Button>
      </Grid>

      <Grid
        container
        direction="column"
        item xs={ 3 }
      >
        <Avatar variant="square" alt="not available" src={ yes_logo3 } style={ { width: "100px", height: "100px" } } />
        <Button style={ { marginTop: "30px" } } variant="contained">Pilih Program</Button>
      </Grid>
    </div >
  )
}

export default ProgramsCard;