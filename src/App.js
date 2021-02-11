import React, { Component } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Me from "./components/me";
import Certificates from "./components/certificates";
import ProjectCard from "./components/projectCards";
import { PROJECTS } from "./shared/projects";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/npeitk56r3czlx9cr8wd2ocwdsqah1bo.js";

    // For body
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Hero />
        <ProjectCard />
        <Me />
        <Certificates />
        <Footer />
      </div>
    );
  }
}

export default App;
