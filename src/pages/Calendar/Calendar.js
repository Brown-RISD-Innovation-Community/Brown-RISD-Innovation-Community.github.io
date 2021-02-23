import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import styles from "./Calendar.module.css";

export default function Calendar() {
  return (
    <div style={{ backgroundColor: "#D3143A", color: "white" }}>
      <NavigationBar linkFontColor="white" />
      <Container>
        <div className="m-4" style={{ fontSize: "48px", margin: "5px" }}>
          CALENDAR
        </div>
        <div style={{ fontSize: "24px", marginBottom: "15px" }}>
          Our upcoming event information can be found below:
        </div>
        <Row className={styles["calendar-container"]}>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=YnJvd24uZWR1X2owNjhuOGJxMzZtNG5vcTY0OG9yN2J0MzJnQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%237986CB&amp;mode=WEEK"
            title="calendar"
            className={`mb-4 ${styles.calendar}`}
          ></iframe>
        </Row>
      </Container>
    </div>
  );
}
