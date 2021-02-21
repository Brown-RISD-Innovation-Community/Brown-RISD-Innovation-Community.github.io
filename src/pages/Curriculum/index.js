import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.svg";
import NavigationBar from "../../components/NavigationBar.jsx";
import CurriculumIllustration from "../../assets/curriculum.png";

function Circle(props) {
  return (
    <div
      className="row m-0 justify-content-center align-items-center"
      style={{
        borderStyle: "dashed",
        width: "200px",
        height: "200px",
        borderRadius: "100%",
        backgroundColor: "rgb(251,222,5)",
      }}
    >
      <h5>{props.heading}</h5>
    </div>
  );
}

function CircleRow(props) {
  return (
    <Row className="mt-0 pb-5 d-flex align-items-center">
      <Col xs={12} md={4} className="d-flex justify-content-center">
        <Circle heading={props.heading} />
      </Col>
      <Col
        xs={12}
        md={7}
        className="d-flex justify-content-left align-items-center"
      >
        {props.children}
      </Col>
    </Row>
  );
}

function CircleRowReverse(props) {
  return (
    <Row className="mt-0 pb-5 d-flex align-items-center">
      <Col
        xs={12}
        md={{ span: 4, order: 12 }}
        className="d-flex justify-content-center"
      >
        <Circle heading={props.heading} />
      </Col>
      <Col
        xs={12}
        md={{ span: 7, order: 1, offset: 1 }}
        className="d-flex justify-content-left align-items-center"
      >
        {props.children}
      </Col>
    </Row>
  );
}
export default function index() {
  return (
    <div style={{ backgroundColor: "#1fd2bd", color: "black" }}>
      <NavigationBar linkFontColor="white" />
      <Container
        className="d-sm-flex justify-content-center mb-5 mt-5 pb-0"
        style={{ alignItems: " center" }}
      >
        <Row>
          <Col xs={12} md={4}>
            <img
              src={CurriculumIllustration}
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
                THE BRIC CURRICULUM
              </Row>
              <Row style={{ textAlign: "left" }} className="mb-4">
                <ul
                  className="p-4"
                  style={{ fontSize: "18px", textTransform: "uppercase" }}
                >
                  <li>
                    Provides educational resources to learn about and explore
                    relevant topics
                  </li>
                  <li>
                    Creates a platform for students across Brown and RISD to
                    meet and collaborate in a low-pressure environment
                  </li>
                </ul>
              </Row>
              <Row className="mt-4 p-4" style={{ fontSize: "18px" }}>
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
      <Container>
        <CircleRow heading={"WORKSHOPS"}>
          <p
            className="p-0 m-0"
            style={{ fontSize: "18px", textAlign: "left" }}
          >
            Workshops will be held almost every week, led by a BRIC founding
            member. <strong>Each week has a theme</strong> (eg. Graphic Design,
            Data Analysis) and there will be{" "}
            <strong>
              two workshops related to that theme on different days of the week
            </strong>
            . Both the workshops will cover complimentary topics, but won't rely
            on each other. For example, in the Graphic Design week, there will
            be two workshops: <strong>UI/UX Design</strong> and{" "}
            <strong>Branding and Packaging.</strong>
          </p>
        </CircleRow>
        <br />
        <br />
        <CircleRowReverse heading={"DESIGN CHALLENGES"}>
          <p
            className="p-0 m-0"
            style={{ fontSize: "18px", textAlign: "left" }}
          >
            <strong>
              Every other week, we will release a design challenge.
            </strong>{" "}
            The challenge prompt will be broad enough for students to innovate
            the way they want, but specific enough so students can utilize the
            skills they learned from previous workshops. We will maintain{" "}
            <strong>
              a spreadsheet of projects that students are working on so that
              members can collaborate with each other
            </strong>
            . People who don’t attend workshops can still participate in design
            challenges.
          </p>
        </CircleRowReverse>

        <br />
        <br />
        <CircleRow heading="FINAL PROJECTS">
          <p
            className="p-0 m-0"
            style={{ fontSize: "18px", textAlign: "left" }}
          >
            Halfway through the semester, we will close registration.{" "}
            <strong>
              Registered BRIC members will work on a bigger, more ambitious
              project, through the remainder of the semester.
            </strong>{" "}
            As before, we will maintain a spreadsheet of running projects so
            members can collaborate and form teams.{" "}
            <strong>
              Projects can be anything! Small, big, complex, simple, sciencey,
              artsy, tech, non-tech.
            </strong>{" "}
            We want to move away from only product and service based conceptions
            of innovation. Here, BRIC will act as a platform for students to
            collaborate and create across College Hill!
          </p>
        </CircleRow>

        <br />
        <br />
        <CircleRowReverse heading={"MENTORSHIP"}>
          <p
            className="p-0 m-0"
            style={{ fontSize: "18px", textAlign: "left" }}
          >
            BRIC Mentors are passionate, innovative students at RISD and Brown
            who have experience pursuing interdisciplinary projects and ideas.
            <strong>
              Mentors will be paired with upto 2 student groups based on shared
              interests and experience, and will guide them in project
              development and execution.
            </strong>{" "}
            Mentors will also provide career advice, can review portfolios and
            connect mentees to other students in their network.
          </p>
        </CircleRowReverse>
        <br />
        <Row
          className="mt-0 pb-5 d-flex justify-content-center text-align-center"
          style={{ paddingBottom: "120px" }}
        >
          <h5>
            To find a list of all our workshops and upcoming events, check out
            our{" "}
            <a href="/calendar" style={{ color: "white" }}>
              calendar
            </a>
          </h5>
        </Row>
      </Container>
    </div>
  );
}
