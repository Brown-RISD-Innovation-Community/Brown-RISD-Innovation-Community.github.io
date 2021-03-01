import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import colorLogo from "../../assets/multicolor.png";
import styles from "./Footer.module.css";

export default function Footer() {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const currYear = getYear();

  return (
    <div className={`p-3 ${styles.container}`}>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <img
              className={`mt-2 ${styles.img}`}
              src={colorLogo}
              alt="BRIC logo"
            />
          </Col>
          <Col xs={12} md={4}>
            <div className="mb-3">
              Want to get involved? Join our community!
            </div>
            <iframe
              src="https://brownrisdinnovation.substack.com/embed"
              className={styles["email-input"]}
              frameBorder="0"
              title="Joining the substack"
            ></iframe>
          </Col>
          <Col xs={12} md={4} className="align-left">
            <ul>
              <li className="list-unstyled">
                <a className={styles.link} href="/about-us">
                  - About Us
                </a>
              </li>
              <li className="list-unstyled">
                <a className={styles.link} href="/calendar">
                  - Calendar
                </a>
              </li>
              <li className="list-unstyled">
                <a className={styles.link} href="/curriculum">
                  - Curriculum
                </a>
              </li>
              <li className="list-unstyled">
                <a className={styles.link} href="/contact">
                  - Contact Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="pt-4 justify-content-center">
          © {currYear} Brown RISD Innovation Community
        </Row>
      </Container>
    </div>
  );
}
