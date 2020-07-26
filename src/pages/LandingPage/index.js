import React from "react";
import ColorBlock from "../../assets/color_block.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LearnMoreArrow from "../../assets/learnmorearrow.svg";

export function index() {
  return (
    <div style={{ backgroundColor: "#0A44CB", color: "white", height: "100%" }}>
      <Container>
        <Row style={{ fontWeight: 500 }}>Brown RISD Innovation Community</Row>
        <Row>
          <Col style={{ margin: "auto" }}>
            EMPHASIZING THE IMPORTANCE OF INNOVATION IN FIELDS BEYOND PURE
            TECHNOLOGY THROUGH CREATING AN INCLUSIVE SPACE FOR INTERDISCIPLINARY
            COLLABORATION AND LEARNING.
          </Col>
        </Row>
      </Container>
      <Container className="mb-5 mt-5">
        <div style={{ borderStyle: "dashed" }}>
          <Row style={{ height: "350px" }}>
            <Col
              className="col-4"
              style={{
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
      <Container>
        <div style={{ borderStyle: "dashed" }}>
          <Row style={{ height: "350px" }}>
            <Col
              className="col-4"
              style={{
                fontSize: 60,
                textTransform: "uppercase",
                margin: "auto",
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
