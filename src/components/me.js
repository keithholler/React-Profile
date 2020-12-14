import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Me = (props) => {
  return (
    <div className="container-fluid bg-dark" id="about">
      <div className="row row-content-noborder row-content-topbord">
        <div className="col-md-18 mx-auto">
          <h2
            className=" text-nowrap text-center m-3 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Hello I am
          </h2>

          <img
            className="rounded-circle me mx-auto d-block"
            data-aos="fade-up"
            data-aos-duration="1000"
            src="./assets/images/me.jpg"
            alt="profile picture"
          />

          <h1
            className="name text-nowrap  text-center mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Keith Holler
          </h1>

          <p
            className="intro text-no-wroap text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            And I am a web developer who creates user friendly functional
            websites.
          </p>
        </div>
      </div>
      {/* <!-- Resume Buttom     --> */}
      <div className="row row-content-noborder align-items-center align-items-start">
        <div
          className="col-md-8 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="col col-12 mx-auto text-center">
            <a href="./assets/resume/Resume-Robert-Keith-Holler1.pdf">
              <Button type="button" size="lg" className="text-nowrap resumebtn">
                <div>View Resume</div>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
