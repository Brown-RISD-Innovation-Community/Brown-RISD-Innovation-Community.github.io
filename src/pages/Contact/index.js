import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../../components/NavigationBar";
// import colorLogo from "../../assets/";

// Icon imports
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export default function index() {
  return (
    <div
      style={{ backgroundColor: "#00BFA9", color: "#0B43CB",  }}
    >
      <NavigationBar linkFontColor="white" />
      <Container className="pt-5 mb-5">
        <Row className="font-weight-bold">
          <h2><strong>CONNECT WITH US ON SOCIAL MEDIA</strong></h2>
        </Row>
        <Row className="p-3">
          <Col>
            <h3>
            <a
              href="https://www.facebook.com/brownrisdinnovation/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0B43Cb" }}
            >
              <AiFillFacebook className="mb-2" />
              <span className="d-none d-sm-inline">Facebook</span>
              
              
            </a>
            </h3>
          </Col>
          <Col>
            <h3><a
              href="https://www.instagram.com/brownrisdinnovation/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0B43Cb" }}
            >
              <AiFillInstagram className="mb-2" />
              <span className="d-none d-sm-inline">Instagram</span>
            </a></h3>
          </Col>
          <Col>
            <h3><a
              href="https://www.linkedin.com/company/brownrisdinnovation/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0B43Cb" }}
            >
              <AiFillLinkedin className="mb-2" />
              <span className="d-none d-sm-inline">LinkedIn</span>
            </a></h3>
          </Col>
        </Row>
        {/* <Row>
          Email us @<a href="mailto:xinru_li@brown.edu">xinru_li@brown.edu</a>
        </Row> */}
      </Container>
      <Container className="mt-5 pb-5 justify-content-sm-center justify-content-md-start">
        <Row className="font-weight-bold">
          <h2><strong>Looking to partner with us?</strong></h2>
        </Row>
        <Row className="pt-3 pb-3 px-3" style={{ fontSize: 24, wordBreak: "break-all" }}>
          Email us here:&nbsp;
          <a href="mailto:hello@brownrisdinnovation.com">
            hello@brownrisdinnovation.com
          </a>
        </Row>
      </Container>
    </div>
  );
}
// https://www.facebook.com/brownrisdinnovation/
// https://www.instagram.com/brownrisdinnovation/
