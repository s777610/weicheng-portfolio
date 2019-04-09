import React, { Component } from "react";
import PROJECTS from "../../data/projects";
import Project from "./Project";

class Projects extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Main Projects</h2>
        <div>
          {PROJECTS.map(PROJECT => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Projects;
