import React from "react";

import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/new_logo.svg";

const navStyle = {
  fontFamily: "Arial",
  fontSize: 24,
  textTransform: "uppercase",
  color: "white",
};

const linkStyle = {
  color: "white",
};

export default function index() {
  return (
    <div style={{ color: "white" }}>
      <Navbar style={{ display: "flex" }} expand="lg">
        <Navbar.Brand href="/" className="ml-5">
          {/* {logo} */}
          <img style={{ width: "150px" }} src={Logo} alt="BRIC Default Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-15" style={navStyle}>
            <Nav.Link href="/about-us" className="px-5" style={linkStyle}>
              About Us
            </Nav.Link>
            <Nav.Link href="/calendar" className="px-5" style={linkStyle}>
              Calendar
            </Nav.Link>
            <Nav.Link href="/contact" className="px-5" style={linkStyle}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
