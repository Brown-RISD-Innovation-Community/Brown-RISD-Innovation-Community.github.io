import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.members}
        </Card.Subtitle>
        <Card.Text className="mt-2">{props.description}</Card.Text>
        <Card.Link href={props.link}>{props.linkType}</Card.Link>
      </Card.Body>
    </Card>
  );
}
