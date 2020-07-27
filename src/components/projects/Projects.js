import React from 'react';
import PROJECTS from '../../data/projects';
import Project from './Project';

const Projects = () => {
  return (
    <React.Fragment>
      <h2>Personal Small Projects</h2>
      <div>
        {PROJECTS.map((PROJECT) => {
          return <Project key={PROJECT.id} project={PROJECT} />;
        })}
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Projects;
