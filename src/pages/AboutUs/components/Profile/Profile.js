import React from "react";
import Col from "react-bootstrap/Col";
import styles from "./Profile.module.css";

export default function Profile(props) {
  return (
    <Col xs={12} md={3} className="">
      <div>
        <img
          src={props.src}
          alt={`headshot of ${props.name}`}
          className={styles.headshot}
        />
        <div className="font-weight-bold pt-3">{props.name}</div>
        <div>{props.year}</div>
        <div>{props.major}</div>
      </div>
    </Col>
  );
}
