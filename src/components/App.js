import "../App.css";
import Banner from "./Banner.js";
import Home from "./Home.js";
import Kontakt from "./Kontakt.js";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Banner />
      <nav className="nav flex center">
        <ul className="flex center">
          <li>
            <Link to="/">O nas</Link>
          </li>
          <li>
            <Link to="/Kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <div className="main flex center">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Kontakt">
            <Kontakt />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
