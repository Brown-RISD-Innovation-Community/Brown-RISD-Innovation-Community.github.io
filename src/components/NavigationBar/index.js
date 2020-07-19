import React from "react";

import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/logo.svg";

const navStyle = {
  fontFamily: "Arial",
  fontSize: 30,
  textTransform: "uppercase",
};

export default function index() {
  return (
    <div>
      <Navbar style={{ display: "flex" }} expand="lg">
        <Navbar.Brand href="#home" className="ml-5">
          <img style={{ width: "150px" }} src={Logo} alt="BRIC Default Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          //   style={{ justifyContent: "flex-end" }}
        >
          <Nav className="ml-auto mr-15" style={navStyle}>
            <Nav.Link href="#home" className="px-5">
              About Us
            </Nav.Link>
            <Nav.Link href="#link" className="px-5">
              Calendar
            </Nav.Link>
            <Nav.Link href="/dsa" className="px-5">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
