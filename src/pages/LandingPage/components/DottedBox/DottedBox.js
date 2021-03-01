import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./DottedBox.module.css";

export default function DottedBox(props) {
  return (
    <Container className="py-5">
      <div className={styles.dashed}>
        <Row className={styles["min-height-350"]}>
          <Col xs={12} md={4} className={`col-4 p-4 ${styles.header}`}>
            {props.cardTitle}
          </Col>
          <Col xs={12} md={8} className={`col-8 ${styles.text}`}>
            {props.children}
          </Col>
        </Row>
      </div>
    </Container>
  );
}
