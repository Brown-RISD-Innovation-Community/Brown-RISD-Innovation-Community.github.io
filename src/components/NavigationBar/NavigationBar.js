import React from "react";

import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/new_logo.svg";
import styles from "./NavigationBar.module.css";

export default function NavigationBar({ linkFontColor }) {
  return (
    <div className="p-4">
      <Navbar className="flex" expand="lg">
        <Navbar.Brand href="/" className="m-auto">
          <img className={styles.logo} src={Logo} alt="BRIC Default Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ml-auto mr-15 ${styles["nav-style"]}`}>
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
