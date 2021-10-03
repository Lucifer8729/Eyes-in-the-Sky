import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Satellite from "./pages/Satellite/Satellite";
import Drone from "./pages/Drone/Drone";
import FloodRelief from "./pages/FloodRelief/FloodRelief";
import Output from "./pages/Output/Output";
import About from "./pages/About/About";

import "./App.module.css";

function App() {
  const history = useHistory();
  const [homePage, setHomePage] = useState(
    history.location.pathname === "/" || history.location.pathname === "/about"
  );

  useEffect(() => {
    if (homePage) {
      document.body.style.background = ``;
    } else {
      document.body.style.background = `linear-gradient(to bottom, #d8edf3, #c0dde6)`;
    }
  }, [homePage]);

  return (
    <>
      <Header setHomePage={setHomePage} homePage={homePage} />
      <Switch>
        <Route path="/satellite" exact component={Satellite} />
        <Route path="/drone" exact component={Drone} />
        <Route path="/flood-relief" exact component={FloodRelief} />
        <Route path="/about" exact component={About} />
        <Route path="/output" exact component={Output} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
