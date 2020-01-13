import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {Nav} from 'react-bootstrap'

function Nave() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link to="/Country">Country</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="/City">City</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="/Interests">Interests</Nav.Link>
  </Nav.Item>
</Nav>
            );
}

export default Nave;
