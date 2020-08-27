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

const textStyle = {
  fontSize: 32,
};

export default function index() {
  return (
    <div
      style={{ backgroundColor: "#00BFA9", color: "#0B43CB", height: "75vh" }}
    >
      <NavigationBar linkFontColor="white" />
      <Container className="pt-5 mb-5">
        <Row className="font-weight-bold" style={textStyle}>
          CONNECT WITH US ON SOCIAL MEDIA
        </Row>
        <Row className="p-3">
          <Col style={textStyle}>
            <a
              href="https://www.facebook.com/brownrisdinnovation/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0B43Cb" }}
            >
              <AiFillFacebook className="mb-2" />
              Facebook
            </a>
          </Col>
          <Col style={textStyle}>
            <a
              href="https://www.instagram.com/brownrisdinnovation/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0B43Cb" }}
            >
              <AiFillInstagram className="mb-2" />
              Instagram
            </a>
          </Col>
          <Col style={textStyle}>
            <a
              href="https://www.linkedin.com/company/brownrisdinnovation/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0B43Cb" }}
            >
              <AiFillLinkedin className="mb-2" />
              Linkedin
            </a>
          </Col>
        </Row>
        {/* <Row>
          Email us @<a href="mailto:xinru_li@brown.edu">xinru_li@brown.edu</a>
        </Row> */}
      </Container>
      <Container className="mt-5 pb-5">
        <Row className="font-weight-bold" style={textStyle}>
          Looking to partner with us?
        </Row>
        <Row className="pt-3 pb-3" style={{ fontSize: 24 }}>
          Email us here:&nbsp;
          <a href="mailto:ivan_zhao@brown.edu">ivan_zhao@brown.edu</a>
        </Row>
      </Container>
    </div>
  );
}
// https://www.facebook.com/brownrisdinnovation/
// https://www.instagram.com/brownrisdinnovation/
