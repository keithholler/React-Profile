import React, { Component } from "react";
import { PROJECTS } from "../shared/projects";
import "bootstrap/dist/css/bootstrap.min.css";
class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }

  render() {
    const projectcard = this.state.projects.map((project) => {
      return (
        <div
          className="col col-lg-6 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          key={project.id}
        >
          <div className="flip-card-container mx-auto pr-3 pr-md-0 mb-5">
            <div className="flip-card">
              <div className="flip-card-front rounded-lg">
                <img
                  id="music"
                  className="card-img-top rounded-lg"
                  src={project.image}
                  alt={project.projectname}
                />
                <h3 className="projectreason text-nowrap">
                  {project.typename}
                </h3>
                <h3 className="projecttitle">{project.projectname}</h3>
              </div>
              <div className="flip-card-back rounded-lg">
                {/* <!-- Particle Effect Back of Card                 --> */}
                <canvas className="pr-3 pr-md-0 mb-5 myCanvas"></canvas>
                <div className="container">
                  <div className="card cardbodOp mt-3">
                    <h5 className="card-header bg-dark text-white formhead">
                      Skills Used
                    </h5>
                    <div className="card-body">
                      <h5 className="text-dark text-center">
                        {project.logos.map((logo) => (
                          <span key={logo.id} className="spanskills">
                            {" "}
                            <img className="logoskills" src={logo.image} />{" "}
                            {logo.text}
                          </span>
                        ))}
                      </h5>
                    </div>
                  </div>
                  <div className="card cardbodOp">
                    <h5 className="card-header bg-dark text-white formhead">
                      About
                    </h5>
                    <div className="card-body">
                      <h5 className="text-dark">{project.about}</h5>
                      <ul className="text-center">
                        {project.links.map((link) => (
                          <span key={link.id}>
                            <li>
                              <a href={link.source} target="_blank">
                                {link.text}
                              </a>
                            </li>{" "}
                            <li> | </li>{" "}
                            <li>
                              <a href={link.source2} target="_blank">
                                {link.text2}
                              </a>
                            </li>{" "}
                            <li>{link.source3 ? " | " : ""} </li>{" "}
                            <li>
                              <a href={link.source3} target="_blank">
                                {link.text3}
                              </a>
                            </li>
                          </span>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 mx-auto">
            <h2 className="text-white text-center" id="Projects">
              Projects
            </h2>
          </div>
        </div>
        <div className="row row-content justify-content-around">
          {projectcard}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
