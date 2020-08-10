import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Arrow from "../../assets/arrow.png";
import NavigationBar from "../../components/NavigationBar";

export default function index() {
  return (
    <div style={{ backgroundColor: "#D3143A" }}>
      <NavigationBar />
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=YnJvd24uZWR1X2owNjhuOGJxMzZtNG5vcTY0OG9yN2J0MzJnQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%237986CB"
        title="calendar"
        style={{
          border: "solid 1px #777",
          width: "800px",
          height: "600px",
          frameBorder: "0",
          scrolling: "no",
        }}
      ></iframe>
    </div>
  );
}
