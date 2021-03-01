import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import LandingIllustration from "../../assets/landing1.png";
import DottedBox from "./components/DottedBox/DottedBox";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <NavigationBar linkFontColor="white" />
      <Container
        className={`d-sm-flex justify-content-center ${styles["top-container"]}`}
      >
        <Row>
          <Col xs={12} md={4}>
            <img
              src={LandingIllustration}
              alt="Illustration from Undraw on designers"
              className={styles["landing-img"]}
            />
          </Col>
          <Col xs={12} md={8}>
            <div className={styles["header-text-container"]}>
              <Row className={`mb-2 ${styles["header-container"]}`}>
                Brown RISD Innovation Community
              </Row>
              <Row className={`p-4 align-left`}>
                EMPHASIZING THE IMPORTANCE OF INNOVATION IN FIELDS BEYOND PURE
                TECHNOLOGY THROUGH CREATING AN INCLUSIVE SPACE FOR
                INTERDISCIPLINARY COLLABORATION AND LEARNING.
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
        <ul className={`p-4 ${styles["values-list"]}`}>
          <li>INCLUSIVE COMMUNITY</li>
          <li>INTERSECTIONAL INNOVATION</li>
          <li>EMBRACING FEEDBACK</li>
        </ul>
      </DottedBox>
    </div>
  );
}
