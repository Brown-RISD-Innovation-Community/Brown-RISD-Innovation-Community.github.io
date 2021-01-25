import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.svg";

// Co-chairs Headshots
import Ivan from "../../assets/headshots/ivan.png";
import Xinru from "../../assets/headshots/xinru.jpg";
import Aryan from "../../assets/headshots/aryan.jfif";

// Eboard Team Headshots
import Niyoshi from "../../assets/headshots/Niyoshi.jpg";
import Audrey from "../../assets/headshots/audrey.jfif";
import Brie from "../../assets/headshots/brie.jfif";
import Christine from "../../assets/headshots/christine.png";
import Kia from "../../assets/headshots/kia.jpg";
import Stephanie from "../../assets/headshots/stephanie.jfif";
import Malvika from "../../assets/headshots/malvika.jfif";

// Illustration Import
import TeamIllustration from "../../assets/team.png";
import NavigationBar from "../../components/NavigationBar";

import "./main.css";

const navStyle = {
    fontFamily: "Arial",
    fontSize: 24,
    textTransform: "uppercase",
    // color: "white",
};

const textStyle = {
    // fontSize: 48,
    fontWeight: "bold",
    color: "#0B43CB",
};

const bodyStyle = {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0B43CB",
    textAlign: "left",
};

export default function index() {
    return (
        <div
            className="pb-5"
            style={{ backgroundColor: "#FADD02", color: "#0B43CB" }}
        >
            <NavigationBar linkFontColor="white" />
            <Container className="pt-5 d-flex pb-5 ">
                <Row>
                    <Col xs={12} md={8}>
                        <Row>
                            <h1 style={textStyle}>OUR TEAM</h1>
                        </Row>
                        <Row className="pt-3 pb-3">
                            <div style={bodyStyle}>
                                BRIC BRINGS TOGETHER STUDENTS FROM{" "}
                                <bdi style={{ textDecoration: "underline" }}>
                                    BROWN UNIVERSITY
                                </bdi>{" "}
                                AND{" "}
                                <bdi style={{ textDecoration: "underline" }}>
                                    RISD
                                </bdi>
                                . OUR INTERESTS RANGE FROM ENTREPRENEURSHIP AND
                                HISTORY TO DESIGN AND TECHNOLOGY.{" "}
                            </div>
                        </Row>
                        <Row>
                            <div
                                className="pl-5"
                                style={{ color: "#0B43CB", fontSize: 24 }}
                            >
                                MEET OUR TEAM
                            </div>
                            <img
                                className="mt-3 ml-4"
                                src={Arrow}
                                alt="Arrow to meet the team"
                                style={{ width: "300px", maxWidth: "80%" }}
                            />
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <img
                            src={TeamIllustration}
                            alt="Illustration for Team Page"
                            style={{ width: "450px" }}
                        />
                    </Col>
                </Row>
            </Container>
            <Container
                style={{
                    backgroundColor: "white",
                    borderRadius: "25px",
                    maxWidth: "90%",
                }}
            >
                <Row className="pl-5 pt-3 pb-3" style={bodyStyle}>
                    Co-Chairs
                </Row>
                <Row className="d-flex pb-5 justify-content-start">
                    <Col xs={12} md={3} className="">
                        <img
                            src={Ivan}
                            alt="headshot of Ivan"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">Ivan Zhao</div>
                        <div>Brown '22</div>
                        <div>APMA - CS</div>
                    </Col>

                    <Col xs={12} md={3} className="">
                        <img
                            src={Xinru}
                            alt="headshot of Xinru"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">Xinru Li</div>
                        <div>Brown '22</div>
                        <div>Music</div>
                    </Col>
                    <Col xs={12} md={3} className="">
                        <img
                            src={Aryan}
                            alt="headshot of Aryan"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">
                            Aryan Srivastava
                        </div>
                        <div>Brown '22</div>
                        <div>CS</div>
                    </Col>
                </Row>
            </Container>
            <Container
                className="mt-5 pb-5"
                style={{
                    backgroundColor: "white",
                    borderRadius: "25px",
                    maxWidth: "90%",
                }}
            >
                <Row className="pl-5 pt-3 pb-3" style={bodyStyle}>
                    E-BOARD
                </Row>
                <Row
                    className="pl-5 mb-3 font-weight-bold"
                    style={{ fontSize: 24 }}
                >
                    Curriculum
                </Row>
                <Row>
                    <Col xs={12} md={3}>
                        <img
                            src={Niyoshi}
                            alt="headshot of Niyoshi"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">
                            Niyoshi Parekh
                        </div>
                        <div>Brown '22</div>
                        <div>Architecture CS</div>
                    </Col>

                    <Col xs={12} md={3}>
                        <img
                            src={Brie}
                            alt="headshot of Brie"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">Brie Rowey</div>
                        <div>Brown '22</div>
                        <div>Mechanical Engineering</div>
                    </Col>
                    <Col xs={12} md={3}>
                        <img
                            src={Audrey}
                            alt="headshot of Audrey"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">Audrey Kang</div>
                        <div>RISD '22</div>
                        <div>Interior Architecture</div>
                    </Col>
                </Row>
                <Row
                    className="pl-5 pt-5 mb-3 font-weight-bold"
                    style={{ fontSize: 24 }}
                >
                    Marketing and Design
                </Row>
                <Row>
                    <Col xs={12} md={3}>
                        <img
                            src={Christine}
                            alt="headshot of Christine"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">
                            Christine Lin
                        </div>
                        <div>Brown '21</div>
                        <div>CS</div>
                    </Col>
                    <Col xs={12} md={3}>
                        <img
                            src={Kia}
                            alt="headshot of Kia"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">
                            Kia Uusitalo
                        </div>
                        <div>Brown '23</div>
                        <div>Organizational Studies</div>
                    </Col>
                    <Col xs={12} md={3}>
                        <img
                            src={Stephanie}
                            alt="headshot of Stephanie"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">
                            Stephanie Park
                        </div>
                        <div>RISD '22</div>
                        <div>Industrial Design</div>
                    </Col>
                    <Col xs={12} md={3}>
                        <img
                            src={Malvika}
                            alt="headshot of Malvika"
                            style={{
                                width: "175px",
                                maxWidth: "80%",
                                borderRadius: "50%",
                            }}
                        />
                        <div className="font-weight-bold pt-3">
                            Malvika Agarwal
                        </div>
                        <div>RISD '22</div>
                        <div>Graphic Design</div>
                    </Col>
                </Row>

                {/* <Row>Operations</Row> */}
            </Container>
        </div>
    );
}
