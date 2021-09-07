import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mywork from "./pages/Mywork";
import Contactme from "./pages/Contactme";
import Aboutme from "./pages/Aboutme";
import Resume from "./pages/Resume";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Aboutme">
          <Aboutme />
        </Route>
        <Route exact path="/Contactme">
          <Contactme />
        </Route>
        <Route exact path="/Mywork">
          <Mywork />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
