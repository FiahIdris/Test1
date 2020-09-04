import React from "react"
import Grid from '@material-ui/core/Grid';
import Navigation from "../components/Navigation"
import ProgramsCard from "../components/ProgramsCard"
import ChaptersCard from "../components/ChaptersCard"
import Footers from "../components/Footers"

function InfoPendaftaran() {

  const dataChapters = require("../chapters.json")

  return (
    <>
      <Navigation />
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        item xs={ 12 }
      >

        <Grid
          container
          direction="column"
          justify="center"
          item xs={ 4 }
          alignItems="center">

          <h2 style={ { textAlign: "center", color: "#3598DC", marginTop: "60px" } }>Pendaftaran Seleksi Bina AntarBudaya 2020-2021</h2>
          <p>EXPLORE THE WORLD, EXPLORE YOURSELF</p>

        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          item xs={ 12 }
          alignItems="center"
        >
          <div style={ { margin: "auto", textAlign: "center" } }>
            <p style={ { fontWeight: "bold", marginTop: "30px" } }>Pilih Program di bawah ini yang akan Adik ikuti:</p>
            <div style={ { marginTop: "50px", display: "flex" } }>
              <ProgramsCard />
            </div>
          </div>
          <div style={ { marginTop: "150px", marginBottom: "50px", paddingLeft: "270px" } }>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              item xs={ 8 }>
              <p style={ { textAlign: "center", fontWeight: "bold", fontSize: "15px" } }>Tentang Bina Antar Budaya</p>
              <p style={ { textAlign: "center" } }>Bina Antarbudaya adalah organisasi pendidikan antarbudaya berbasis relawan, yang memberikan kesempatan untuk memperoleh pendidikan antarbudaya secara global. Sejak didirikan pada tahun 1985, Bina Antarbudaya telah mengirim lebih dari 3000 siswa Indonesia dan menerima lebih dari 1500 siswa asing dari berbagai Negara. Saat ini Bina Antarbudaya telah memiliki 20 chapter di seluruh Indonesia. Bina Antarbudaya merupakan mitra AFS Intercultural Programs, salah satu organisasi pertukaran antarbudaya terbesar di dunia yang beroperasi di lebih dari 60 negara di lima benua.</p>
            </Grid>
          </div>

          <Grid
            container
            direction="column"
            justify="flex-start"
          // alignItems="center"
          >
            <p style={ { marginBottom: "30px", marginLeft: "25px", fontFamily: "Roboto", fontSize: "18px" } }>CHAPTER-CHAPTER BINA ANTARBUDAYA</p>
            <Grid
              container
              direction="row"
              justify="flex-start"
              item xs={ 12 }>

              {
                dataChapters.map((chapter, index) => (
                  <ChaptersCard
                    key={ index }
                    chapter={ chapter }
                  />
                ))
              }

            </Grid>
          </Grid>


        </Grid>
        <Footers />


      </Grid>
    </>
  )
}

export default InfoPendaftaran;