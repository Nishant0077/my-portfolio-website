import React from "react";
import LandingPage from "./landingpage";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Resume from "./resume";
import Projects from "./projects";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
