import React, { useState } from "react";

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
import Sorin from "../../assets/headshots/sorin.jpg";

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

const containerStyle = {
  backgroundColor: "white",
  borderRadius: "25px",
  maxWidth: "90%",
  boxShadow: "10px 10px",
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

function Profile(props) {
  return (
    <Col xs={12} md={3} className="">
      <div>
        <img
          src={props.src}
          alt={`headshot of ${props.name}`}
          style={{ width: "175px", maxWidth: "80%", borderRadius: "50%" }}
        />
        <div className="font-weight-bold pt-3">{props.name}</div>
        <div>{props.year}</div>
        <div>{props.major}</div>
      </div>
    </Col>
  );
}
export default function Index() {
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
                AND <bdi style={{ textDecoration: "underline" }}>RISD</bdi>. OUR
                INTERESTS RANGE FROM ENTREPRENEURSHIP AND HISTORY TO DESIGN AND
                TECHNOLOGY.{" "}
              </div>
            </Row>
            <Row>
              <div className="pl-5" style={{ color: "#0B43CB", fontSize: 24 }}>
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
              style={{ width: "350px", maxWidth: "100%" }}
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
          <Profile
            name="Ivan Zhao"
            src={Ivan}
            year="Brown '22"
            major="APMA - CS"
          />
          <Profile name="Xinru Li" src={Xinru} year="Brown '22" major="Music" />
          <Profile
            name="Aryan Srivastava"
            src={Aryan}
            year="Brown '22"
            major="CS"
          />
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
        <Row className="pl-5 mb-3 font-weight-bold" style={{ fontSize: 24 }}>
          Curriculum
        </Row>
        <Row>
          <Profile
            name="Niyoshi Parekh"
            src={Niyoshi}
            year="Brown '22"
            major="Architecture CS"
          />
          <Profile
            name="Brie Rowey"
            src={Brie}
            year="Brown '22"
            major="Mechanical Engineering"
          />
          <Profile
            name="Audrey Kang"
            src={Audrey}
            year="RISD '22"
            major="Interior Architecture"
          />
        </Row>
        <Row
          className="pl-5 pt-5 mb-3 font-weight-bold"
          style={{ fontSize: 24 }}
        >
          Marketing and Design
        </Row>
        <Row>
          <Profile
            name="Christine Lin"
            src={Christine}
            year="Brown '21"
            major="CS"
          />
          <Profile
            name="Kia Uusitalo"
            src={Kia}
            year="Brown '23"
            major="Organizational Studies"
          />
          <Profile
            name="Stephanie Park"
            src={Stephanie}
            year="RISD '22"
            major="Industrial Design"
          />
          <Profile
            name="Malvika Agarwal"
            src={Malvika}
            year="RISD '22"
            major="Graphic Design"
          />
        </Row>
        <Row
          className="pl-5 pt-5 mb-3 font-weight-bold"
          style={{ fontSize: 24 }}
        >
          Operations
        </Row>
        <Row>
          <Profile
            name="Sorin Cho"
            src={Sorin}
            year="Brown '22"
            major="CS-Econ"
          />
        </Row>
      </Container>
    </div>
  );
}
