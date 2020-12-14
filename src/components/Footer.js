import React from "react";

function Footer(props) {
  return (
    <footer className="indexFooter">
      <div className="container-fluid">
        <hr />
        <div className="row justify-content-md-center">
          <div className="col-6 col-sm-5 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-facebook"
              href="https://www.facebook.com/keith.holler.7"
              target="_blank"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-linkedin"
              href="https://www.linkedin.com/in/robert-keith-holler "
              target="_blank"
            >
              <i className="fa fa-linkedin" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-github"
              href="https://github.com/keithholler"
              target="_blank"
            >
              <i className="fa fa-github" />
            </a>{" "}
          </div>
          <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="tel:+4436008599">
              <i className="fa fa-phone"></i> 443-600-8599
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:robert.keith.holler.@gmail.com"
            >
              <i className="fa fa-envelope-o"></i>{" "}
              robert.keith.holler.@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
