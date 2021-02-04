import React from "react";

import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/new_logo.svg";

const navStyle = {
    fontFamily: "Arial",
    fontSize: 24,
    textTransform: "uppercase",
    // color: "white",
};

export default function index({ linkFontColor }) {
    return (
        <div className="p-4" style={{ color: "white" }}>
            <Navbar style={{ display: "flex" }} expand="lg">
                <Navbar.Brand href="/" className="m-auto">
                    <img
                        style={{ width: "150px" }}
                        src={Logo}
                        alt="BRIC Default Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-15" style={navStyle}>
                        <Nav.Link
                            href="/calendar"
                            className="px-5"
                            style={{ color: linkFontColor }}
                        >
                            Event Calendar
                        </Nav.Link>
                        <Nav.Link
                            href="/projects"
                            className="px-5"
                            style={{ color: linkFontColor }}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="/about-us"
                            className="px-5"
                            style={{ color: linkFontColor }}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link
                            href="/contact"
                            className="px-5"
                            style={{ color: linkFontColor }}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

// <Nav.Link
//   href="/calendar"
//   className="px-5"
//   style={{ color: linkFontColor }}
// >
//   Calendar
// </Nav.Link>
