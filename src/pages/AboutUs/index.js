import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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

import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/new_logo.svg";
import "./main.css";
import { CloseButton } from "react-bootstrap";

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

function Profile(props) {
  return (
    <Col
      className="profile"
      onClick={() => props.set(props)}
      xs={12}
      md={3}
      className="my-2"
    >
      <div style={{ width: "100%" }}>
        <div className="profile py-5">
          <img
            src={props.src}
            alt={`headshot of ${props.name}`}
            style={{ width: "175px", maxWidth: "80%", borderRadius: "50%" }}
          />
          <div className="font-weight-bold pt-3">{props.name}</div>
          <div>{props.year}</div>
          <div>{props.major}</div>
        </div>
      </div>
    </Col>
  );
}

function VerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>{props.bio}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Index() {
  const [isShown, setIsShown] = useState({});
  return (
    <div
      className="pb-5"
      style={{ backgroundColor: "#FADD02", color: "#0B43CB" }}
    >
      <NavigationBar linkFontColor="white" />
      <Container className="pt-5 d-flex pb-5 ">
        <Row>
          <Col xs={12} md={8}>
            <Row className="pl-0 pl-md-3 pl-lg-4">
              <h1 className="mx-auto mx-md-0" style={textStyle}>
                OUR TEAM
              </h1>
            </Row>
            <Row className="pt-3 pb-3" style={bodyStyle}>
              <div className="profile-row" style={{ overflowWrap: "anywhere" }}>
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
      <VerticallyCenteredModal
        show={Object.keys(isShown).length != 0}
        onHide={() => setIsShown({})}
        {...isShown}
      />
      <Container
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          maxWidth: "90%",
        }}
      >
        <Row
          className="mx-auto mx-md-0 pl-0 pl-md-3 pl-lg-4 py-3"
          style={bodyStyle}
        >
          <span className="mx-auto mx-md-0">Co-Chairs</span>
        </Row>

        <Row className="d-flex pb-5 justify-content-start profile-row">
          <Profile
            set={setIsShown}
            show={isShown}
            name="Ivan Zhao"
            src={Ivan}
            year="Brown '22"
            major="APMA - CS"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
          />
          <Profile
            set={setIsShown}
            show={isShown}
            name="Xinru Li"
            src={Xinru}
            year="Brown '22"
            major="Music"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
          />
          <Profile
            set={setIsShown}
            show={isShown}
            name="Aryan Srivastava"
            src={Aryan}
            year="Brown '22"
            major="CS"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
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
        <Row
          className="mx-auto mx-md-0 pl-0 pl-md-3 pl-lg-4 pt-4 pb-3"
          style={bodyStyle}
        >
          <span className="mx-auto mx-md-0">E-BOARD</span>
        </Row>
        <Row
          className="mx-auto mx-md-0 pl-0 pl-md-3 pl-lg-4 mb-3 font-weight-bold"
          style={{ fontSize: 24 }}
        >
          <span className="mx-auto mx-md-0">Curriculum</span>
        </Row>
        <Row className="profile-row">
          <Profile
            set={setIsShown}
            show={isShown}
            name="Niyoshi Parekh"
            src={Niyoshi}
            year="Brown '22"
            major="Architecture CS"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
          />
          <Profile
            set={setIsShown}
            show={isShown}
            name="Brie Rowey"
            src={Brie}
            year="Brown '22"
            major="Mechanical Engineering"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
          />
          <Profile
            set={setIsShown}
            show={isShown}
            name="Audrey Kang"
            src={Audrey}
            year="RISD '22"
            major="Interior Architecture"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
          />
        </Row>
        <Row
          className="mx-auto mx-md-0 pl-0 pl-md-3 pl-lg-4 pt-5 mb-3 font-weight-bold"
          style={{ fontSize: 24 }}
        >
          <span className="mx-auto mx-md-0">Marketing and Design</span>
        </Row>
        <Row className="profile-row">
          <Profile
            set={setIsShown}
            show={isShown}
            name="Christine Lin"
            src={Christine}
            year="Brown '21"
            major="CS"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
          />
          <Profile
            set={setIsShown}
            show={isShown}
            name="Kia Uusitalo"
            src={Kia}
            year="Brown '23"
            major="Organizational Studies"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
          />
          <Profile
            set={setIsShown}
            show={isShown}
            name="Stephanie Park"
            src={Stephanie}
            year="RISD '22"
            major="Industrial Design"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
          />
          <Profile
            set={setIsShown}
            show={isShown}
            name="Malvika Agarwal"
            src={Malvika}
            year="RISD '22"
            major="Graphic Design"
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio."
          />
        </Row>

        {/* <Row>Operations</Row> */}
      </Container>
    </div>
  );
}
