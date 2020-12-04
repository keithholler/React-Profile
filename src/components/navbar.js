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
  faMedal,
  fas
  
} from "@fortawesome/free-solid-svg-icons";



const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  

  return (
    <div className="navBar">
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="https://keithholler.github.io/React-Profile/" className="mr-auto" >
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
            <NavItem >
              <NavLink href="#" style={{color:'#ffff'}}>
                <FontAwesomeIcon icon={faHome} />
                {" "}
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#Projects" style={{color:'#ffff'}}>
                <FontAwesomeIcon icon={faList} />
                {" "}
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" style={{color:'#ffff'}}>
                <FontAwesomeIcon icon={faInfo} />
                {" "}
                About
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink href="#Certifications" style={{color:'#ffff'}}>
                <FontAwesomeIcon icon={faMedal} />
                {" "}
                Certifications
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="mailto:robert.keith.holler.@gmail.com" style={{color:'#ffff'}}>
              <i className="fa fa-envelope-o"></i>
                {" "}
                robert.keith.holler.@gmail.com
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
