import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import colorLogo from "../../assets/multicolor.png";

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
            <img
              className="mt-2"
              src={colorLogo}
              alt="BRIC logo"
              style={{ width: "150px" }}
            />
          </Col>
          <Col>
            <div className="mb-3">
              Want to get involved? Join our community!
            </div>
            <iframe
              src="https://brownrisdinnovation.substack.com/embed"
              style={{
                width: "48",
                height: "100px",
                scrolling: "no",
              }}
              frameBorder="0"
              title="Joining the substack"
            ></iframe>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <ul style={{ color: "white" }}>
              <li className="list-unstyled">
                <a href="/about-us" style={listStyle}>
                  - About Us
                </a>
              </li>
              <li className="list-unstyled">
                <a href="/calendar" style={listStyle}>
                  - Calendar
                </a>
              </li>
              <li className="list-unstyled">
                <a href="/curriculum" style={listStyle}>
                  - Curriculum
                </a>
              </li>
              <li className="list-unstyled">
                <a href="/contact" style={listStyle}>
                  - Contact Us
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
