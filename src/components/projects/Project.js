import React from "react";

const Project = props => {
  const { title, image, description, link, demo } = props.project;

  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt="project" className="project__img" />
      <p>{description}</p>
      {demo ? (
        <a
          style={{ marginRight: 10 }}
          className="btn btn-warning"
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
        >
          DEMO
        </a>
      ) : null}

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
};

export default Project;
