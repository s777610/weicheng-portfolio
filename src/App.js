import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MyNavbar from "./components/layout/MyNavbar";
import Projects from "./components/projects/Projects";
import SocialsBox from "./components/socials/SocialsBox";
import About from "./components/about/About";
import SkillBox from "./components/skill/SkillBox";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/skill" component={SkillBox} />
        </Switch>
        <SocialsBox />
        <p>Copyright &copy; Wei Cheng Hung 2019 All Rights Reserved</p>
      </BrowserRouter>
    );
  }
}

export default App;
