import React from "react";

const Social = props => {
  const { link, image } = props.social;
  return (
    <React.Fragment>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="socialIcon" src={image} alt="social" />
      </a>
    </React.Fragment>
  );
};

export default Social;
