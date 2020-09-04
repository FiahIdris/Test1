import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom"
import Login from "./Views/Login"
import Register from "./Views/Register"
import Home from "./Views/Home"
import InfoPendaftaran from "./Views/InfoPendaftaran"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/info">
            <InfoPendaftaran />
          </Route>
          <Route path="/">
            <Register />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
