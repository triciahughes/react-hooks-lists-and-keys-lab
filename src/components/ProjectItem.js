import React from "react";

function ProjectItem({ name, about, technologies }) {
  const tech = technologies.map((technology) => {
    return <span key={technology}>{technology}</span>;
  });

  // function techSpan(technologies) {
  //   technologies.map((tech) => {
  //     return <span>{tech}</span>;
  //   });
  // }

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {tech}
      </div>
    </div>
  );
}

export default ProjectItem;
