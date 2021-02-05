import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import NavigationBar from "../../components/NavigationBar";

import SaltyCaramel from "../../assets/projects/salty_caramel.png";
import DormLight from "../../assets/projects/dorm_light.jpg";

// const projects = [
//   {
//     name: "Salty Caramel",
//     members: [
//       "Jasmine Shum",
//       "Jennifer Wang",
//       "Felicia Renelus",
//       "Elizabeth Wu",
//       "Kevin Hsu",
//     ],
//     desc: "An app that aggresively reminds you to complete your tasks",
//     src: SaltyCaramel,
//     link: "https://github.com/kaisucode/salty-caramel",
//   },
//   {
//     name: "Dorm Light Exploration",
//     members: ["Naveen Upender", "Lucia Tian", "Connie Liu", "Eiden Spilker"],
//     desc:
//       "A series of concepts and ideas for dorm lights fitting different needs and purposes",
//     src: SaltyCaramel,
//     link:
//       "https://docs.google.com/presentation/d/1Gb7iQ9xp7kTHTq6S-3R4iYXj66qL_K9ZsjPutEnumq4/edit?usp=sharing",
//   },
// ];

// function Project({ name, src, desc, members, link }) {
//   console.log(members);
//   return (
//     <Container className="py-3">
//       <div style={{ borderStyle: "solid" }}>
//         <Row className="px-5 pt-5">
//           <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
//             <Row>
//               <h3>{name}</h3>
//             </Row>
//             <Row>
//               <Col className="text-left">
//                 <h5>Team Members</h5>
//               </Col>
//               {members.map((member) => (
//                 <Col className="text-left" xs={12}>
//                   {member}
//                 </Col>
//               ))}
//             </Row>
//           </Col>
//           <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
//             <img src={src} alt={name} style={{ maxWidth: "100%" }} />
//           </Col>
//         </Row>
//         <Row className="px-5 pb-5 pt-3 text-left">
//           <Col>
//             <h5>About</h5>
//             <p>{desc}</p>
//             <a href={link}>Link</a>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   );
// }
export function index() {
  return (
    <div
      style={{
        backgroundColor: "#8E1DE6",
        color: "white",
        height: "100%",
      }}
      className="pb-5"
    >
      <NavigationBar linkFontColor="white" />
      {/* <Container
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
      </Container> */}
      <Container className="d-sm-flex justify-content-center">
        <Row>
          <Col>
            <div className="m-4" style={{ fontSize: "48px", margin: "5px" }}>
              PROJECTS
            </div>
          </Col>
        </Row>
      </Container>
      {/* {projects.map((project) => (
        <Project
          name={project.name}
          src={project.src}
          desc={project.desc}
          members={project.members}
        />
      ))} */}
      <Container
        style={{ color: "black", width: "700px", maxWidth: "100%" }}
        className="d-sm-flex justify-content-center flex-column"
      >
        <h2 className="mb-5" style={{ color: "white" }}>
          Fall 2020
        </h2>
        <CardDeck>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={SaltyCaramel} />
            <Card.Body>
              <Card.Title>Salty Caramel</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Jasmine Shum, Jennifer Wang, Felicia Renelus, Elizabeth Wu,
                Kevin Hsu
              </Card.Subtitle>
              <Card.Text className="mt-2">
                An app that aggresively reminds you to complete your tasks
              </Card.Text>
              <Card.Link href="https://github.com/kaisucode/salty-caramel">
                Github
              </Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%" }}>
            <Card.Img variant="top" src={DormLight} />
            <Card.Body>
              <Card.Title>Dorm Light Exploration</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Naveen Upender, Lucia Tian, Connie Liu, Eiden Spilker
              </Card.Subtitle>
              <Card.Text className="mt-2">
                A series of concepts and ideas for dorm lights fitting different
                needs and purposes
              </Card.Text>
              <Card.Link href="https://docs.google.com/presentation/d/1Gb7iQ9xp7kTHTq6S-3R4iYXj66qL_K9ZsjPutEnumq4/edit?usp=sharing">
                Google Slides
              </Card.Link>
            </Card.Body>
          </Card>
        </CardDeck>
      </Container>
    </div>
  );
}

export default index;
