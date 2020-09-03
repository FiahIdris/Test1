import React from "react"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import yes_logo1 from "../assets/yes_logo1.svg"
import yes_logo2 from "../assets/AFS_LOGO1.svg"
import yes_logo3 from "../assets/kakehasi_logo1.svg"


function ProgramsCard() {

  return (
    <>
      <Grid
        container
        direction="column"
        item xs={ 2 }
      >
        <Avatar alt="not available" src={ yes_logo1 } />
        <Button style={{marginTop:"20px", fontSize:"10px"}} variant="contained">Pilih Program</Button>
      </Grid>

      <Grid
        container
        direction="column"
        item xs={ 2 }
      >
        <Avatar alt="not available" src={ yes_logo2 } />
        <Button style={{marginTop:"20px", fontSize:"10px"}} variant="contained">Pilih Program</Button>
      </Grid>

      <Grid
        container
        direction="column"
        item xs={ 2 }
      >
        <Avatar alt="not available" src={ yes_logo3 } />
        <Button style={{marginTop:"20px", fontSize:"10px"}} variant="contained">Pilih Program</Button>
      </Grid>
    </>
  )
}

export default ProgramsCard;