import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {Nav} from 'react-bootstrap'

function Nave() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav><Link to="/Countries"> Countries | </Link></Nav>
  </Nav.Item>
  <Nav.Item>
    <Nav><Link to="/Cities"> Cities | </Link></Nav>
  </Nav.Item>
  <Nav.Item>
    <Nav><Link to="/Interests"> Interests</Link></Nav>
  </Nav.Item>
</Nav>
            );
}

export default Nave;
