import React from "react";
import Row from "react-bootstrap/Row";
import ProjectCard from "./components/ProjectCard/ProjectCard";
// import styles from "./ProjectSemester.module.css";

export default function ProjectSemester(props) {
  return (
    <>
      <h2 className="mt-5 mb-3 white-text">{props.semester}</h2>
      <Row className="justify-content-center">
        {props.projects.map((project) => (
          <ProjectCard
            title={project.title}
            src={project.src}
            description={project.description}
            members={project.members}
            link={project.link}
            linkType={project.linkType}
          />
        ))}
      </Row>
    </>
  );
}
