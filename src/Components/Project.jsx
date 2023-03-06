import React from 'react';

function Project(props) {
  const { title, description, imageUrl } = props.project;

  return (
    <div className="project">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;
