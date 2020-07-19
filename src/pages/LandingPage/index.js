import React from "react";
import ColorBlock from "../../assets/color_block.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LearnMoreArrow from "../../assets/learnmorearrow.svg";

export function index() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              src={ColorBlock}
              alt="4 Colors stacked on top of each other for effect"
            />
          </Col>
          <Col style={{ margin: "auto" }}>
            BROWN RISD INNOVATION COMMUNITY EMPHASIZING THE IMPORTANCE OF
            INNOVATION IN FIELDS BEYOND PURE TECHNOLOGY THROUGH CREATING AN
            INCLUSIVE SPACE FOR INTERDISCIPLINARY COLLABORATION AND LEARNING.
          </Col>
        </Row>
        <Row>
          <Col>Learn More</Col>

          <Col style={{ border: "1px red" }}>
            <img src={LearnMoreArrow} alt="Arrow to Learn More Information" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;
