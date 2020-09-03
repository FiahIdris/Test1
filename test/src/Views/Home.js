import React from "react"
import { useHistory } from "react-router-dom"

function Home() {
  const history = useHistory()

  function handleClick() {

    localStorage.clear()
    history.push("/login")
  }
  return (

    <>
      <div className="div-home" style={ { display: "flex", flexDirection: "column" } }>
        <div className="div-home_top" style={ { backgroundColor: "#F200FF", width: "1536px", height: "276px", marginTop: "0px" } }>
          <div className="div-greeting" style={ { backgroundColor: "#FFFFFF", width: "371px", height: "62px", margin: "243px 574px" } }>

            <h1 style={ { textAlign: "center", marginTop: "180px" } }>Tampilkan nama email</h1>
          </div>
        </div>
        <button style={ { backgroundColor: "#F200FF", borderRadius: "25px", width: "200px", marginLeft: "670px", marginTop: "60px" } } onClick={ handleClick }>Keluar</button>

      </div>
    </>
  )
}

export default Home;