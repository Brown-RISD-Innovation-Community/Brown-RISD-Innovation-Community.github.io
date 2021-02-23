import React from "react";
import Circle from "../Circle/Circle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CircleRowReverse(props) {
  return (
    <Row className="mt-0 pb-5 d-flex align-items-center">
      <Col
        xs={12}
        md={{ span: 4, order: 12 }}
        className="d-flex justify-content-center"
      >
        <Circle heading={props.heading} />
      </Col>
      <Col
        xs={12}
        md={{ span: 7, order: 1, offset: 1 }}
        className="d-flex justify-content-left align-items-center"
      >
        {props.children}
      </Col>
    </Row>
  );
}
