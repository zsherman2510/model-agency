import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import App from "./pages/App";
import Join from "./pages/Join";
import Models from "./pages/Models";
import * as serviceWorker from "./serviceWorker";

const Root = () => (
  <Router>
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route component={App} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Models} path="/models" />
        <Route component={Join} path="/join" />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
