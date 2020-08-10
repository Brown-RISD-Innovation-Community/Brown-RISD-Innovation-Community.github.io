import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.png";
import NavigationBar from "../../components/NavigationBar";

import IvanHeadshot from "../../assets/headshots/ivan.png";

export default function index() {
  return (
    <div style={{ backgroundColor: "#FADD02" }}>
      <NavigationBar />
      <Container>
        <Col>
          <Row>
            <div>Our Team</div>
          </Row>
          <Row>
            <div>
              BRIC BRINGS TOGETHER STUDENTS FROM BROWN UNIVERSITY AND RISD OUR
              INTERESTS RANGE FROM ENTREPRENEURSHIP AND HISTORY TO DESIGN AND
              TECHNOLOGY.{" "}
            </div>
          </Row>
          <Row>
            <div>Meet our team</div>
            <img
              src={Arrow}
              alt="Arrow to meet the team"
              style={{ width: "100px" }}
            />
          </Row>
        </Col>
      </Container>
      <Container style={{ backgroundColor: "white", borderRadius: "25px" }}>
        <Row>Co-Chairs</Row>
        <Row>
          <div>
            <img
              src={IvanHeadshot}
              alt="headshot of Ivan"
              style={{ width: "250px", borderRadius: "50%" }}
            />
            <div>Ivan Zhao</div>
            <div>Brown '22</div>
            <div>APMA-CS</div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
