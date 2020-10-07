import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.svg";
import Scissors from "../../assets/scissors.svg";
import NavigationBar from "../../components/NavigationBar";

import LandingIllustration from "../../assets/landing.png";

const projects = [
  {
    name: "Project Name",
    members: [
      "April Goodman",
      "Libbie Marriott",
      "Duke Gates",
      "Harry Harding",
    ],
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio.",
    src: LandingIllustration,
  },
  {
    name: "Project Name",
    members: [
      "April Goodman",
      "Libbie Marriott",
      "Duke Gates",
      "Harry Harding",
    ],
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio.",
    src: LandingIllustration,
  },
  {
    name: "Project Name",
    members: [
      "April Goodman",
      "Libbie Marriott",
      "Duke Gates",
      "Harry Harding",
    ],
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio.",
    src: LandingIllustration,
  },
  {
    name: "Project Name",
    members: [
      "April Goodman",
      "Libbie Marriott",
      "Duke Gates",
      "Harry Harding",
    ],
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada sollicitudin augue, sit amet egestas eros malesuada varius. Ut eu enim sed urna ultricies condimentum in sit amet metus. Maecenas ipsum ex, luctus et cursus id, rhoncus vitae libero. Pellentesque venenatis facilisis est. Maecenas et dictum enim. Etiam pharetra eleifend velit, vel tempor ipsum scelerisque sit amet. Quisque congue quam purus, id vestibulum quam suscipit in. Donec a egestas quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas nibh augue, congue sit amet risus eu, ullamcorper luctus lectus. Ut sit amet luctus ipsum. Curabitur placerat nisl sapien, id ornare arcu rutrum eu. Curabitur vitae nibh eget est viverra tempor a et libero. Nam massa mauris, egestas non placerat dignissim, vehicula vel erat. Curabitur at convallis tortor, ac laoreet diam. Mauris venenatis at lorem at semper. Aenean turpis nisl, efficitur quis lorem bibendum, luctus maximus sem. Nam scelerisque elementum velit, sed vestibulum ligula varius vel. Fusce at lobortis est, placerat aliquet odio.",
    src: LandingIllustration,
  },
];
function DottedBox(props) {
  return (
    <Container className="py-5">
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
            {props.cardTitle}
          </Col>
          <Col
            xs={12}
            md={8}
            className="col-8"
            style={{ textAlign: "left", margin: "auto" }}
          >
            {props.children}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

function Project({ name, src, desc, members }) {
  console.log(members);
  return (
    <Container className="py-3">
      <div style={{ borderStyle: "dashed" }}>
        <Row className="px-5 pt-5">
          <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
            <Row>
              <h3>{name}</h3>
            </Row>
            <Row>
              <Col className="text-left">
                <h5>Team Members</h5>
              </Col>
              {members.map((member) => (
                <Col className="text-left" xs={12}>
                  {member}
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
            <img src={src} alt="project image" style={{ maxWidth: "100%" }} />
          </Col>
        </Row>
        <Row className="px-5 pb-5 pt-3 text-left">
          <h5>About</h5>
          {desc}
        </Row>
      </div>
    </Container>
  );
}
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
              style={{ width: "350px", maxWidth: "100%" }}
            />
          </Col>
          <Col xs={12} md={8}>
            <div style={{ width: "600px", maxWidth: "100%" }}>
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
                Projects
              </Row>
              <Row style={{ textAlign: "left" }} className="p-4">
                OUR PROJECTS
              </Row>
              <Row className="p-4">
                LEARN MORE
                <img
                  className="mt-2 ml-4"
                  src={Arrow}
                  alt="Arrow to learn more"
                  style={{ width: "350px", maxWidth: "80%" }}
                />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      {projects.map((project) => (
        <Project
          name={project.name}
          src={project.src}
          desc={project.desc}
          members={project.members}
        />
      ))}
    </div>
  );
}

export default index;
