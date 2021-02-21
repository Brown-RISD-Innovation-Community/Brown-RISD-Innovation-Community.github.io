import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../../components/NavigationBar.jsx";
// import colorLogo from "../../assets/";

// Icon imports
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Link(props) {
  return (
    <Col>
      <h3>
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0B43Cb" }}
        >
          {props.children}
        </a>
      </h3>
    </Col>
  );
}
export default function index() {
  return (
    <div style={{ backgroundColor: "#00BFA9", color: "#0B43CB" }}>
      <NavigationBar linkFontColor="white" />
      <Container className="pt-5 mb-5">
        <Row className="font-weight-bold">
          <h2>
            <strong>CONNECT WITH US ON SOCIAL MEDIA</strong>
          </h2>
        </Row>
        <Row className="p-3">
          <Link href="https://www.facebook.com/brownrisdinnovation/">
            <AiFillFacebook className="mb-2" />
            <span className="d-none d-sm-inline">Facebook</span>
          </Link>
          <Link href="https://www.instagram.com/brownrisdinnovation/">
            <AiFillInstagram className="mb-2" />
            <span className="d-none d-sm-inline">Instagram</span>
          </Link>
          <Link href="https://www.linkedin.com/company/brownrisdinnovation/">
            <AiFillLinkedin className="mb-2" />
            <span className="d-none d-sm-inline">Linkedin</span>
          </Link>
        </Row>
      </Container>
      <Container className="mt-5 pb-5 justify-content-sm-center justify-content-md-start">
        <Row className="font-weight-bold">
          <h2>
            <strong>Looking to partner with us?</strong>
          </h2>
        </Row>
        <Row
          className="pt-3 pb-3 px-3"
          style={{ fontSize: 24, wordBreak: "break-all" }}
        >
          Email us here:&nbsp;
          <a href="mailto:hello@brownrisdinnovation.com">
            hello@brownrisdinnovation.com
          </a>
        </Row>
      </Container>
    </div>
  );
}
