import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectSemester from "./components/ProjectSemester/ProjectSemester";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import styles from "./Projects.module.css";
import allProjects from "./allProjects";

export default function Projects() {
  return (
    <div className={`pb-5 ${styles.page}`}>
      <NavigationBar linkFontColor="white" />
      <Container className="d-sm-flex justify-content-center flex-column">
        <Row>
          <Col>
            <div className={`m-4 ${styles.header}`}>PROJECTS</div>
          </Col>
        </Row>
      </Container>
      <Container
        className={`d-sm-flex justify-content-center flex-column ${styles["projects-container"]}`}
      >
        {allProjects.map((projectSem) => (
          <ProjectSemester {...projectSem} />
        ))}
      </Container>
    </div>
  );
}
