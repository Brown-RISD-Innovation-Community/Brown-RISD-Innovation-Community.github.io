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
import Malvika from "../../assets/headshots/malvika.jfif";
import Sorin from "../../assets/headshots/sorin.jpg";
import Gleb from "../../assets/headshots/gleb.jpg";
import Carmen from "../../assets/headshots/carmen.png";
import Theo from "../../assets/headshots/theo.png";

// Illustration Import
import TeamIllustration from "../../assets/team.png";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Profile from "./components/Profile/Profile";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={`pb-5 ${styles.page}`}>
      <NavigationBar linkFontColor="white" />
      <Container className="pt-5 d-flex pb-5 ">
        <Row>
          <Col xs={12} md={8}>
            <Row>
              <h1 className={styles.header}>OUR TEAM</h1>
            </Row>
            <Row className="pt-3 pb-3">
              <div className={styles["header-text"]}>
                BRIC BRINGS TOGETHER STUDENTS FROM{" "}
                <bdi className={styles.underline}>BROWN UNIVERSITY</bdi> AND{" "}
                <bdi className={styles.underline}>RISD</bdi>. OUR INTERESTS
                RANGE FROM ENTREPRENEURSHIP AND HISTORY TO DESIGN AND
                TECHNOLOGY.{" "}
              </div>
            </Row>
            <Row>
              <div className={`pl-5 ${styles["font-24"]}`}>MEET OUR TEAM</div>
              <img
                className={`mt-3 ml-4 ${styles.arrow}`}
                src={Arrow}
                alt="Arrow to meet the team"
              />
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <img
              src={TeamIllustration}
              alt="Illustration for Team Page"
              className={styles["team-img"]}
            />
          </Col>
        </Row>
      </Container>
      <Container className={styles.container}>
        <Row className={`pl-5 pt-3 pb-3 ${styles["team-header"]}`}>
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
      <Container className={`mt-5 pb-5 ${styles.container}`}>
        <Row className={`pl-5 pt-3 pb-3 ${styles["team-header"]}`}>E-BOARD</Row>
        <Row className={`pl-5 mb-3 font-weight-bold ${styles["font-24"]}`}>
          Curriculum
        </Row>
        <Row>
          <Profile
            name="Niyoshi Parekh"
            src={Niyoshi}
            year="Brown '22"
            major="Architecture CS"
          />
          {/* <Profile
                        name="Brie Rowey"
                        src={Brie}
                        year="Brown '22"
                        major="Mechanical Engineering"
                    /> */}
          <Profile
            name="Audrey Kang"
            src={Audrey}
            year="RISD '22"
            major="Interior Architecture"
          />
          <Profile
            name="Gleb Kirin"
            src={Gleb}
            year="Brown '22"
            major="BEO-Technology Management"
          />
        </Row>
        <Row className={`pl-5 pt-3 pb-3 ${styles["team-header"]}`}>
          Marketing and Design
        </Row>
        <Row>
          {/* <Profile
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
                    /> */}
          <Profile
            name="Malvika Agarwal"
            src={Malvika}
            year="RISD '22"
            major="Graphic Design"
          />
          <Profile
            name="Carmen Belmonte Sandoval"
            src={Carmen}
            year="RISD '23"
            major="Industrial Design"
          />
        </Row>
        <Row className={`pl-5 pt-3 pb-3 ${styles["team-header"]}`}>
          Operations
        </Row>
        <Row>
          <Profile
            name="Sorin Cho"
            src={Sorin}
            year="Brown '22"
            major="CS-Econ"
          />
          <Profile
            name="Theodore LaBonte-Clark"
            src={Theo}
            year="Brown '23"
            major="CS"
          />
        </Row>
      </Container>
    </div>
  );
}
