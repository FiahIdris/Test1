import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom"
import Login from "./Views/Login"
import Register from "./Views/Register"
import Home from "./Views/Home"

function App() {
  return (
    <div className="App">
      <Router>


        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
