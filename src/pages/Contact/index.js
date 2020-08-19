import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.png";
import NavigationBar from "../../components/NavigationBar";
import colorLogo from "../../assets/logo.svg";

export default function index() {
  return (
    <div style={{ backgroundColor: "#00BFA9" }}>
      <NavigationBar />
      <Container>
        <Row>Connect with us on social media</Row>
        <Row>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Linkedin</div>
        </Row>
        <Row>
          Email us @<a href="mailto:xinru_li@brown.edu">xinru_li@brown.edu</a>
        </Row>
      </Container>
      <Container>
        <Row>Looking to partner with us?</Row>
        <Row>
          Email us @{" "}
          <a href="mailto:ivan_zhao@brown.edu">ivan_zhao@brown.edu</a>
        </Row>
      </Container>
    </div>
  );
}
