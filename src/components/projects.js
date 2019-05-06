import React, { Component } from "react";
import Img from "gatsby-image";

const Projects =(projectImgs) => {
  // console.log(projectImgs.projectImgs[0].node)
  return (
    <div>
      <h1>Projects</h1>
      {projectImgs.projectImgs.map(project => {
        const imageSizes = project.node.childImageSharp.sizes;
        console.log(imageSizes)
        return (
          <div key={project.node.relativePath} className="card-img">
            <Img
              title={project.node.name}
              alt="Screenshot of Project"
              fixed={project.node.childImageSharp.fixed}
              className="card-img_src center-block"
              />
            <p>{project.node.name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Projects;
