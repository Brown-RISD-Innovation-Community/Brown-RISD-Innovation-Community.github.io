import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.png";
import NavigationBar from "../../components/NavigationBar";

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
              src={Ivan}
              alt="headshot of Ivan"
              style={{ width: "175px", borderRadius: "50%" }}
            />
            <div>Ivan Zhao</div>
            <div>Brown '22</div>
            <div>APMA - CS</div>
          </div>

          <div>
            <img
              src={Xinru}
              alt="headshot of Xinru"
              style={{ width: "175px", borderRadius: "50%" }}
            />
            <div>Xinru Li</div>
            <div>Brown '22</div>
            <div>Music</div>
          </div>
          <div>
            <img
              src={Aryan}
              alt="headshot of Aryan"
              style={{ width: "175px", borderRadius: "50%" }}
            />
            <div>Aryan Srivasra</div>
            <div>Brown '22</div>
            <div>CS</div>
          </div>
        </Row>
      </Container>
      <Container style={{ backgroundColor: "white", borderRadius: "25px" }}>
        <Row>E-BOARD</Row>
        <Row>Curriculum</Row>
        <Row>
          <div>
            <img
              src={Niyoshi}
              alt="headshot of Niyoshi"
              style={{ width: "175px", borderRadius: "50%" }}
            />
            <div>Niyoshi </div>
            <div>Brown '22</div>
            <div>Architecture CS</div>
          </div>

          <div>
            <img
              src={Brie}
              alt="headshot of Brie"
              style={{ width: "175px", borderRadius: "50%" }}
            />
            <div>Brie </div>
            <div>Brown '22</div>
            <div>Mechanical Engineering</div>
          </div>
        </Row>
        <Row>Marketing and Design</Row>
        <Row>
          <div>
            <img
              src={Audrey}
              alt="headshot of Audrey"
              style={{ width: "175px", borderRadius: "50%" }}
            />
            <div>Audrey Kang</div>
            <div>RISD '22</div>
            <div>Interior Architecture</div>
          </div>
          <div>
            <img
              src={Christine}
              alt="headshot of Christine"
              style={{ width: "175px", borderRadius: "50%" }}
            />
            <div>Christine Lin</div>
            <div>Brown '22</div>
            <div>CS</div>
          </div>
          <div>
            <img
              src={Kia}
              alt="headshot of Kia"
              style={{ width: "175px", borderRadius: "50%" }}
            />
            <div>Kia Uusitalo</div>
            <div>Brown '23</div>
            <div>Organizational Studies</div>
          </div>
          <div>
            <img
              src={Stephanie}
              alt="headshot of Stephanie"
              style={{ width: "175px", borderRadius: "50%" }}
            />
            <div>Stephanie Park</div>
            <div>RISD '22</div>
            <div>Industrial Design</div>
          </div>
        </Row>

        <Row>Operations</Row>
      </Container>
    </div>
  );
}
