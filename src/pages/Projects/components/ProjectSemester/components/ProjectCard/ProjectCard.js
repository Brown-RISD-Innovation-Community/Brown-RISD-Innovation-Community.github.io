import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./ProjectCard.module.css";

export default function ProjectCard(props) {
  return (
    <Col xs={12} md={6} lg={4} className="my-3">
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
    </Col>
  );
}
