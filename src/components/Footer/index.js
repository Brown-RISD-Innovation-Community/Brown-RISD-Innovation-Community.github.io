import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import colorLogo from "../../assets/logo.svg";

export default function index() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const currYear = getYear();

  const listStyle = {
    color: "white",
  };

  return (
    <div className="p-3" style={{ backgroundColor: "#43464b", color: "white" }}>
      <Container>
        <Row>
          <Col>
            <img src={colorLogo} alt="BRIC logo" style={{ width: "150px" }} />
          </Col>
          <Col>
            Want to stay connected? Join our mailing list!
            <iframe
              src="https://brownrisdinnovation.substack.com/embed"
              style={{
                width: "480",
                height: "320",
                // style: "border:1px solid #EEE; background:white;",
                // frameborder: "0",
                scrolling: "no",
              }}
              title="Joining the substack"
            ></iframe>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <h5 className="title">Links</h5>
            <ul style={{ color: "white" }}>
              <li className="list-unstyled">
                <a href="/" style={listStyle}>
                  Home
                </a>
              </li>
              <li className="list-unstyled">
                <a href="/about-us" style={listStyle}>
                  About Us
                </a>
              </li>
              <li className="list-unstyled">
                <a href="/calendar" style={listStyle}>
                  Calendar
                </a>
              </li>
              <li className="list-unstyled">
                <a href="/contact" style={listStyle}>
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="pt-4" style={{ justifyContent: "center" }}>
          © {currYear} Brown RISD Innovation Community
        </Row>
      </Container>
    </div>
  );
}
