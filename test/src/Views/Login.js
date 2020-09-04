import React, { useState } from "react"
import { useHistory } from 'react-router-dom'

function Login() {
  const history = useHistory()
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  function handleSubmit() {
    if (email && password) {
      localStorage.setItem("password", password)
      localStorage.setItem("email", email)
      history.push("/home")
    }


  }
  return (

    <>
      <div className="div-register">
        <h1 style={ { color: "#F200FF", marginTop: "61px" } }>Welcome Back</h1>
        <div style={ { marginTop: "24px", width: "280px", height: "42px", marginLeft: "160px" } }>

          <h5 >Silahkan masuk dengan akun anda untuk melanjutkan</h5>
        </div>
        <form onSubmit={ handleSubmit }>
          <div className="form-group">
            <label></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" style={ { width: "400px", textAlign: "center", marginLeft: "100px", height: "40px" } } onChange={ (event) => setEmail(event.target.value) } />
          </div>
          <div className="form-group">
            <label ></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={ { width: "400px", textAlign: "center", marginLeft: "100px", height: "40px" } } onChange={ (event) => setPassword(event.target.value) } />
            {/* <label className="form-check-label">Check me out</label> */ }
          </div>
          <button type="submit" className="btn btn-primary" style={ { width: "400px", textAlign: "center", height: "40px", marginTop: "29px" } } >Masuk</button>

        </form>
      </div>
    </>
  )
}

export default Login;