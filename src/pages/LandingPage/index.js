import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.png";
import Scissors from "../../assets/scissors.svg";
import NavigationBar from "../../components/NavigationBar";

import LandingIllustration from "../../assets/landing_design.svg";

export function index() {
  return (
    <div
      style={{
        backgroundColor: "#0A44CB",
        color: "white",
        height: "100%",
      }}
    >
      <NavigationBar />
      <Container
        className="d-flex justify-content-center"
        style={{ height: "600px", alignItems: " center" }}
      >
        <Col>
          <img
            src={LandingIllustration}
            alt="Illustration from Undraw on designers"
            style={{ width: "350px" }}
          />
        </Col>
        <Col>
          <div style={{ width: "600px" }}>
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
            <Row style={{ textAlign: "left" }} className="mb-4">
              EMPHASIZING THE IMPORTANCE OF INNOVATION IN FIELDS BEYOND PURE
              TECHNOLOGY THROUGH CREATING AN INCLUSIVE SPACE FOR
              INTERDISCIPLINARY COLLABORATION AND LEARNING.
            </Row>
            <Row className="mt-4">
              LEARN MORE
              <img
                src={Arrow}
                alt="Arrow to learn more"
                style={{ width: "100px" }}
              />
            </Row>
          </div>
        </Col>
      </Container>
      <Container
        className="mb-5 mt-5"
        style={{ position: "relative", top: "-30px" }}
      >
        <img
          src={Scissors}
          alt="Scissors for decoration"
          style={{
            transform: "rotate(180deg)",
            width: "15%",
            position: "absolute",
            top: "-150px",

            bottom: 0,
            right: "-10%",
            zIndex: 0,
            overflow: "hidden",
          }}
        />
        <div style={{ borderStyle: "dashed" }}>
          <Row style={{ height: "350px" }}>
            <Col
              className="col-4"
              style={{
                fontWeight: "bold",
                fontSize: 60,
                textTransform: "uppercase",
                margin: "auto",
              }}
            >
              Vision
            </Col>
            <Col
              className="col-8"
              style={{ textAlign: "left", margin: "auto" }}
            >
              A DYNAMIC SPACE WHERE ARTISTS, HISTORIANS, COMPUTER SCIENTISTS,
              DESIGNERS, AND EVERYONE IN BETWEEN CAN LEARN TOGETHER AND FROM
              EACH OTHER THROUGH OUR INTEGRATED CURRICULUM. WE FOCUS ON
              FOSTERING DIVERSE OPINIONS, LEARNING NEW SKILLS, AND HANDS ON
              COLLABORATION ON COLLEGE HILL AND BEYOND.
            </Col>
          </Row>
        </div>
      </Container>
      <Container className="pb-5">
        <div style={{ borderStyle: "dashed" }}>
          <Row style={{ height: "350px" }}>
            <Col
              className="col-4"
              style={{
                fontSize: 60,
                textTransform: "uppercase",
                margin: "auto",
                fontWeight: "bold",
              }}
            >
              Values
            </Col>
            <Col className="col-8" style={{ margin: "auto" }}>
              <ul
                style={{
                  listStyle: "none",
                  textAlign: "left",
                  paddingInlineStart: "0",
                }}
              >
                <li>INCLUSIVE COMMUNITY</li>
                <li>INTERSECTIONAL INNOVATION</li>
                <li>EMBRACING FEEDBACK</li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default index;
