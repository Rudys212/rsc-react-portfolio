import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mywork from "./pages/Mywork";
import Contactme from "./pages/Contactme";
import Aboutme from "./pages/Aboutme";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
