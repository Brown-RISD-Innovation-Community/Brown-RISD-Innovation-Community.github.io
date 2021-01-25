import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.svg";
import Scissors from "../../assets/scissors.svg";
import NavigationBar from "../../components/NavigationBar";

import LandingIllustration from "../../assets/landing1.png";

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
                            style={{ width: "450px" }}
                        />
                    </Col>
                    <Col xs={12} md={8}>
                        <div
                            style={{
                                width: "600px",
                                maxWidth: "100%",
                                marginLeft: "12%",
                            }}
                        >
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
                                EMPHASIZING THE IMPORTANCE OF INNOVATION IN
                                FIELDS BEYOND PURE TECHNOLOGY THROUGH CREATING
                                AN INCLUSIVE SPACE FOR INTERDISCIPLINARY
                                COLLABORATION AND LEARNING.
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container style={{ fontSize: "32px" }}>
                Our applications for our spring{" "}
                <a
                    href="https://forms.gle/mxG7jhgNd4zMRbpE6"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "yellow" }}
                >
                    E-board
                </a>{" "}
                and{" "}
                <a
                    href="https://forms.gle/ghtGzG1omfq4kCwo7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "yellow" }}
                >
                    cohorts
                </a>{" "}
                are open!
            </Container>
            <Container className="mb-5 mt-5" style={{ overflow: "hidden" }}>
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
                            Vision
                        </Col>
                        <Col
                            xs={12}
                            md={8}
                            className="col-8"
                            style={{
                                textAlign: "left",
                                margin: "auto",
                                letterSpacing: "1px",
                            }}
                        >
                            <div className="p-4">
                                A DYNAMIC SPACE WHERE ARTISTS, HISTORIANS,
                                COMPUTER SCIENTISTS, DESIGNERS, AND EVERYONE IN
                                BETWEEN CAN LEARN TOGETHER AND FROM EACH OTHER
                                THROUGH OUR INTEGRATED CURRICULUM. WE FOCUS ON
                                FOSTERING DIVERSE OPINIONS, LEARNING NEW SKILLS,
                                AND HANDS ON COLLABORATION ON COLLEGE HILL AND
                                BEYOND.
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container className="pb-5">
                <div style={{ borderStyle: "dashed" }}>
                    <Row style={{ minHeight: "350px" }}>
                        <Col
                            xs={12}
                            md={4}
                            className="col-4 p-4"
                            style={{
                                fontSize: 60,
                                textTransform: "uppercase",
                                margin: "auto",
                                fontWeight: "bold",
                            }}
                        >
                            Values
                        </Col>
                        <Col
                            xs={12}
                            md={8}
                            className="col-8"
                            style={{ margin: "auto" }}
                        >
                            <ul
                                style={{
                                    listStyle: "none",
                                    textAlign: "left",
                                    paddingInlineStart: "0",
                                    letterSpacing: "1.5px",
                                }}
                                className="p-4"
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
