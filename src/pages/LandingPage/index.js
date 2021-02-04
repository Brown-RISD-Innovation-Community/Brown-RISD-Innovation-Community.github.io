import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.svg";
import Scissors from "../../assets/scissors.svg";
import NavigationBar from "../../components/NavigationBar";

import LandingIllustration from "../../assets/landing1.png";

function DottedBox(props) {
  return (
    <Container className="py-5">
      <div style={{ borderStyle: "dashed" }}>
        <Row style={{ minHeight: "350px" }}>
          <Col
            xs={12}
            md={4}
            className="col-4 p-4"
            style={{
              fontWeight: "bold",
              fontSize: 60,
              textTransform: "uppercase",
              margin: "auto",
            }}
          >
            {props.cardTitle}
          </Col>
          <Col
            xs={12}
            md={8}
            className="col-8"
            style={{ textAlign: "left", margin: "auto" }}
          >
            {props.children}
          </Col>
        </Row>
      </div>
    </Container>
  );
}
export function index() {
  return (
    <div
      style={{
        backgroundColor: "#0A44CB",
        color: "white",
        height: "100%",
      }}
    >
      <NavigationBar linkFontColor="white" />
      <Container
        className="d-sm-flex justify-content-center"
        style={{ height: "600px", alignItems: " center" }}
      >
        <Row>
          <Col xs={12} md={4}>
            <img
              src={LandingIllustration}
              alt="Illustration from Undraw on designers"
              style={{ width: "350px", maxWidth: "100%" }}
            />
          </Col>
          <Col xs={12} md={8}>
            <div style={{ width: "600px", maxWidth: "100%" }}>
              <Row
                className="mb-2"
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  // width: "600px",
                  textTransform: "uppercase",
                  marginBottom: "",
                }}
              >
                Brown RISD Innovation Community
              </Row>
              <Row style={{ textAlign: "left" }} className="p-4">
                EMPHASIZING THE IMPORTANCE OF INNOVATION IN FIELDS BEYOND PURE
                TECHNOLOGY THROUGH CREATING AN INCLUSIVE SPACE FOR
                INTERDISCIPLINARY COLLABORATION AND LEARNING.
              </Row>
              <Row className="p-4">
                LEARN MORE
                <img
                  className="mt-2 ml-4"
                  src={Arrow}
                  alt="Arrow to learn more"
                  style={{ width: "350px", maxWidth: "80%" }}
                />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <DottedBox cardTitle={"Vision"}>
        <div className="p-4">
          A DYNAMIC SPACE WHERE ARTISTS, HISTORIANS, COMPUTER SCIENTISTS,
          DESIGNERS, AND EVERYONE IN BETWEEN CAN LEARN TOGETHER AND FROM EACH
          OTHER THROUGH OUR INTEGRATED CURRICULUM. WE FOCUS ON FOSTERING DIVERSE
          OPINIONS, LEARNING NEW SKILLS, AND HANDS ON COLLABORATION ON COLLEGE
          HILL AND BEYOND.
        </div>
      </DottedBox>
      <DottedBox cardTitle={"Values"}>
        <ul
          style={{
            listStyle: "none",
            textAlign: "left",
            paddingInlineStart: "0",
          }}
          className="p-4"
        >
          <li>INCLUSIVE COMMUNITY</li>
          <li>INTERSECTIONAL INNOVATION</li>
          <li>EMBRACING FEEDBACK</li>
        </ul>
      </DottedBox>
    </div>
  );
}

export default index;
