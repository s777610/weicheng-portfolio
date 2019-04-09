import React, { Component } from "react";

class Project extends Component {
  state = {};
  render() {
    const { title, image, description, link } = this.props.project;

    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={image} alt="project" className="project__img" />
        <p>{description}</p>
        <a
          className="btn btn-outline-info"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          See more...
        </a>
      </div>
    );
  }
}

export default Project;
