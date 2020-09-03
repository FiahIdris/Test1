import React from "react"
import Grid from '@material-ui/core/Grid';

function Navigation() {

  return (
    <Grid
      container
      direction="row"
    // justify="space-between"
    >
      <Grid
        container
        direction="row"
        item xs={ 10 }
      >
        <h5 style={ { margin: "20px" } }>LOGO</h5>
      </Grid>
      <Grid
        container
        direction="row"
        item xs={ 2 }
        justify="space-between"

      >

        <p style={ { marginLeft: "20px", marginTop: "20px" } }>Home</p>
        <p style={ { marginLeft: "20px", marginTop: "20px" } }>Peserta</p>
        <p style={ { marginLeft: "20px", marginTop: "20px", marginRight: "20px" } }>User</p>
      </Grid>

    </Grid>
  )
}

export default Navigation;