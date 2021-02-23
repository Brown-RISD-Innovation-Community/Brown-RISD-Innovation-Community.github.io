import React from "react";
import Col from "react-bootstrap/Col";
import styles from "./Link.module.css";

export default function Link(props) {
  return (
    <Col>
      <h3>
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {props.children}
        </a>
      </h3>
    </Col>
  );
}
