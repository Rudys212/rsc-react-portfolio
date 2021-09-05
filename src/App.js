import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutme from "./pages/Aboutme";
import Homepage from "./pages/Homepage";
import Mywork from "./pages/Mywork";
import Contactme from "./pages/Contactme";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/About" component={Aboutme} />
        <Route exact path="/Mywork" component={Mywork} />
        <Route exact path="/Contactme" component={Contactme} />
      </Switch>
    </Router>
  );
}

export default App;
