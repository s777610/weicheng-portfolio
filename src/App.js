import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/layout/MyNavbar";
import Projects from "./components/projects/Projects";
import SocialsBox from "./components/socials/SocialsBox";
import About from "./components/about/About";
import SkillBox from "./components/skill/SkillBox";
import NotFound from "./components/PageNotFound";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/skill" component={SkillBox} />
          <Route path="*" component={NotFound} />
        </Switch>
        <SocialsBox />
        <p>Copyright &copy; Wei Cheng Hung 2019 All Rights Reserved</p>
      </HashRouter>
    );
  }
}

export default App;
