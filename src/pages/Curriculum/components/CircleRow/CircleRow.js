import React from "react";
import Circle from "../Circle/Circle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CircleRow(props) {
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
