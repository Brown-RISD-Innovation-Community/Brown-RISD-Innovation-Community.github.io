import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

import SaltyCaramel from "../../assets/projects/salty_caramel.png";
import DormLight from "../../assets/projects/dorm_light.jpg";
import styles from "./Projects.module.css";

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
        <Row>
          <Col>
            <h2 className="mb-5">Fall 2020</h2>
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
        className={`d-sm-flex justify-content-center flex-column ${styles["projects-container"]}`}
      >
        <CardDeck>
          <ProjectCard
            title="Salty Caramel"
            src={SaltyCaramel}
            members="Jasmine Shum, Jennifer Wang, Felicia Renelus, Elizabeth Wu,
                Kevin Hsu"
            description="An app that aggresively reminds you to complete your tasks"
            link="https://github.com/kaisucode/salty-caramel"
            linkType="GitHub"
          />
          <ProjectCard
            title="Dorm Light Exploration"
            src={DormLight}
            members="Naveen Upender, Lucia Tian, Connie Liu, Eiden Spilker"
            description="A series of concepts and ideas for dorm lights fitting different
            needs and purposes"
            link="https://docs.google.com/presentation/d/1Gb7iQ9xp7kTHTq6S-3R4iYXj66qL_K9ZsjPutEnumq4/edit?usp=sharing"
            linkType="Google Slides"
          />
        </CardDeck>
      </Container>
    </div>
  );
}
