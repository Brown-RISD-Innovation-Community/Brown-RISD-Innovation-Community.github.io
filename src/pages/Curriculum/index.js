import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.svg";
import NavigationBar from "../../components/NavigationBar";
import CurriculumIllustration from "../../assets/curriculum.png";


export default function index() {
  return (
    <div style={{ backgroundColor: "#1fd2bd", color: "black" }}>
      <NavigationBar linkFontColor="white" />
      <Container
        className="d-flex justify-content-center mb-5 pb-0"
        style={{ height: "500px", alignItems: " center" }}
      >
        <Col>
          <img
            src={CurriculumIllustration}
            alt="Illustration from Undraw on designers"
            style={{ width: "350px" }}
          />
        </Col>
        <Col>
          <div style={{ width: "600px" }}>
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
              <ul className="p-0" style={{ fontSize: "18px", textTransform: "uppercase" }}>
              <li>Provides educational resources to learn about and explore relevant topics</li>
              <li>Creates a platform for students across Brown and RISD to meet and collaborate in a low-pressure environment</li>
              </ul>
            </Row>
            <Row className="mt-4" style={{fontSize: "18px"}}>
              LEARN MORE
              <img
                className="mt-2 ml-4"
                src={Arrow}
                alt="Arrow to learn more"
                style={{ width: "350px" }}
              />
            </Row>
          </div>
        </Col>
      </Container>
      <Container>
      <Row className="mt-0 pb-5 d-flex align-items-center">
        <Col xs={4} className="d-flex justify-content-center">
          <div className="m-0" style={{borderStyle: "dashed", paddingTop: "85px", width: "200px", height: "200px", borderRadius: "100%", backgroundColor: "rgb(251,222,5)"}}>
            <h5>WORKSHOPS</h5>
          </div>
        </Col>
        <Col xs={7} className="d-flex justify-content-left align-items-center">
            <p className="p-0 m-0" style={{fontSize: "18px", textAlign: "left"}}>
            Workshops will be held almost every week, led by a BRIC founding member. <strong>Each week has a theme</strong> (eg. Graphic Design, Data Analysis) and there will be <strong>two workshops related to that theme on different days of the week</strong>.
            Both the workshops will cover complimentary topics, but won't rely on each other. For example, in the Graphic Design week,
            there will be two workshops: <strong>UI/UX Design</strong> and <strong>Branding and Packaging.</strong></p>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row className="mt-0 pb-5 d-flex align-items-center">
        <Col xs={7} className="d-flex justify-content-left align-items-center offset-1">
          <p className="p-0 m-0" style={{fontSize: "18px", textAlign: "left"}}>
          <strong>Every other week, we will release a design challenge.</strong> The challenge prompt will be broad enough for students to innovate the way
          they want, but specific enough so students can utilize the skills they learned from previous workshops. We will maintain <strong>a spreadsheet of
          projects that students are working on so that members can collaborate with each other</strong>. People who don’t attend workshops can still participate in design challenges.
          </p>
        </Col>
        <Col xs={4} className="d-flex justify-content-center">
          <div className="m-0" style={{borderStyle: "dashed", paddingTop: "72px", width: "200px", height: "200px", borderRadius: "100%", backgroundColor: "rgb(251,222,5)"}}>
            <h5>DESIGN CHALLENGES</h5>
          </div>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row className="mt-0 pb-5 d-flex align-items-center">
        <Col xs={4} className="d-flex justify-content-center">
          <div className="m-0" style={{borderStyle: "dashed", paddingTop: "85px", width: "200px", height: "200px", borderRadius: "100%", backgroundColor: "rgb(251,222,5)"}}>
            <h5>FINAL PROJECTS</h5>
          </div>
        </Col>
        <Col xs={7} className="d-flex justify-content-left align-items-center">
          <p className="p-0 m-0" style={{fontSize: "18px", textAlign: "left"}}>
          Halfway through the semester, we will close registration. <strong>Registered BRIC members will work on a bigger, more ambitious project,
          through the remainder of the semester.</strong> As before, we will maintain a spreadsheet of running projects so members can collaborate
          and form teams. <strong>Projects can be anything! Small, big, complex, simple, sciencey, artsy, tech, non-tech.</strong>
          We want to move away from only product and service based conceptions of innovation. Here, BRIC will act as a platform for students to collaborate and create across College Hill!
          </p>
        </Col>
      </Row>
      <br/>
      <br/>
      <Row className="mt-0 pb-5 d-flex align-items-center">
        <Col xs={7} className="d-flex justify-content-left align-items-center offset-1">
          <p className="p-0 m-0" style={{fontSize: "18px", textAlign: "left"}}>
          BRIC Mentors are passionate, innovative students at RISD and Brown who have experience pursuing interdisciplinary projects and ideas.
          <strong>Mentors will be paired with upto 2 student groups based on shared interests and experience, and will guide them in project development
          and execution.</strong> Mentors will also provide career advice, can review portfolios and connect mentees to other students in their network.
          </p>
        </Col>
        <Col xs={4} className="d-flex justify-content-center">
          <div className="m-0" style={{borderStyle: "dashed", paddingTop: "85px", width: "200px", height: "200px", borderRadius: "100%", backgroundColor: "rgb(251,222,5)"}}>
            <h5>MENTORSHIP</h5>
          </div>
        </Col>
      </Row>
      <br/>
      <Row className="mt-0 pb-5 d-flex justify-content-center text-align-center" style={{paddingBottom: "120px"}}>
        <h5>To find a list of all our workshops and upcoming events, check out our <a href="/calendar" style={{color: "white"}}>calendar</a></h5>
      </Row>
      </Container>
    </div>
  );
}
