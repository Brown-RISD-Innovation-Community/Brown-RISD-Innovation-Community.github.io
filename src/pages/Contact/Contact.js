import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Link from "./components/Link/Link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <NavigationBar linkFontColor="white" />
      <Container className="pt-5 mb-5">
        <Row className="font-weight-bold">
          <h2>
            <strong>CONNECT WITH US ON SOCIAL MEDIA</strong>
          </h2>
        </Row>
        <Row className="p-3">
          <Link href="https://www.facebook.com/brownrisdinnovation/">
            <AiFillFacebook className="mb-2" />
            <span className="d-none d-sm-inline">Facebook</span>
          </Link>
          <Link href="https://www.instagram.com/brownrisdinnovation/">
            <AiFillInstagram className="mb-2" />
            <span className="d-none d-sm-inline">Instagram</span>
          </Link>
          <Link href="https://www.linkedin.com/company/brownrisdinnovation/">
            <AiFillLinkedin className="mb-2" />
            <span className="d-none d-sm-inline">Linkedin</span>
          </Link>
        </Row>
      </Container>
      <Container className="mt-5 pb-5 justify-content-sm-center justify-content-md-start">
        <Row className="font-weight-bold">
          <h2>
            <strong>Looking to partner with us?</strong>
          </h2>
        </Row>
        <Row className={`pt-3 pb-3 px-3 ${styles.email}`}>
          Email us here:&nbsp;
          <a href="mailto:hello@brownrisdinnovation.com">
            hello@brownrisdinnovation.com
          </a>
        </Row>
      </Container>
    </div>
  );
}
