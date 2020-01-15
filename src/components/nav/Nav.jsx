import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import WhereToGo from "../nav/WhereToGo";

function Nave() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link className="navColor" to="/"> Home  </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto " >
          <Nav >
            <Link className="navColor" to="/Countries"> Countries . </Link>
          </Nav>
          <Nav>
            <Link className="navColor" to="/Cities"> Cities   . </Link>
          </Nav>
          <Nav variant="outline-secondary">
            <Link className="navColor" to="/Interests"> Interests </Link>
          </Nav>
        </Nav>
        <Nav className="mr-auto">
          <WhereToGo />
        </Nav>
        <Nav>
          <Nav>
            <Link className="navColor" to="/About"> About </Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nave;
