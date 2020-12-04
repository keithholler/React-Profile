import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faList,
  faComment,
  faMedal
  
} from "@fortawesome/free-solid-svg-icons";



const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  

  return (
    <div className="navBar">
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="https://keithholler.github.io/" className="mr-auto">
          <img
            src=".\assets\images\logo.png"
            width="50px"
            className="logo img-fluid"
            alt="Profile Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar className="mx-auto">
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon icon={faHome} />
                {" "}
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Projects">
                <FontAwesomeIcon icon={faList} />
                {" "}
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">
                <FontAwesomeIcon icon={faInfo} />
                {" "}
                About
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink href="#Certifications">
                <FontAwesomeIcon icon={faMedal} />
                {" "}
                Certifications
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:robert.keith.holler.@gmail.com">
                <FontAwesomeIcon icon={faComment} />
                {" "}
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
