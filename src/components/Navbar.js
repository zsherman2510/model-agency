import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="warning" className="">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-between color--lime"
        >
          <Navbar.Brand className="" href="/">
            HumanKind
          </Navbar.Brand>
          <Nav className="justify-content-around">
            <NavLink className="nav-link text-dark" to="/about">
              Meet Execute
            </NavLink>
            <NavLink className="nav-link text-dark" to="/join">
              Join the Family
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
