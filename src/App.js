import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./tuts/Home";
import Lists from "./tuts/Lists";
import Greet from "./tuts/Greet";
import Useref from "./tuts/Useref";

function App() {


  return (
    <Router>
      <Switch>
        <Route exact component={Home} path="/"/>
        <Route component={Lists} path="/lists"/>
        <Route component={Greet} path="/greet/:name"/>
        <Route component={Useref} path="/useref-hook"/>
      </Switch>
    </Router>
  )
}

export default App;
